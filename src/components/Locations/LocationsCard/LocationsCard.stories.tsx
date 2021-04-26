import LocationsCard from './LocationsCard';

export default {
  title: 'Locations/Card',
};

export const LocationsCardStory = () => {
  return (
    <div>
      <LocationsCard
        id="1"
        name="Test name"
        createdAt="2021-03-05T09:10:35.462Z"
        userCount={22}
        viewsCount={2}
      />
    </div>
  );
};

LocationsCardStory.story = {
  name: 'LocationsCard',
};
