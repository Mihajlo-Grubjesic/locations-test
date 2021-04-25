import LocationsModal from './LocationsModal';
import { LocationsMock } from '../../../mocks/locationsMock';

export default {
  title: 'Locations/LocationsModal',
};

export const LocationModalStory = () => {
  return (
    <div>
      <LocationsModal location={LocationsMock[0]} />
    </div>
  );
};

LocationModalStory.story = {
  name: 'LocationsModal',
};
