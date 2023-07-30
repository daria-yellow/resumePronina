import React, { useCallback } from 'react';
import { type contactsType, myContacts } from '../../info/Contacts';
import { aboutMeContent } from '../../info/Contents';
import { FormattedMessage } from 'react-intl';
import './AboutMe.css';
import { InfoPage } from '../../components';
import myPhoto from '../../images/myPhoto.jpg';

export const AboutMe: React.FC = () => {
  const renderSocial = useCallback((elem: contactsType) => {
    return (
      <React.Fragment>
        <div>{elem.contactName}:</div>
        <div>{elem.info}</div>
      </React.Fragment>
    );
  }, []);

  return (
    <div className="about-me">
      <div className="about-me__content">
        <div className="about-me__name">
          <div>
            <FormattedMessage id="page.about.name" />
          </div>
          <div>
            <FormattedMessage id="page.about.surname" />
          </div>
        </div>
        <img src={myPhoto} width={350} height={350} alt="myPhoto"></img>
        <div className="about-me__socials">
          {myContacts.map((item) => (
            <div
              key={myContacts.indexOf(item) + 1}
              className="about-me__socials-item"
            >
              {renderSocial(item)}
            </div>
          ))}
        </div>
      </div>
      <InfoPage content={aboutMeContent} />
    </div>
  );
};
