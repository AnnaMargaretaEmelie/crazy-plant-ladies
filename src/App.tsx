import { useState } from "react";
import { PlantList } from "./components/PlantList";
import "./App.css";
import type { Plant } from "./models/Plant";
import { PlantForm } from "./components/PlantForm";

function App() {
  const [plants, setPlants] = useState<Plant[]>([
    {
      id: 1,
      name: "Supersweet",
      category: "Tomat",
      isSown: true,
      status: "Behöver komma ut gradvis",
    },
    { id: 2, name: "Habanero", category: "Chili", isSown: true, status: "Ok" },
  ]);

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
  return (
    <>
      <main>
        <h1>Crazy Plant Ladies Society</h1>
        <PlantForm addPlant={addPlant}></PlantForm>
        <PlantList plants={plants} toggleSown={toggleSown} />
      </main>
    </>
  );
}

export default App;
