import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const predictApi = createApi({
    reducerPath: 'predict',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.API_URL}/` }),
    endpoints: builder => ({
        predict: builder.query<FormData, any>({
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
