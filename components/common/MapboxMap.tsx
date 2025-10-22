'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

// Set your Mapbox access token here or via NEXT_PUBLIC_MAPBOX_TOKEN env var
mapboxgl.accessToken =
  process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '<YOUR_MAPBOX_ACCESS_TOKEN>';

interface MapboxMapProps {
  center?: [number, number]; // [lng, lat]
  zoom?: number;
  style?: React.CSSProperties;
  popupText?: string;
}

export default function MapboxMap({
  center = [-98.05506662098485, 30.257672374816927], // Example: Mirela Ann Rd
  zoom = 10,
  style = { height: '400px', width: '100%' },
  popupText = 'TerraLoma - Residential Lots A through G on Mirela Ann Rd.'
}: MapboxMapProps) {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center,
      zoom
    });

    // Add a marker at the center with a popup
    const popup = new mapboxgl.Popup({ offset: 25 }).setText(popupText);
    new mapboxgl.Marker().setLngLat(center).setPopup(popup).addTo(map.current);

    map.current.addControl(new mapboxgl.NavigationControl());

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [center, zoom]);

  return <div ref={mapContainer} style={style} />;
}
