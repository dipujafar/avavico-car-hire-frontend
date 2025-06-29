import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: (params) => ({
        url: "/car/get_all_car",
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.car],
    }),
    getSingleCar: builder.query({
      query: (id) => ({
        url: `/car/car-details/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.car],
    }),
    addNewCar: builder.mutation({
      query: (data) => ({
        url: "/car/add_new_car",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.car],
    }),
    getOwnCars: builder.query({
      query: () => ({
        url: "/car/my-cars",
        method: "GET",
      }),
      providesTags: [tagTypes.car],
    })
  }),
});

export const { useGetAllCarsQuery, useGetSingleCarQuery, useAddNewCarMutation, useGetOwnCarsQuery } = carApi;
