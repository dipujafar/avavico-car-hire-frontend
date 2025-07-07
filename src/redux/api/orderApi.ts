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
        }),
        getMyOrders: builder.query({
            query: (params) => ({
                url: "/order/my_orders",
                method: "GET",
                params
            }),
            providesTags: [tagTypes.order],
        })
    }),
});

export const { useGetAllOrdersQuery, useAddNewOrderMutation, useGetMyOrdersQuery } = orderApi;