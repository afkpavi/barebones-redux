import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/posts",
    }),
  }),
});

export const { useGetPostsQuery } = postApi;
export default postApi;
