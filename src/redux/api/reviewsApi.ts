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
    submitReview: builder.mutation({
      query: (data) => ({
        url: `/review/add_review`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.reviews],
    })
  }),
});

export const {
  useGetAllReviewesQuery,
  useGetSingleCarReviewesQuery,
  useGetSingleCarAvarageReviewQuery,
  useSubmitReviewMutation
} = reviewsAPi;
