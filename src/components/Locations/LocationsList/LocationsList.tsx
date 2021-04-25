import { Redirect, useParams } from 'react-router-dom';
import { useLocations } from '../../../hooks/useLocations';
import LocationsCard from '../LocationsCard/LocationsCard';
import LocationsModal from '../LocationsModal/LocationsModal';
import { UseLocationsTypes, LocationsEntity } from '../../../types/locations';
import { ParamTypes } from '../../../types/router';

import './LocationsList.scss';

const LocationsList = () => {
  const {
    locations,
    loading: fetchingLocations,
    error,
  }: UseLocationsTypes = useLocations();

  const { locationId } = useParams<ParamTypes>();
  const activeLocation = locations?.find(
    (location: LocationsEntity) => location.id === locationId,
  );

  if (fetchingLocations)
    return <div className="locations-list_banner">Loading...</div>;
  if (error)
    return <div className="locations-list_banner">Error ocurred...</div>;
  return (
    <div className="locations-list">
      {locations?.map((location: LocationsEntity) => (
        <LocationsCard
          key={location.id}
          id={location.id}
          name={location.name}
          createdAt={location.createdAt}
          userCount={location.userCount}
          viewsCount={location.viewsCount}
        />
      ))}
      {activeLocation ? (
        <LocationsModal location={activeLocation} />
      ) : (
        <Redirect to="/locations" />
      )}
    </div>
  );
};

export default LocationsList;
