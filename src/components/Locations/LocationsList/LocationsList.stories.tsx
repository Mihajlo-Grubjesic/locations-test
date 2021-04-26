import LocationsList from './LocationsList';
import { LocationsProvider } from '../../../context/LocationsContext';

export default {
  title: 'Locations/List',
};

export const LocationListStory = () => {
  return (
    <LocationsProvider>
      <div>
        <LocationsList />
      </div>
    </LocationsProvider>
  );
};

LocationListStory.story = {
  name: 'LocationsList',
};
