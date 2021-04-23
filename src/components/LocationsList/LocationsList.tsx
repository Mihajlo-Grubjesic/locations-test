import { useLocations } from '../../hooks/useLocations';
import LocationsCard from '../LocationsCard/LocationsCard';
import { UseLocationsTypes, LocationsEntity } from '../../types/locations';

import './LocationsList.scss';

const LocationsList = () => {
  const {
    locations,
    loading: fetchingLocations,
    error,
    onLocationClick,
  }: UseLocationsTypes = useLocations();
  if (fetchingLocations)
    return <div className="locations-list_banner">Loading...</div>;
  if (error)
    return <div className="locations-list_banner">Error ocurred...</div>;
  return (
    <div className="locations-list">
      {locations?.map((location: LocationsEntity) => (
        <LocationsCard
          key={location.id}
          name={location.name}
          createdAt={location.createdAt}
          userCount={location.userCount}
          viewsCount={location.viewsCount}
          onCardClick={() => onLocationClick(location.id)}
        />
      ))}
    </div>
  );
};

export default LocationsList;
