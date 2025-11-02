import { Link } from "react-router-dom";
import logo from "@assets/logo1.png";
import "@styles/header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo Tienda" />
      </div>

      <nav className="menu">
        <Link to="/">Inicio</Link>
        <Link to="/catalogo">Catálogo</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;
