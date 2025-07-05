import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: (params) => ({
        url: "/blog/get_all_blog",
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.blog],
    }),
    getSingleBlog: builder.query({
      query: (id) => ({
        url: `/blog/get-blog-details/${id}`,
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
    getMyBlogs: builder.query({
      query: (params) => ({
        url: "/blog/my-blogs",
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.blog],
    }),
    updateBlog: builder.mutation({
      query: ({id,data}) => ({
        url: `/blog/update_blog/${id}`, 
        method: "PATCH",
        body: data
      }),
      invalidatesTags: [tagTypes.blog],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blog/delete_blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.blog],
    }),
    deleteBlogImage: builder.mutation({
      query: ({id,data}) => ({
        url: `/blog/blogImage/${id}`,
        method: "DELETE",
        body: data
      }),
      invalidatesTags: [tagTypes.blog],
    })
  }),
});

export const {
  useGetAllBlogsQuery,
  useAddNewBlogMutation,
  useGetSingleBlogQuery,
  useGetMyBlogsQuery,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogImageMutation
} = blogApi;
