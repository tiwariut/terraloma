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
    value: 'PHONE',
    group: NAVIGATION_GROUPS.GROUP_2.value,
    label: COMPANY_DETAILS.PHONE,
    navigateTo: `tel:${COMPANY_DETAILS.PHONE}`,
    type: 'btn',
    btnType: 'outline',
    iconName: ICON_PHONE,
    iconPlacement: PLACEMENT_POSITIONS.LEFT
  },
  {
    value: 'CONTACT',
    group: NAVIGATION_GROUPS.GROUP_2.value,
    navigateTo: '#footer',
    label: 'Contact Us',
    type: 'btn',
    iconName: ICON_CHEVRON_RIGHT,
    iconType: 'white',
    iconPlacement: PLACEMENT_POSITIONS.RIGHT
  }
];

export const FOOTER_NAVIGATION = [
  {
    value: 'HOME',
    label: 'Home',
    navigateTo: '#home'
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
