import { FC, ElementType } from 'react';
import './LocationsItem.scss';

interface LocationsItemProps {
  Icon: ElementType;
  label: string;
}
const LocationsItem: FC<LocationsItemProps> = ({ Icon, label }) => {
  return (
    <div className="location-card_item">
      <Icon className="location-card_item_icon" />
      <span className="primary-label font-tiny text-regular">{label}</span>
    </div>
  );
};

export default LocationsItem;
