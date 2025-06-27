import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const carFilterApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCarBrands: builder.query({
            query: () => ({
                url: "/car/car_brands",
                method: "GET",
            }),
            providesTags: [tagTypes.car],
        }),
        getFuelType: builder.query({
            query: () => ({
                url: "/car/fuel_types",
                method: "GET",
            }),
            providesTags: [tagTypes.car],
        }),
        getCarLocations: builder.query({
            query: () => ({
                url: "/car/locations",
                method: "GET",
            }),
            providesTags: [tagTypes.car],
        }),
        getCarType: builder.query({
            query: () => ({
                url: "/car/car_types",
                method: "GET",
            })
        })
    }),
});
export const { useGetCarBrandsQuery, useGetFuelTypeQuery, useGetCarLocationsQuery, useGetCarTypeQuery } = carFilterApi;