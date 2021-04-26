import LocationDetails from './LocationDetails';

export default {
  title: 'Locations/Details',
};

export const LocationDetailsStory = () => {
  return (
    <div>
      <LocationDetails
        createdAt="2021-03-05T09:10:35.462Z"
        userCount={22}
        viewsCount={2}
      />
    </div>
  );
};

LocationDetailsStory.story = {
  name: 'LocationDetails',
};
