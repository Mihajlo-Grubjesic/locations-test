import LocationsHeader from '../../components/LocationsHeader/LocationsHeader';
import LocationsCard from '../../components/LocationsCard/LocationsCard';

const Locations = () => {
  return (
    <div>
      <LocationsHeader />
      <LocationsCard
        name="Test name"
        createdAt="2:32pm (GMT+01:00)"
        userCount={22}
        viewsCount={2}
      />
    </div>
  );
};

export default Locations;
