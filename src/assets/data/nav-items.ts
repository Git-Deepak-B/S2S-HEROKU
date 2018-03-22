import { NavItem } from '../../app/common/types/NavItem';

export const NAVITEMS: NavItem[] = [
  {
    name: 'Dashboard',
    adminOnly: false,
    href: '/dash',
    icon: 'ti-layout-grid2'
  },
  {
    name: 'Create Request',
    adminOnly: false,
    href: '/provision/create',
    icon: 'ti-comment-alt'
  },
  {
    name: 'View All Requests',
    adminOnly: false,
    href: '/provisions',
    icon: 'ti-support'
  },
  {
    name: 'View Customers',
    adminOnly: true,
    href: '/customers',
    icon: 'ti-mobile'
  },
  {
    name: 'Register User',
    adminOnly: true,
    href: '/user/create',
    icon: 'ti-book'
  },
];
