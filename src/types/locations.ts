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
  loading: boolean;
  error: boolean;
}
