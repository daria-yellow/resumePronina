import { FormattedMessage } from 'react-intl';

interface navigationRoutesType {
  name: React.ReactNode;
  path: string;
}

export const navigationRoutes: navigationRoutesType[] = [
  { name: <FormattedMessage id="navigation.home" />, path: '/' },
  {
    name: <FormattedMessage id="navigation.experience" />,
    path: '/experience',
  },
  {
    name: <FormattedMessage id="navigation.education" />,
    path: '/education',
  },
  { name: <FormattedMessage id="navigation.skills" />, path: '/skills' },
];
