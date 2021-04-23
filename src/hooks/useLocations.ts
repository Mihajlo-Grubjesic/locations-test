import { useState, useEffect } from 'react';
import { fetchLocations } from '../api/locations';
import { LocationsEntity, UseLocationsTypes } from '../types/locations';

export const useLocations = () => {
  const [locations, setLocations] = useState<LocationsEntity[] | undefined>(
    undefined,
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const getLocations = async () => {
      try {
        const locationsResponse = await fetchLocations();
        setLoading(false);
        setLocations(
          locationsResponse.map((location: LocationsEntity) => ({
            ...location,
            viewsCount: 0,
          })),
        );
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    getLocations();
  }, []);

  const onLocationClick = (locationId: string) => {
    const increaseViews: LocationsEntity[] | undefined = locations?.map(
      (location: LocationsEntity) => {
        if (location.id === locationId) {
          return {
            ...location,
            viewsCount: location.viewsCount + 1,
          };
        }
        return location;
      },
    );
    setLocations(increaseViews);
  };

  const data: UseLocationsTypes = {
    locations,
    loading,
    error,
    onLocationClick,
  };
  return data;
};
