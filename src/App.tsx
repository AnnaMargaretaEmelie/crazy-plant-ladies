import "./App.css";

import { BrowserRouter, Routes, NavLink, Route } from "react-router";
import { Plants } from "./pages/Plants";
import { AddPlant } from "./pages/AddPlant";
import { About } from "./pages/About";
import { PlantProvider } from "./context/PlantContext";

function App() {
  // const [plants, setPlants] = useState<Plant[]>(() => {
  //   const saved = localStorage.getItem("plants");
  //   return saved ? JSON.parse(saved) : [];
  // });
  // useEffect(() => {
  //   localStorage.setItem("plants", JSON.stringify(plants));
  // }, [plants]);

  // const [filter, setFilter] = useState<"all" | "sown" | "notSown">("all");

  // const addPlant = (plant: Plant) => {
  //   setPlants((prev) => [...prev, plant]);
  // };
  // const toggleSown = (id: number) => {
  //   setPlants((prev) =>
  //     prev.map((plant) =>
  //       plant.id === id ? { ...plant, isSown: !plant.isSown } : plant
  //     )
  //   );
  // };

  return (
    <>
      <PlantProvider>
        <BrowserRouter>
          <header>
            <h1>Crazy Plant Ladies Society</h1>
            <nav>
              <NavLink to={"/plants"}>Mina plantor</NavLink>| {""}
              <NavLink to={"/addplant"}>Lägg till planta</NavLink>| {""}
              <NavLink to={"/about"}>Om sidan</NavLink>
            </nav>
          </header>
          <Routes>
            <Route path="/plants" element={<Plants />} />
            <Route path="/addplant" element={<AddPlant />} />

            <Route path="/about" element={<About />} />
            <Route path="*" element={<p>Sidan finns inte</p>} />
          </Routes>
        </BrowserRouter>
      </PlantProvider>
    </>
  );
}

export default App;
