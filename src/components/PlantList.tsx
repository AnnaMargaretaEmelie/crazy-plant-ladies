import type { Plant } from "../models/Plant";
import { PlantItem } from "./PlantItem";

type PlantProps = {
  plants: Plant[];
  toggleSown: (id: number) => void;
};

export const PlantList = ({ plants, toggleSown }: PlantProps) => {
  return (
    <>
      <ul>
        {plants.map((plant) => (
          <PlantItem
            key={plant.id}
            plant={plant}
            toggleSown={toggleSown}
          ></PlantItem>
        ))}
      </ul>
    </>
  );
};
