import LocationsHeader from '../../components/Locations/LocationsHeader/LocationsHeader';
import LocationsList from '../../components/Locations/LocationsList/LocationsList';
import { LocationsProvider } from '../../context/LocationsContext';

const Locations = () => {
  return (
    <div>
      <LocationsProvider>
        <LocationsHeader />
        <LocationsList />
      </LocationsProvider>
    </div>
  );
};

export default Locations;
