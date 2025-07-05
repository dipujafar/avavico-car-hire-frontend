import { baseApi } from "./baseApi";

const reviewesAPi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllReviewes: builder.query({
            query: (id) => ({
                url: `/review/get_all_review`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetAllReviewesQuery } = reviewesAPi;