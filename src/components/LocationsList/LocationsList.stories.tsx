import LocationsList from './LocationsList';

export default {
  title: 'Locations/List',
};

export const LocationListStory = () => {
  return (
    <div>
      <LocationsList />
    </div>
  );
};

LocationListStory.story = {
  name: 'LocationsList',
};
