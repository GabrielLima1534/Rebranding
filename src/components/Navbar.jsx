import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">SUPORTE DE DOMINGO</div>

      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portifolio</Link>
      </div>

      <div className="actions">
        <span>PT</span>
        <Link to="/contato">
          <button>Contatos</button>
        </Link>
      </div>
    </nav>
  );
}