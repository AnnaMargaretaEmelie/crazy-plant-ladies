import type { Plant } from "../models/Plant";
import { useState } from "react";

type FormProps = {
  addPlant: (newPlant: Plant) => void;
};

export function PlantForm({ addPlant }: FormProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !category.trim()) return;

    const newPlant: Plant = {
      id: Date.now(),
      name,
      category,
      isSown: false,
      status,
    };

    addPlant(newPlant);

    setName("");
    setCategory("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Namn:
            <input
              type="text"
              value={name}
              id="name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>
        </div>
        <div>
          <label htmlFor="category">
            Kategori:{" "}
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Lägg till</button>
      </form>
    </>
  );
}
