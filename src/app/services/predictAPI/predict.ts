import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPredictRequest } from '../../types/predict';

const predictApi = createApi({
    reducerPath: 'predict',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.API_URL}/` }),
    endpoints: builder => ({
        predict: builder.query<any, IPredictRequest>({
            query: body => ({
                url: '/predict',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { usePredictQuery } = predictApi;
export default predictApi;
