import React, { useCallback } from 'react';
import './InfoPage.scss';

export interface InfoContent {
  name?: React.ReactNode;
  description?: React.ReactNode;
  firstRow?: React.ReactNode;
}

interface InfoPageProps {
  header?: React.ReactNode;
  content: InfoContent[];
  withLine?: boolean;
}

export const InfoPage: React.FC<InfoPageProps> = ({
  header,
  content,
  withLine = true,
}: InfoPageProps) => {
  const renderItem = useCallback(
    (item: InfoContent) => {
      return (
        <React.Fragment>
          {withLine && <div className="info-page__dot"></div>}
          {item.firstRow && (
            <div className="info-page__content-item-first-row">
              {item.firstRow}
            </div>
          )}
          <div className="info-page__content-item-text">
            {item.name && (
              <div className="info-page__content-item-text-name">
                {item.name}
              </div>
            )}
            {item.description && <div>{item.description}</div>}
          </div>
        </React.Fragment>
      );
    },
    [withLine],
  );

  return (
    <div className="info-page">
      {header && <div className="info-page__header">{header}</div>}
      <div className="info-page__block">
        {withLine && (
          <div className="info-page__vertical-line">
            <div className="info-page__dot info-page__dot-last"></div>
          </div>
        )}
        <div className="info-page__content">
          {content.map((item) => (
            <div
              className="info-page__content-item"
              key={content.indexOf(item) + 1}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
