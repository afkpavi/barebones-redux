"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/features/user/userSlice";

type Props = {};

const UsersList = (props: Props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  return (
    <div>
      <h1>UsersList</h1>
      <button onClick={() => dispatch(fetchUsers())}>Load Users</button>
      {users.map((user) => (
        <h3 key={user}>{user}, </h3>
      ))}
    </div>
  );
};

export default UsersList;
