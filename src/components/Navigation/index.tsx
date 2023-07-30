import type React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { navigationRoutes } from './NavigationRoutes';

export const Navigation: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<string>(
    window.location.pathname,
  );

  return (
    <div className="navigation">
      {navigationRoutes.map((route) => (
        <Link
          to={route.path}
          key={route.path}
          onClick={() => {
            setSelectedRoute(route.path);
          }}
          className={`${
            selectedRoute === route.path ? 'navigation-selected' : ''
          }`}
        >
          {route.name}
        </Link>
      ))}
    </div>
  );
};
