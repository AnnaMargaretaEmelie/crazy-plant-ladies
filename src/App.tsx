import { useState } from "react";
import { PlantList } from "./components/PlantList";
import "./App.css";
import type { Plant } from "./models/Plant";

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
  return (
    <>
      <main>
        <h1>Crazy Plant Ladies Society</h1>
        <PlantList plants={plants} />
      </main>
    </>
  );
}

export default App;
