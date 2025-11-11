"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { order, restock } from "../redux/features/bike/bikeSlice";

type Props = {};

const BikeInventory = (props: Props) => {
  const numOfBikes = useSelector((state) => state.bike.numOfBikes);
  const dispatch = useDispatch();

  const [value, setValue] = useState(1);

  return (
    <div>
      <h1>Number of Bikes - {numOfBikes}</h1>
      <button onClick={() => dispatch(order())}>Buy</button>
      <br />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restock(value))}>Restock</button>
      <br />
    </div>
  );
};

export default BikeInventory;
