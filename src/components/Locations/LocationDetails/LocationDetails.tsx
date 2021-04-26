import React, { FC } from 'react';
import LocationItem from '../LocationsItem/LocationsItem';
import { ReactComponent as TimezoneIcon } from '../../../assets/timezone.svg';
import { ReactComponent as UserCountIcon } from '../../../assets/users.svg';
import { ReactComponent as ViewsIcon } from '../../../assets/views.svg';
import { transformTime } from '../../../utils/time';

interface LocationDetailsProps {
  userCount: number;
  createdAt: string;
  viewsCount: number;
}

const LocationDetails: FC<LocationDetailsProps> = ({
  userCount,
  createdAt,
  viewsCount,
}) => {
  return (
    <div>
      <LocationItem Icon={UserCountIcon} label={`${userCount} Users`} />
      <LocationItem
        Icon={TimezoneIcon}
        label={transformTime(new Date(createdAt))}
      />
      <LocationItem Icon={ViewsIcon} label={`${viewsCount} Views`} />
    </div>
  );
};

export default LocationDetails;
