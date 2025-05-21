import { PlantList } from "../components/PlantList";
import { usePlants } from "../context/usePlants";

// type Props = {
//   filter: "all" | "sown" | "notSown";
//   setFilter: (filter: "all" | "sown" | "notSown") => void;
// };

export const Plants = () => {
  const { plants, toggleSown, filter, setFilter } = usePlants();

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
