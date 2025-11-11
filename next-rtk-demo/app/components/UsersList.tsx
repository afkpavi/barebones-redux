"use client";
import { useEffect } from "react";
import { fetchUsers } from "../redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const UsersList = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div>
      <h1>UsersList</h1>
      <button onClick={() => dispatch(fetchUsers())}>Load Users</button>
      {users.map((user) => (
        <h3 key={user.id}>{user.name}, </h3>
      ))}
    </div>
  );
};

export default UsersList;
