"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "./store";

interface IComponontProps {
  children: ReactNode;
}

const ReduxProvider = ({ children }: IComponontProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
