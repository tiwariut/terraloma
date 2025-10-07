import {
  ICON_HOME_SEARCH,
  ICON_HOME_KEY,
  ICON_HOME_BAG,
  ICON_CHEVRON_RIGHT
} from './icons';

import logo from 'public/images/logo.png';

import hero from 'public/images/hero.jpg';
import livingRoom from 'public/images/living-room.jpg';
import bridge360 from 'public/images/bridge-360.jpg';

import caseyBowman from 'public/images/casey-bowman.png';
import mariaYbarra from 'public/images/maria-ybarra.png';
import adrianBrown from 'public/images/adrian-brown.png';

import equalHousingOpportunity from 'public/images/equal-housing-opportunity.png';
import texasRealtors from 'public/images/texas-realtors.png';
import realtor from 'public/images/realtor.png';
import austinBoardOfRealtors from 'public/images/austin-board-of-realtors.png';

export const METADATA = {
  HOME: {
    TITLE: 'TerraLoma | Residential Lots',
    DESCRIPTION:
      'Residential Lots A through G on Mirela Ann Rd. Dripping Springs, TX'
  }
};

export const COMPANY_DETAILS = {
  NAME: 'TerraLoma',
  TAGLINE:
    'Residential Lots A through G on Mirela Ann Rd. Dripping Springs, TX',
  PHONE: '(512)-250-9882',
  EMAIL: 'rose.optionsrealty@gmail.com',
  ADDRESS_LINE_1: '6101 W. Courtyard Dr,',
  ADDRESS_LINE_2: ' Bldg 2. Suite 100,',
  ADDRESS_LINE_3: ' Austin, TX 78730',
  BUSINESS_HOURS: 'Mon - Fri, 9 am - 5 pm',
  LOGO: logo,
  COVER_IMG: {
    SRC: hero,
    ALT_TEXT: 'Austin skyline'
  }
};

export const SERVICES_SECTION_CONTENT = [
  {
    id: '1',
    title: 'Property Management Service',
    description: 'Are you looking for residential property management?',
    icon: ICON_HOME_SEARCH,
    redirectTo: '/property-management-services'
  },
  {
    id: '2',
    title: 'Free Rental Analysis',
    description: 'Would you like to know how much you can charge for rent?',
    icon: ICON_HOME_KEY,
    redirectTo: '/owner-faqs'
  },
  {
    id: '3',
    title: 'Find a Home to Lease',
    description:
      'Looking for your next home in the Austin and surrounding areas?',
    icon: ICON_HOME_BAG,
    redirectTo: '/available-rentals'
  }
];

export const PROPERTY_MANAGEMENT_CONTENT = {
  HEADING: 'Property Management Services',
  SECTION_1_HEADING: 'Our Property Management Services',
  SECTION_1_TEXT_1:
    'Own a rental property in Austin and tired of managing it yourself? Look no further! With almost two decades of experience, our property managers provide trustworthy oversight of your rental home in the Greater Austin area. This ensures the best management for your rental property and leaves you with the peace of mind that your investment is in good hands. TerraLoma portfolio is vast as we manage rental homes all the way from Kyle up to Liberty Hill and everything in between. When you work with us, we take the hassle away. Our company was built for landlords by landlords. Your rental property will be managed by a team that understands owning rental property of their own and have the knowledge to properly manage your property.',
  SECTION_1_TEXT_2: ` 
    <p>
      <span class='u-text-bold u-highlight-text-primary'>
        Our main focus is to be the best property managers in
        Austin, Texas
      </span> while never sacrificing the best service to our owners and
      tenants.
    </p>`,
  SECTION_2_HEADING: 'What We Offer You!',
  SECTION_2_TEXT_1:
    'TerraLoma Property Management has been providing property management in Austin since 2005. We believe in more than just collecting rent and paying bills. When you partner with TerraLoma you can be confident that we are dedicated to keeping your investment in good repair at minimal costs and building a trusting relationship.',
  SECTION_2_TEXT_2:
    'Take a load off and explore the benefits of a professional property manager and you can trust us to handle the following:',
  SECTION_2_POINTERS: [
    'Daily operations of management ',
    'Tenant communication',
    'Collect and process rents, invoices, HOAs, insurance, etc. ',
    'Complete transparency of all expenses',
    'Problem solving',
    'Lease renewals ',
    'Aggressive rent collection',
    'Compliance with all State and Local Property Codes',
    'Analyzing market trends and preparing accordingly',
    'Listing your home with highly qualified licensed real estate agents',
    'Marketing your home on over 10+ websites ',
    'Encourage smart upgrades and maintenance investments to increase value',
    'Extensive and fair qualification processing on applications ',
    '24/7 maintenance for emergencies '
  ],
  IMG: livingRoom,
  BTN_TEXT: 'Learn more',
  BTN_ICON: ICON_CHEVRON_RIGHT,
  REDIRECT_TO: '/property-management-services'
};

