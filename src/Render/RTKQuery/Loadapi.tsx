import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getApiData: any = createApi({
  reducerPath: "apidata",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (build) => ({
    getByName: build.query({
      query: () => `products`,
    }),
  }),
});

export const { useGetByNameQuery } = getApiData;
