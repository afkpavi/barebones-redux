"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { order, restock } from "../redux/features/car/carSlice";

type Props = {};

const CarInventory = (props: Props) => {
  const numOfCars = useSelector((state) => state.cars.numOfCars);
  const dispatch = useDispatch();

  const [value, setValue] = useState(1);

  return (
    <div>
      <h1>Number of Cars - {numOfCars}</h1>
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

export default CarInventory;