export const DIFFERENCE_SECTION_CONTENT = {
  HEADING: `
    <h2 class='heading-secondary u-highlight-text-primary u-margin-bottom-small'>
      The difference you'll see with <span class='u-highlight-text-secondary'>
        TerraLoma
      </span>
    </h2>
  `,
  TEXT: 'TerraLoma Property Management has been providing property management in Austin since 2005. We believe in more than just collecting rent and paying bills. When you partner with TerraLoma you can be confident that we are dedicated to keeping your investment in good repair at minimal costs and building a trusting relationship.',
  IMG: bridge360,
  BTN_TEXT: 'Learn more',
  BTN_ICON: ICON_CHEVRON_RIGHT,
  REDIRECT_TO: '/owner-faqs'
};

export const REVIEWS_SECTION_CONTENT = {
  HEADING: 'Reviews Trusted by Owners, Investors and Renters',
  REVIEWS: [
    {
      id: '1',
      review:
        'Great company to deal with. I’ve been renting with them for around 5 years and it’s been very smooth. They are responsive to any repair needs and make the overall rental experience easy to enjoy. Our rental house has been a fantastic experience since moving from DFW. Great location, great neighborhood and good neighbors.',
      userName: 'Casey Bowman',
      userType: 'Local Guide',
      userImg: caseyBowman
    },
    {
      id: '2',
      review:
        "One of the best experiences we have had with leasing. Communication and integrity at its finest. Whenever we had issues it was addressed within minutes. Even if it couldn't be fixed the same day we were informed of exactly what was going on and what to expect. The maintenance team is very friendly and do a wonderful job. Highly recommend.",
      userName: 'Maria Ybarra',
      userType: 'Local Guide',
      userImg: mariaYbarra
    },
    {
      id: '3',
      review:
        'Rachel and the entire staff at TerraLoma have been phenomenal to work with! Anytime I call or email they respond quickly, get things taken care of and they’re easy to work with!',
      userName: 'Adrian Brown',
      userType: '',
      userImg: adrianBrown
    }
  ],
  BTN_TEXT: 'Tell Us How We’re Doing',
  BTN_ICON: ICON_CHEVRON_RIGHT,
  REDIRECT_TO:
    'https://www.google.com/maps/place/Austin+Options+Realty/@30.3566182,-97.8012494,17z/data=!4m8!3m7!1s0x8644cba77ac9941b:0x282abf866e1e75cd!8m2!3d30.3566182!4d-97.7986745!9m1!1b1!16s%2Fg%2F1tfgpsqp?authuser=0&hl=en&entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D'
};

export const AREAS = [
  'Austin',
  'Bee Cave',
  'Buda',
  'Cedar Creek',
  'Cedar Park',
  'Del Valle',
  'Driftwood',
  'Dripping Springs',
  'Elgin',
  'Georgetown',
  'Hutto',
  'Jonestown',
  'Kyle',
  'Lago Vista',
  'Lakeway',
  'Leander',
  'Liberty Hill',
  'Manchaca',
  'Manor',
  'Pflugerville',
  'Rollingwood',
  'Round Rock',
  'Spicewood',
  'Taylor',
  'West Lake Hills'
];

export const ABOUT_US_SECTION_CONTENT = {
  COMPANY: {
    HEADING: 'Our Company',
    TEXT_1: `
      <p>
       The owners of TerraLoma Property Management Rose and Dan Castro personally own approximately <span class="u-highlight-text-primary u-text-bold">20 of their own rental properties.</span> They know what owners of rental property want and need on an ongoing basis. They know how to deal with tenants. They know how to deal with emergencies when they come up. 
       Rose has been a Realtor <sup>&reg;</sup> since 2005 and brings a wealth of knowledge to the company.
      </p>
    `,
    TEXT_2: `
      <p>
        In addition, Dan Castro has been a real estate attorney since 1998 with 27 years of experience. Dan is also the founder of Investor Underground, LLC – <span class='u-highlight-text-primary u-text-bold'>
        a real estate networking group with approximately 64,000 members</span>. Dan is constantly brainstorming with and helping investors buy and sell investment property and structuring complex real estate transactions. 
      </p>
    `,
    TEXT_3:
      'With combined experience in real estate, law, and personal investments in rental properties it became glaringly evident that their passion could make all aspects of real estate easier for the people of Greater Austin. As Brokers and owners, they have a comprehensive understanding of the economic forces at work in the local real estate market. Their success is based on experience, knowledge, dedication and focus by them and the whole staff to ensure the best experience for both owners and tenants.'
  },
  AREAS: {
    HEADING: 'Areas We Serve',
    LIST_1: AREAS.slice(0, 13),
    LIST_2: AREAS.slice(13)
  }
};

export const ASSOCIATIONS_SECTION_CONTENT = {
  HEADING: 'Proven & Trusted',
  LIST: [
    {
      id: '1',
      title: 'Equal Housing Opportunity',
      logo: equalHousingOpportunity
    },
    { id: '2', title: 'Texas Realtors', logo: texasRealtors },
    { id: '3', title: 'Realor', logo: realtor },
    { id: '4', title: 'Austin Board of Realtors', logo: austinBoardOfRealtors }
  ]
};
