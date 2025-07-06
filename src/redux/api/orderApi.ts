import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrders: builder.query({
            query: () => ({
                url: "/order/add_new_order",
                method: "GET",
            }),
            providesTags: [tagTypes.order],
        }),
        addNewOrder: builder.mutation({
            query: (data) => ({
                url: "/order/add_new_order",
                method: "POST",
                body: data,
            }),
            invalidatesTags: [tagTypes.order],
        })
    }),
});

export const { useGetAllOrdersQuery, useAddNewOrderMutation } = orderApi;