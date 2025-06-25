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
        })
    }),
});
export const { useGetCarBrandsQuery, useGetFuelTypeQuery } = carFilterApi;