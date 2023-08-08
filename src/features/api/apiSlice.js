import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
;

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000',
    }),
    tagTypes: ["projects"],
    endpoints: (builder) => ({
        
        getProjects: builder.query({
            query: (page) => ({
                url: `/projects/${page}`,
            }),
            providesTags: ["projects"]

        }),
        getProject: builder.query({
            query: (ProjectId) => `/projects/sing/${ProjectId}`,
            invalidatesTags: ["projects"]
        })

    }),

});

export const {
    useGetProjectQuery,
    useGetProjectsQuery
} = apiSlice;