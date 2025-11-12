"use client";

import { useGetPostsQuery } from "../redux/features/post/postSlice";

const PostList = () => {
  const { data, isLoading, isError } = useGetPostsQuery();
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <h1>Something went wrong</h1>;
  }
  if (data) {
    return (
      <div>
        <h1>Posts</h1>
        {data.map((post) => (
          <p key={post.id}>{post.title}</p>
        ))}
      </div>
    );
  }
};

export default PostList;
