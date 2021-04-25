import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import './Link.scss';

const AppLink: FC<LinkProps> = ({ to, children }) => {
  return (
    <Link className="app-link" to={to}>
      {children}
    </Link>
  );
};

export default AppLink;
