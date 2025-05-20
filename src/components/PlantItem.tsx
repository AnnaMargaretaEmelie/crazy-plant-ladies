import type { Plant } from "../models/Plant";

type Props = {
  plant: Plant;
  toggleSown: (id: number) => void;
};

export const PlantItem = ({ plant, toggleSown }: Props) => {
  return (
    <>
      <li>
        {" "}
        <strong>{plant.name}</strong>({plant.category}) <br />
        <button onClick={() => toggleSown(plant.id)}>
          {plant.isSown ? "Sådd" : "Inte sådd"}
        </button>
        {""}
      </li>
    </>
  );
};
