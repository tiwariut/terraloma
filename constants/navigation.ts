import { ICON_CHEVRON_RIGHT, ICON_PHONE } from './icons';
import { COMPANY_DETAILS } from './texts';

export const NAVIGATION_GROUPS: any = {
  GROUP_1: {
    value: 'GROUP_1',
    classModifier: 'group-1'
  },
  GROUP_2: {
    value: 'GROUP_2',
    classModifier: 'group-2'
  }
};

export const PLACEMENT_POSITIONS = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
};

export const HEADER_NAVIGATION = [
  {
    value: 'HOME',
    label: 'Home',
    group: NAVIGATION_GROUPS.GROUP_1.value,
    navigateTo: '#home'
  },
  {
    value: 'DESCRIPTION',
    label: 'Description',
    group: NAVIGATION_GROUPS.GROUP_1.value,
    navigateTo: '#description'
  },
  {
    value: 'PHOTOS',
    label: 'Photos',
    group: NAVIGATION_GROUPS.GROUP_1.value,
    navigateTo: '#photos'
  },
  {
    value: 'MAP',
    label: 'Map',
    group: NAVIGATION_GROUPS.GROUP_1.value,
    navigateTo: '#map'
  },
  {
    value: 'AGENT',
    label: 'Listing Agent',
    group: NAVIGATION_GROUPS.GROUP_1.value,
    navigateTo: '#agent'
  },
  {
    value: 'REQUEST_INFO',
    label: 'Request Info',
    group: NAVIGATION_GROUPS.GROUP_1.value,
    navigateTo: '#contact'
  },
  {
    value: 'SHARE',
    label: 'Share',
    group: NAVIGATION_GROUPS.GROUP_1.value,
    navigateTo: '#share'
  }
];

export const FOOTER_NAVIGATION = [
  {
    value: 'HOME',
    label: 'Home',
    navigateTo: '#home'
  },
  {
    value: 'DESCRIPTION',
    label: 'Description',
    navigateTo: '#description'
  },
  {
    value: 'AGENT',
    label: 'Listing Agent',
    navigateTo: '#agent'
  },
  {
    value: 'REQUEST_INFO',
    label: 'Request Info',
    navigateTo: '#contact'
  }
];

export const LICENSES = [
  {
    value: 'TREC_BROKER',
    label: 'TREC Broker License #9000968; #577993'
  },
  {
    value: 'TREC_PROTECTION',
    label: `TREC Protection Notice`,
    navigateTo: '/documents/trec-protection-notice.pdf',
    openInNewTab: true
  },
  {
    value: 'TREC_INFORMATION',
    label: 'TREC Information About Brokerage Services',
    navigateTo: '/documents/iabs.pdf',
    openInNewTab: true
  }
];

export const USER = 'USER';

export const DISABLED_NAV_PAGES = [];
