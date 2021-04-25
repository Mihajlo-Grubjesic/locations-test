import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { fetchLocations } from '../api/locations';
import { LocationsEntity, UseLocationsTypes } from '../types/locations';
import { ParamTypes } from '../types/router';

export const useLocations = () => {
  const [locations, setLocations] = useState<LocationsEntity[] | undefined>(
    undefined,
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const { locationId } = useParams<ParamTypes>();

  const onLocationClick = useCallback(
    (locationId: string) => {
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
    },
    [locations],
  );

  useEffect(() => {
    if (locationId) {
      onLocationClick(locationId);
    }
  }, [locationId]);

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

  const data: UseLocationsTypes = {
    locations,
    loading,
    error,
  };
  return data;
};
