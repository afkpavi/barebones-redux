import Image from "next/image";
import BikeInventory from "./components/BikeInventory";
import UsersList from "./components/UsersList";
import CarInventory from "./components/CarInventory";

export default function Home() {
  return (
    <main>
      <BikeInventory />
      <CarInventory />
      <UsersList />
    </main>
  );
}
