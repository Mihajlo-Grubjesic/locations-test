import { FC, useState } from 'react';
import AppLInk from '../../Link/Link';
import LocationItem from '../LocationsItem/LocationsItem';
import { ReactComponent as TimezoneIcon } from '../../../assets/timezone.svg';
import { ReactComponent as UserCountIcon } from '../../../assets/users.svg';
import { ReactComponent as ViewsIcon } from '../../../assets/views.svg';
import { ReactComponent as EditIcon } from '../../../assets/edit.svg';

import { transformTime } from '../../../utils/time';

import './LocationsCard.scss';

interface LocationsCardProps {
  id: string;
  name: string;
  createdAt: string;
  userCount: number;
  viewsCount: number;
}
const LocationsCard: FC<LocationsCardProps> = ({
  id,
  name,
  createdAt,
  userCount,
  viewsCount,
}) => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <AppLInk to={`/locations/${id}`}>
      <div
        className="location-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        {hovered && (
          <div className="location-card_item_icon location-card_item__hover-icon">
            <EditIcon />
          </div>
        )}
        <span className="primary-label font-medium">{name}</span>
        <LocationItem Icon={UserCountIcon} label={`${userCount} Users`} />
        <LocationItem
          Icon={TimezoneIcon}
          label={transformTime(new Date(createdAt))}
        />
        <LocationItem Icon={ViewsIcon} label={`${viewsCount} Views`} />
      </div>
    </AppLInk>
  );
};

export default LocationsCard;
