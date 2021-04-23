import { FC } from 'react';
import { ReactComponent as TimezoneIcon } from '../../assets/timezone.svg';
import { ReactComponent as UserCountIcon } from '../../assets/users.svg';
import { ReactComponent as ViewsIcon } from '../../assets/views.svg';

import './LocationsCard.scss';

interface LocationsCardProps {
  name: string;
  createdAt: string;
  userCount: number;
  viewsCount: number;
}
const LocationsCard: FC<LocationsCardProps> = ({
  name,
  createdAt,
  userCount,
  viewsCount,
}) => {
  return (
    <div className="location-card">
      <span className="primary-label font-medium">{name}</span>
      <div className="location-card_item">
        <UserCountIcon className="location-card_item_icon" />
        <span className="secondary-label font-tiny">{userCount}</span>
      </div>
      <div className="location-card_item">
        <TimezoneIcon className="location-card_item_icon" />
        <span className="secondary-label font-tiny">{createdAt}</span>
      </div>
      <div className="location-card_item">
        <ViewsIcon className="location-card_item_icon" />
        <span className="secondary-label font-tiny">{viewsCount} Views</span>
      </div>
    </div>
  );
};

export default LocationsCard;
