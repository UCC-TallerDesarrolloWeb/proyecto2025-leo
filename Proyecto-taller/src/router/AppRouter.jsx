import { Routes, Route, Outlet } from "react-router-dom";
import Home from "@pages/Home";
import Catalogo from "@pages/Catalogo";
import Contacto from "@pages/Contacto";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
};

export default AppRouter;
