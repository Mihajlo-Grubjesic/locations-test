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

  const data: UseLocationsTypes = { locations, loading, error };
  return data;
};
