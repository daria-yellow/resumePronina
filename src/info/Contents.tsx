import { FormattedMessage } from 'react-intl';
import { type InfoContent } from '../components/InfoPage';

export const experienceContent: InfoContent[] = [
  {
    name: <FormattedMessage id="page.experience.tutor.name" />,
    firstRow: <FormattedMessage id="page.experience.tutor.years" />,
  },
  {
    name: <FormattedMessage id="page.experience.analyst.name" />,
    description: <FormattedMessage id="page.experience.analyst.description" />,
    firstRow: <FormattedMessage id="page.experience.analyst.years" />,
  },
  {
    name: <FormattedMessage id="page.experience.developer.name" />,
    description: (
      <FormattedMessage id="page.experience.developer.description" />
    ),
    firstRow: <FormattedMessage id="page.experience.developer.years" />,
  },
];

export const educationContent: InfoContent[] = [
  {
    name: <FormattedMessage id="page.education.lyceum.name" />,
    description: <FormattedMessage id="page.education.lyceum.description" />,
    firstRow: <FormattedMessage id="page.education.lyceum.years" />,
  },
  {
    name: <FormattedMessage id="page.education.bachelor.name" />,
    description: <FormattedMessage id="page.education.bachelor.description" />,
    firstRow: <FormattedMessage id="page.education.bachelor.years" />,
  },
  {
    name: <FormattedMessage id="page.education.master.name" />,
    description: <FormattedMessage id="page.education.master.description" />,
    firstRow: <FormattedMessage id="page.education.master.years" />,
  },
];

export const skillsContent: InfoContent[] = [
  {
    firstRow: <FormattedMessage id="page.skills.skills.main.name" />,
    description: <FormattedMessage id="page.skills.skills.main.description" />,
  },
  {
    firstRow: <FormattedMessage id="page.skills.skills.additional.name" />,
    description: (
      <FormattedMessage id="page.skills.skills.additional.description" />
    ),
  },
];

export const languagesContent: InfoContent[] = [
  {
    firstRow: <FormattedMessage id="page.skills.languages.ukrainian.name" />,
    description: (
      <FormattedMessage id="page.skills.languages.ukrainian.description" />
    ),
  },
  {
    firstRow: <FormattedMessage id="page.skills.languages.russian.name" />,
    description: (
      <FormattedMessage id="page.skills.languages.russian.description" />
    ),
  },

  {
    firstRow: <FormattedMessage id="page.skills.languages.english.name" />,
    description: (
      <FormattedMessage id="page.skills.languages.english.description" />
    ),
  },
];

export const aboutMeContent: InfoContent[] = [
  {
    name: <FormattedMessage id="page.about.info.about.header" />,
    description: <FormattedMessage id="page.about.info.about.description" />,
  },
  {
    name: <FormattedMessage id="page.about.info.achievements.header" />,
    description: (
      <ul>
        <li>
          <FormattedMessage id="page.about.info.achievements.description.first" />
        </li>
        <li>
          <FormattedMessage id="page.about.info.achievements.description.second" />
        </li>
        <li>
          <FormattedMessage id="page.about.info.achievements.description.third" />
        </li>
      </ul>
    ),
  },
  {
    name: <FormattedMessage id="page.about.info.objective.header" />,
    description: (
      <FormattedMessage id="page.about.info.objective.description" />
    ),
  },
];
