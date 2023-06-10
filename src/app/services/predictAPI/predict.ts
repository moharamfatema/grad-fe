import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPredictRequest } from '../../types/predict';

const predictApi = createApi({
    reducerPath: 'predict',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/',
        prepareHeaders: (headers, { getState }) => {
            // no-cors
            headers.set('Access-Control-Allow-Origin', '*');
            headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
            headers.set('Access-Control-Allow-Headers', 'Content-Type');
            //no cors

            return headers;
        },
    }),
    endpoints: builder => ({
        predict: builder.mutation<any, FormData>({
            query: body => ({
                url: 'predict',
                method: 'POST',
                body,
                formData: true,
            }),
            transformResponse: (response: any) => {
                return response;
            },
        }),
    }),
});

export const { usePredictMutation } = predictApi;
export default predictApi;
