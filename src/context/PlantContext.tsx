import { createContext, useEffect, useState } from "react";
import type { Plant } from "../models/Plant";

type FilterType = "all" | "sown" | "notSown";

type PlantContextType = {
  plants: Plant[];
  addPlant: (plant: Plant) => void;
  toggleSown: (id: number) => void;
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
};

export const PlantContext = createContext<PlantContextType | undefined>(
  undefined
);

export const PlantProvider = ({ children }: { children: React.ReactNode }) => {
  const [plants, setPlants] = useState<Plant[]>(() => {
    const saved = localStorage.getItem("plants");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState<FilterType>("all");

  useEffect(() => {
    localStorage.setItem("plants", JSON.stringify(plants));
  }, [plants]);

  const addPlant = (plant: Plant) => {
    setPlants((prev) => [...prev, plant]);
  };

  const toggleSown = (id: number) => {
    setPlants((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isSown: !p.isSown } : p))
    );
  };

  return (
    <>
      <PlantContext.Provider
        value={{ plants, addPlant, toggleSown, filter, setFilter }}
      >
        {children}
      </PlantContext.Provider>
    </>
  );
};
