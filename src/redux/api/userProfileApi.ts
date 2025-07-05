import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const userProfileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => ({
        url: `/user/profile`,
        method: "GET",
      }),
      providesTags: [tagTypes?.profile],
    }),
    updateUserProfile: builder.mutation({
      query: (data) => ({
        url: `/user/update_user`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [tagTypes?.profile],
    }),
  }),
});

export const { useGetUserProfileQuery, useUpdateUserProfileMutation } = userProfileApi;


