import { subscribe } from "diagnostics_channel";
import { baseApi } from "./baseApi";

const newsLetterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    subscribe: builder.mutation({
      query: (data) => ({
        url: `/public/create-newsletter`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSubscribeMutation } = newsLetterApi;
