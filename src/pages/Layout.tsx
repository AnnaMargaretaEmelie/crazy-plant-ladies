import { NavLink, Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <header>
        <h1>Crazy Plant Ladies Society</h1>
        <nav>
          <NavLink to={"/plants"}>Plantor</NavLink>| {""}
          <NavLink to={"/addplant"}>Lägg till</NavLink> | {""}
          <NavLink to={"/about"}>Om sidan</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
