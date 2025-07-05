import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const reviewsAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllReviewes: builder.query({
      query: () => ({
        url: `/review/get_all_review`,
        method: "GET",
      }),
      providesTags: [tagTypes.reviews],
    }),
  }),
});

export const { useGetAllReviewesQuery } = reviewsAPi;
