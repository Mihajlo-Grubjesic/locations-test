import { FC, useState } from 'react';
import AppLInk from '../../Link/Link';
import { ReactComponent as EditIcon } from '../../../assets/edit.svg';
import LocationDetails from '../LocationDetails/LocationDetails';

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
        <LocationDetails
          userCount={userCount}
          createdAt={createdAt}
          viewsCount={viewsCount}
        />
      </div>
    </AppLInk>
  );
};

export default LocationsCard;
