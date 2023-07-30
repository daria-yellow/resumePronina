import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

export interface contactsType {
  contactName: React.ReactNode;
  info: React.ReactNode;
}

export const myContacts = [
  {
    contactName: <FormattedMessage id="page.about.socials.phone" />,
    info: <FormattedMessage id="page.about.socials.phone.value" />,
  },
  {
    contactName: <FormattedMessage id="page.about.socials.email" />,
    info: <FormattedMessage id="page.about.socials.email.value" />,
  },
  {
    contactName: <FormattedMessage id="page.about.socials.linkedin" />,
    info: (
      <Link
        to={'https://www.linkedin.com/in/daria-pronina-7a55311b0/'}
        target="_blank"
      >
        <FormattedMessage id="page.about.socials.linkedin.value" />
      </Link>
    ),
  },
  {
    contactName: <FormattedMessage id="page.about.socials.github" />,
    info: (
      <Link to={'https://github.com/daria-yellow'} target="_blank">
        <FormattedMessage id="page.about.socials.github.value" />
      </Link>
    ),
  },
];
