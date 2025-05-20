import type { Plant } from "../models/Plant";
import { PlantList } from "../components/PlantList";

type Props = {
  plants: Plant[];
  toggleSown: (id: number) => void;
  filter: "all" | "sown" | "notSown";
  setFilter: (filter: "all" | "sown" | "notSown") => void;
};

export const Plants = ({ plants, toggleSown, filter, setFilter }: Props) => {
  const filteredPlants = plants.filter((plant) => {
    if (filter === "sown") return plant.isSown;
    if (filter === "notSown") return !plant.isSown;
    return true;
  });
  return (
    <>
      <section>
        <h2>Mina plantor</h2>
        <button onClick={() => setFilter("all")}>Visa alla</button>
        <button onClick={() => setFilter("sown")}>Bara sådda</button>
        <button onClick={() => setFilter("notSown")}>Bara osådda</button>
        <PlantList plants={filteredPlants} toggleSown={toggleSown}></PlantList>
      </section>
    </>
  );
};
