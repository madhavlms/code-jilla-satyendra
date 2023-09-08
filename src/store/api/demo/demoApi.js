import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { KEEP_UNUSED_DATA } from "../../../helper/constant";

export const demoApi = createApi({
  reducerPath: "dempApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.VITE_API_BASE_URL }),
  keepUnusedDataFor: KEEP_UNUSED_DATA,
  endpoints: (build) => ({
    getDemo: build.query({
      query: () => "demo1",      
    }),
  }),
});

export const { useGetDemoQuery } = demoApi