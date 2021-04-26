import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { fetchLocations } from '../api/locations';
import { LocationsEntity } from '../types/locations';

interface LocationsContextProps {
  locations: LocationsEntity[] | undefined;
  onLocationClick: Function;
  loading: boolean;
  error: boolean;
}

const LocationsContext = createContext<LocationsContextProps | undefined>(
  undefined,
);

export const LocationsProvider: FC<ReactNode> = ({ children }) => {
  const [locations, setLocations] = useState<LocationsEntity[] | undefined>(
    undefined,
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

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

  return (
    <LocationsContext.Provider
      value={{
        locations,
        onLocationClick,
        loading,
        error,
      }}>
      {children}
    </LocationsContext.Provider>
  );
};

export const useLocationsContext = () => {
  const context = useContext(LocationsContext);
  if (!context) {
    throw new Error(
      'useLocationsContext must be used within VariablesProvider',
    );
  }
  return context;
};
