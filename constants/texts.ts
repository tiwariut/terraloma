import logo from '@/images/logo.png';

import hero from '@/images/hero.jpg';

import equalHousingOpportunity from '@/images/equal-housing-opportunity.png';
import texasRealtors from '@/images/texas-realtors.png';
import realtor from '@/images/realtor.png';
import austinBoardOfRealtors from '@/images/austin-board-of-realtors.png';

export const METADATA = {
  HOME: {
    TITLE: 'TerraLoma | Residential Lots',
    DESCRIPTION:
      'Residential Lots A through G on Mirela Ann Rd. Dripping Springs, TX'
  }
};

export const COMPANY_DETAILS = {
  NAME: 'TerraLoma',
  TAGLINE: 'Residential Lots A through G on Mirela Ann Rd.',
  AGENT_COMPANY: 'Austin Options Realty',
  PHONE: '(512) 250-9882',
  EMAIL: 'rose.optionsrealty@gmail.com',
  ADDRESS_LINE_1: '6101 W. Courtyard Dr.,',
  ADDRESS_LINE_2: ' Bldg 2, Suite 100,',
  ADDRESS_LINE_3: ' Austin, TX 78730',
  BUSINESS_HOURS: 'Mon - Fri, 9 am - 5 pm',
  LOGO: logo,
  COVER_IMG: {
    SRC: hero,
    ALT_TEXT: 'Austin skyline'
  }
};

export const AGENT_DETAILS = {
  NAME: 'Rose Castro',
  COMPANY: {
    NAME: 'Austin Options Realty',
    WEBSITE: 'https://www.austinoptionsrealestate.com',
    PHONE: '(512) 250-9882'
  },
  DESIGNATION: 'Listing Agent',
  EMAIL: 'rose.optionsrealty@gmail.com',
  PHONE: '(512) 656-3281',
  BIO: 'I was raised on a dairy farm in Wisconsin bringing warm-hearted values to the table such as honesty, integrity and a sympathetic ear. I’ve enjoyed being a REALTOR® since 2005, and while I can serve all of your real estate needs, I specialize in residential properties. I am passionate about giving 100% to all of my clients and after working in “Corporate America” for 16 years, I am bringing all of my management skills to my clients and my real estate business. As co-owner of Austin Options Realty and Austin Options Property Management, ASSOCIATE BROKER / REALTOR®, and owner of 15 investment properties and 5 short-term rental properties, I can ensure you are receiving the highest quality service whether you are looking to buy or sell your home, looking for investment opportunities, or looking to lease or hire a property management company to manage your investment properties.',
  TREC_LICENSE: '#535962'
};

export const DESCRIPTION_SECTION_CONTENT = {
  COMPANY: {
    HEADING: 'Property Description',
    TEXT_1: `
      <p>
        <span class='u-highlight-text-secondary u-text-bold'>
          TerraLoma
        </span> is a Hill Country community that embraces <span class='u-highlight-text-secondary u-text-bold'>
          sustainability
        </span> and <span class='u-highlight-text-secondary u-text-bold'>
          eco-friendly building practices</span>, including <span class='u-highlight-text-secondary u-text-bold'>
          rainwater harvesting
        </span> and <span class='u-highlight-text-secondary u-text-bold'>
          solar energy</span>. Build your <span class='u-highlight-text-secondary u-text-bold'>
          dream home
        </span> on these <span class='u-highlight-text-secondary u-text-bold'>
          1.12 acre to 2.66 acre lots
        </span>
        featuring <span class='u-highlight-text-secondary u-text-bold'>stunning Hill Country views</span> and <span class='u-highlight-text-secondary u-text-bold'>
          mature trees</span>, in a neighborhood inspired by the beauty and spirit of <span class='u-highlight-text-secondary u-text-bold'>
          nearby TerraScena</span>.
      </p>
    `,
    TEXT_2: `
      <p>
        All homes will generally follow <span class='u-highlight-text-secondary u-text-bold'>
          green building standards
        </span> established by the <span class='u-highlight-text-secondary u-text-bold'>
          Austin Energy Green Building Program</span>, with <span class='u-highlight-text-secondary u-text-bold' n>
          rainwater harvesting
        </span> as the <span class='u-highlight-text-secondary u-text-bold'>
          primary water source</span>.
      </p>
    `,
    TEXT_3: `
      <p>
        The setting is both <span class='u-highlight-text-secondary u-text-bold'>
          scenic and convenient
        </span>
        —just <span class='u-highlight-text-secondary u-text-bold'>
          10 minutes to downtown Dripping Springs
        </span> and about <span class='u-highlight-text-secondary u-text-bold'>
          20 minutes to Bee Cave, the Hill Country Galleria, and Lakeway</span>. Located in the highly rated <span class='u-highlight-text-secondary u-text-bold'>Dripping Springs ISD</span>, with zoning for <span class='u-highlight-text-secondary u-text-bold'>
          Dripping Springs Elementary, Middle, and High School</span>.
      </p>
    `,
    TEXT_4: 'Outside city limits and the Extraterritorial Jurisdiction (ETJ).',
    TEXT_5:
      'Build Native and Workshop No. 5 are building a stunning 2-story home on Lot B.'
  }
};

export const CONTACT_SECTION_CONTENT = {
  HEADING: 'Request Info'
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
