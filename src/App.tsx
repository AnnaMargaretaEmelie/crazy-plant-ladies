import { useEffect, useState } from "react";
import { PlantList } from "./components/PlantList";
import "./App.css";
import type { Plant } from "./models/Plant";
import { PlantForm } from "./components/PlantForm";

function App() {
  const [plants, setPlants] = useState<Plant[]>(() => {
    const saved = localStorage.getItem("plants");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("plants", JSON.stringify(plants));
  }, [plants]);

  const [filter, setFilter] = useState<"all" | "sown" | "notSown">("all");

  const addPlant = (plant: Plant) => {
    setPlants((prev) => [...prev, plant]);
  };
  const toggleSown = (id: number) => {
    setPlants((prev) =>
      prev.map((plant) =>
        plant.id === id ? { ...plant, isSown: !plant.isSown } : plant
      )
    );
  };

  const filteredPlants = plants.filter((plant) => {
    if (filter === "sown") return plant.isSown;
    if (filter === "notSown") return !plant.isSown;
    return true;
  });

  return (
    <>
      <main>
        <h1>Crazy Plant Ladies Society</h1>
        <PlantForm addPlant={addPlant}></PlantForm>
        <div>
          <button onClick={() => setFilter("all")}>Visa alla</button>
          <button onClick={() => setFilter("sown")}>Bara sådda</button>
          <button onClick={() => setFilter("notSown")}>Bara osådda</button>
        </div>
        <PlantList plants={filteredPlants} toggleSown={toggleSown} />
      </main>
    </>
  );
}

export default App;
