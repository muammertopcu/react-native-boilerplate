import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from '../store.ts';
import Config from 'react-native-config';

export const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_URL,
  prepareHeaders: (headers, {getState}) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});
