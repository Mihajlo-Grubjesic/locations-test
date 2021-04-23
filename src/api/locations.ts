import axios from 'axios';
import { tymeshiftApi } from '../constants';
import { LocationsEntity } from '../types/locations';

export const fetchLocations = async (): Promise<LocationsEntity[]> => {
  const { data } = await axios.get(`${tymeshiftApi}/locations`);
  return data;
};
