import type { Plant } from "../models/Plant";

type PlantProps = {
  plants: Plant[];
};

export const PlantList = ({ plants }: PlantProps) => {
  return (
    <>
      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>
            {plant.name} ({plant.category}) -{" "}
            {plant.isSown ? "Sådd" : "Inte sådd"}
          </li>
        ))}
      </ul>
    </>
  );
};
