import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: () => ({
        url: "/car/get_all_car",
        method: "GET",
      }),
      providesTags: [tagTypes.car],
    }),
    getSingleCar: builder.query({
      query: (data) => ({
        url: `/car/get_car`,
        method: "GET",
        body: data,
      }),
      providesTags: [tagTypes.car],
    }),
  }),
});

export const { useGetAllCarsQuery, useGetSingleCarQuery } = carApi;
