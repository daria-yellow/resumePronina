import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { textInfo } from './info/TextInfo';
import { AboutMe, EducationPage, ExperiencePage, SkillsePage } from './pages';
import { Navigation } from './components';

export const App: React.FC = () => {
  return (
    <IntlProvider locale={'en'} messages={textInfo}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/skills" element={<SkillsePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </IntlProvider>
  );
};

export default App;
