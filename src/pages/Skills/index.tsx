import { FormattedMessage } from 'react-intl';
import { InfoPage } from '../../components';
import { languagesContent, skillsContent } from '../../info/Contents';
import './Skills.css';

export const SkillsePage: React.FC = () => {
  return (
    <div className="skills">
      <InfoPage
        content={skillsContent}
        header={<FormattedMessage id="page.skills.skills.header" />}
        withLine={false}
      />
      <InfoPage
        content={languagesContent}
        header={<FormattedMessage id="page.skills.languages.header" />}
        withLine={false}
      />
    </div>
  );
};

// export default SkillsePage;
