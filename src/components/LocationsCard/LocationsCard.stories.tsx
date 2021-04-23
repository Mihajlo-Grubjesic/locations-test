import LocationsCard from './LocationsCard';

export default {
  title: 'Locations/Card',
};

export const LocationsCardStory = () => {
  return (
    <div>
      <LocationsCard
        name="Test name"
        createdAt="2:32pm (GMT+01:00)"
        userCount={22}
        viewsCount={2}
      />
    </div>
  );
};

LocationsCardStory.story = {
  name: 'LocationsCard',
};
