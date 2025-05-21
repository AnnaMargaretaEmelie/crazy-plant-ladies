import { useContext } from "react";
import { PlantContext } from "./PlantContext";

export function usePlants() {
    const context = useContext(PlantContext);
    if (!context) {
        throw new Error("usePlants måste användas inom en PlantProvider")
    }

    return context;
}