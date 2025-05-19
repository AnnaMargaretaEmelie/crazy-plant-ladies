import type { Plant } from "../models/Plant";
import { PlantForm } from "../components/PlantForm";

type Props = {
  addPlant: (plant: Plant) => void;
};

export const AddPlant = ({ addPlant }: Props) => {
  return (
    <>
      <section>
        <h2>Lägg till ny växt</h2>
        <PlantForm addPlant={addPlant}></PlantForm>
      </section>
    </>
  );
};
