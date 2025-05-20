import { useEffect, useState } from "react";

import "./App.css";
import type { Plant } from "./models/Plant";

import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { Plants } from "./pages/Plants";
import { AddPlant } from "./pages/AddPlant";
import { About } from "./pages/About";
import { Layout } from "./pages/Layout";

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

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="plants" />} />
            <Route
              path="plants"
              element={
                <Plants
                  plants={plants}
                  toggleSown={toggleSown}
                  filter={filter}
                  setFilter={setFilter}
                />
              }
            />
            <Route
              path="addplant"
              element={<AddPlant addPlant={addPlant}></AddPlant>}
            />
            <Route path="about" element={<About />} />
            <Route path="*" element={<p>Sidan finns inte</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
