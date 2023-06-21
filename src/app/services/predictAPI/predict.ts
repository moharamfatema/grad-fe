import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const predictApi = createApi({
    reducerPath: 'predict',
    baseQuery: fetchBaseQuery({
        // baseUrl: env variable REACT_APP_API_URL
        baseUrl: `${process.env.REACT_APP_API_URL}`,
        // baseUrl       : 'http://localhost:8080/',
        timeout: 3600000,
        prepareHeaders: headers => {
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
                return response.prediction;
            },
        }),
    }),
});

export const { usePredictMutation } = predictApi;
export default predictApi;
