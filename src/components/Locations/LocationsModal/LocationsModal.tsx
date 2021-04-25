import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from '../../Modal/Modal';
import LocationItem from '../LocationsItem/LocationsItem';
import PrimaryButton from '../../Button/PrimaryButton/PrimaryButton';
import { ReactComponent as TimezoneIcon } from '../../../assets/timezone.svg';
import { ReactComponent as UserCountIcon } from '../../../assets/users.svg';
import { ReactComponent as ViewsIcon } from '../../../assets/views.svg';
import { LocationsEntity } from '../../../types/locations';
import { transformTime } from '../../../utils/time';
import './LocationsModal.scss';

interface LocationsModalProps {
  location: LocationsEntity;
}

const LocationsModal: FC<LocationsModalProps> = ({ location }) => {
  const history = useHistory();
  return (
    <Modal>
      <div className="locations-modal">
        <div className="location-modal-header">
          <span className="primary-label font-small text-semibold">
            {location.name}
          </span>
        </div>
        <div className="location-modal-content">
          <LocationItem
            Icon={UserCountIcon}
            label={`${location.userCount} Users`}
          />
          <LocationItem
            Icon={TimezoneIcon}
            label={transformTime(new Date(location.createdAt))}
          />
          <LocationItem
            Icon={ViewsIcon}
            label={`${location.viewsCount} Views`}
          />
          <div className="location-modal-content__description">
            <span className="font-tiny text-semibold">Description</span>
            <span className="font-tiny"> {location.description}</span>
          </div>
        </div>
        <div className="location-modal-footer">
          <PrimaryButton
            label="Done"
            onClick={() => history.push('/locations')}
          />
        </div>
      </div>
    </Modal>
  );
};

export default LocationsModal;
