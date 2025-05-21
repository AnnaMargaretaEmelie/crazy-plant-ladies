import { PlantForm } from "../components/PlantForm";
import { usePlants } from "../context/usePlants";

// type Props = {
//   addPlant: (plant: Plant) => void;
// };

export const AddPlant = () => {
  const { addPlant } = usePlants();
  return (
    <>
      <section>
        <h2>Lägg till ny växt</h2>
        <PlantForm addPlant={addPlant}></PlantForm>
      </section>
    </>
  );
};
