import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const blogApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllBlogs: builder.query({
            query: () => ({
                url: "/blog/get_all_blogs",
                method: "GET",
            }),
            providesTags: [tagTypes.blog],
        }),
        addNewBlog: builder.mutation({
            query: (data) => ({
                url: "/blog/create_blog",
                method: "POST",
                body: data,
            }),
            invalidatesTags: [tagTypes.blog],
        }),

    }),
});

export const { useGetAllBlogsQuery, useAddNewBlogMutation } = blogApi;