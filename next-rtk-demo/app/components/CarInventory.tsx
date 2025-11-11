"use client";
import { useState } from "react";
import { order, restock } from "../redux/features/car/carSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const CarInventory = () => {
  const numOfCars = useAppSelector((state) => state.cars.numOfCars);
  const dispatch = useAppDispatch();

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
