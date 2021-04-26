export interface LocationsEntity {
  id: string;
  createdAt: string;
  name: string;
  userCount: number;
  viewsCount: number;
  description: string;
}

export interface UseLocationsTypes {
  locations: LocationsEntity[] | undefined;
  onLocationClick: Function;
  loading: boolean;
  error: boolean;
}

export interface UseLocationsContextTypes {
  locations: LocationsEntity[] | undefined;
  onLocationClick: Function;
  loading: boolean;
  error: boolean;
}
