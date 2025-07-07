import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const reviewsAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllReviewes: builder.query({
      query: (params) => ({
        url: `/review/get_all_review`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.reviews],
    }),
    getSingleCarReviewes: builder.query({
      query: (id) => ({
        url: `/car/single-car-reviews/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.reviews],
    }),
    getSingleCarAvarageReview: builder.query({
      query: (id) => ({
        url: `/car/car-reviews/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.reviews],
    }),
  }),
});

export const {
  useGetAllReviewesQuery,
  useGetSingleCarReviewesQuery,
  useGetSingleCarAvarageReviewQuery,
} = reviewsAPi;
