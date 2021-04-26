import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from '../../Modal/Modal';
import Button from '../../Button/Button';
import { ReactComponent as CloseIcon } from '../../../assets/close.svg';
import LocationDetails from '../LocationDetails/LocationDetails';
import { LocationsEntity } from '../../../types/locations';
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
          <CloseIcon
            className="locations-modal_close_btn"
            onClick={() => history.push('/locations')}
          />
        </div>
        <div className="location-modal-content">
          <LocationDetails
            userCount={location.userCount}
            createdAt={location.createdAt}
            viewsCount={location.viewsCount}
          />
          <div className="location-modal-content__description">
            <span className="font-tiny text-semibold">Description</span>
            <span className="font-tiny"> {location.description}</span>
          </div>
        </div>
        <div className="location-modal-footer">
          <Button
            buttonType="primary"
            label="Done"
            onClick={() => history.push('/locations')}
          />
        </div>
      </div>
    </Modal>
  );
};

export default LocationsModal;
