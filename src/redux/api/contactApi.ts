import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const contactApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        contact: build.mutation({
            query: (data) => ({
                url: "/getInTouch/get_in_touch",
                method: "POST",
                body: data,
            }),
            invalidatesTags: [tagTypes.contact],
        }),
    }),
});

export const { useContactMutation } = contactApi;