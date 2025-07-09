import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const statsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllStats: builder.query({
            query: () => ({
                url: "/dashboards/db-status",
                method: "GET",
            }),
            providesTags: [tagTypes.car],
        })
    }),
});

export const { useGetAllStatsQuery } = statsApi;