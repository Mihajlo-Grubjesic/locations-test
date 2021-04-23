import { FC, useState } from 'react';
import { ReactComponent as TimezoneIcon } from '../../assets/timezone.svg';
import { ReactComponent as UserCountIcon } from '../../assets/users.svg';
import { ReactComponent as ViewsIcon } from '../../assets/views.svg';
import { ReactComponent as EditIcon } from '../../assets/edit.svg';

import { transformDate } from '../../utils/transformDate';

import './LocationsCard.scss';

interface LocationsCardProps {
  name: string;
  createdAt: string;
  userCount: number;
  viewsCount: number;
  onCardClick: Function;
}
const LocationsCard: FC<LocationsCardProps> = ({
  name,
  createdAt,
  userCount,
  viewsCount,
  onCardClick,
}) => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div
      className="location-card"
      onClick={() => onCardClick()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {hovered && (
        <div className="location-card_item_icon location-card_item__hover-icon">
          <EditIcon />
        </div>
      )}
      <span className="primary-label font-medium">{name}</span>
      <div className="location-card_item">
        <UserCountIcon className="location-card_item_icon" />
        <span className="primary-label font-tiny text-regular">
          {userCount} Users
        </span>
      </div>
      <div className="location-card_item">
        <TimezoneIcon className="location-card_item_icon" />
        <span className="primary-label font-tiny text-regular">
          {transformDate(new Date(createdAt))}
        </span>
      </div>
      <div className="location-card_item">
        <ViewsIcon className="location-card_item_icon" />
        <span className="primary-label font-tiny text-regular">
          {viewsCount} Views
        </span>
      </div>
    </div>
  );
};

export default LocationsCard;
