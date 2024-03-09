import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const RtkSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://65ec46c60ddee626c9afe091.mockapi.io/api/v1' }),
    reducerPath: 'userapi',
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => '/users',
            providesTags: ['employees'],
        }),

        createUser: builder.mutation({
            query: (body) => ({
                url: '/users',
                method: 'POST',
                body
            }),
            invalidatesTags: ['employees']
        }),

        removeUser: builder.mutation({
            query: (id) => ({
                method: 'DELETE',
                url: `/users/${ id }`
            }),
            invalidatesTags: ['employees']
        })
    }),
})

export const {useGetAllUsersQuery,useCreateUserMutation,useRemoveUserMutation} = RtkSlice