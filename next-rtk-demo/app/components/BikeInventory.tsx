"use client";
import { useState } from "react";
import { order, restock } from "../redux/features/bike/bikeSlice";
import { useAppSelector } from "../redux/hooks";
import { useDispatch } from "react-redux";

const BikeInventory = () => {
  const numOfBikes = useAppSelector((state) => state.bike.numOfBikes);
  const dispatch = useDispatch();

  const [value, setValue] = useState<number>(1);

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
