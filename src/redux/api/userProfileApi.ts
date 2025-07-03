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
  }),
});

export const { useGetUserProfileQuery } = userProfileApi;
