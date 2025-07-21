import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const feedbackApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addFeedback: builder.mutation({
      query: (data) => ({
        url: `/public/create-feedback`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.feedbacks],
    }),
    getAllFeedbacks: builder.query({
      query: () => ({
        url: `/public/find-all-feedback`,
        method: "GET",
      }),
      providesTags: [tagTypes.feedbacks],
    }),
  }),
});

export const { useAddFeedbackMutation, useGetAllFeedbacksQuery } = feedbackApi;
