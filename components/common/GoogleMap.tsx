'use client';

import { useEffect, useRef, useState } from 'react';

interface GoogleMapProps {
  center: { lat: number; lng: number };
  zoom: number;
  popupText: string;
  categories?: any;
  style?: React.CSSProperties;
}

export default function GoogleMap({
  center,
  zoom,
  popupText,
  categories,
  style = { height: '400px', width: '100%' }
}: GoogleMapProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('');

  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<{ [key: string]: google.maps.Marker[] }>({});
  const mainMarkerRef = useRef<google.maps.Marker | null>(null);

  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (mapContainer.current && !map.current) {
        map.current = new google.maps.Map(mapContainer.current, {
          center,
          zoom,
          mapTypeControl: true,
          streetViewControl: true,
          fullscreenControl: true
        });

        // Add main marker at center
        mainMarkerRef.current = new google.maps.Marker({
          position: center,
          map: map.current,
          title: 'TerraLoma'
        });

        const infoWindow = new google.maps.InfoWindow({
          content: popupText
        });

        mainMarkerRef.current.addListener('click', () => {
          infoWindow.open(map.current!, mainMarkerRef.current!);
        });
      }
    };

    if (!document.querySelector(`script[src*="maps.googleapis.com"]`)) {
      document.head.appendChild(script);
    } else {
      script.onload(null as any);
    }

    return () => {
      // Cleanup markers
      Object.values(markersRef.current).forEach((markers) => {
        markers.forEach((marker) => marker.setMap(null));
      });
      if (mainMarkerRef.current) {
        mainMarkerRef.current.setMap(null);
      }
    };
  }, [center, zoom, popupText]);

  const toggleCategory = async (categoryId: string) => {
    // Remove previous markers
    if (markersRef.current[activeCategoryId]) {
      markersRef.current[activeCategoryId].forEach((marker) =>
        marker.setMap(null)
      );
      markersRef.current[activeCategoryId] = [];
    }

    if (activeCategoryId === categoryId) {
      setActiveCategoryId('');
    } else {
      if (map.current) {
        await fetchAndAddMarkers(categoryId);
      }

      setActiveCategoryId(categoryId);
    }
  };

  const fetchAndAddMarkers = async (categoryId: string) => {
    if (!map.current) return;

    const category = categories.find((c: any) => c.id === categoryId);
    if (!category) return;

    // Check cache first
    const cacheKey = `places_${categoryId}_${center.lat}_${center.lng}`;
    const cached = sessionStorage.getItem(cacheKey);

    if (cached) {
      try {
        const { data, timestamp } = JSON.parse(cached);
        const age = Date.now() - timestamp;
        const maxAge = 24 * 60 * 60 * 1000; // 24 hours

        if (age < maxAge) {
          renderMarkers(categoryId, category, data);
          return;
        } else {
          sessionStorage.removeItem(cacheKey);
        }
      } catch (e) {
        console.warn('Cache parse error:', e);
      }
    }

    // Fetch from API
    const service = new google.maps.places.PlacesService(map.current);

    const request = {
      location: center,
      radius: 5000, // 5km radius
      type: categoryId
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        // Cache the results
        const cacheable = results.map((place) => ({
          name: place.name,
          vicinity: place.vicinity,
          lat: place.geometry?.location?.lat(),
          lng: place.geometry?.location?.lng()
        }));

        sessionStorage.setItem(
          cacheKey,
          JSON.stringify({
            data: cacheable,
            timestamp: Date.now()
          })
        );

        renderMarkers(categoryId, category, cacheable);
      } else {
        console.warn(`No places found for ${categoryId}. Status: ${status}`);
      }
    });
  };

  const renderMarkers = (categoryId: string, category: any, places: any[]) => {
    if (!map.current) return;

    if (!markersRef.current[categoryId]) {
      markersRef.current[categoryId] = [];
    }

    places.forEach((place) => {
      if (place.lat && place.lng) {
        const marker = new google.maps.Marker({
          position: { lat: place.lat, lng: place.lng },
          map: map.current,
          title: place.name,
          label: {
            text: category.icon,
            fontSize: '20px'
          },
          icon: {
            url:
              'data:image/svg+xml;charset=UTF-8,' +
              encodeURIComponent(
                `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><text x="10" y="30" font-size="24">${category.icon}</text></svg>`
              ),
            scaledSize: new google.maps.Size(40, 40)
          }
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `<strong>${place.name}</strong><br>${place.vicinity || ''}`
        });

        marker.addListener('click', () => {
          infoWindow.open(map.current!, marker);
        });

        markersRef.current[categoryId].push(marker);
      }
    });
  };

  return (
    <div className='google-map'>
      <ul className='google-map__category-list'>
        {categories.map(({ id, label }: any) => (
          <li
            onClick={() => toggleCategory(id)}
            key={id}
            className={`google-map__category-item ${activeCategoryId === id ? 'google-map__category-item--active' : ''}`}
          >
            {label}
          </li>
        ))}
      </ul>
      <div ref={mapContainer} style={style} />
    </div>
  );
}
