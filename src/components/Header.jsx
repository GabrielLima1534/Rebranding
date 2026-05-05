import { Link } from "react-router-dom"

function Header() {
  return (

    <header style={{
      backgroundColor: "#111827",
      color: "#FFFFFF",
      padding: "20px 32px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      border: "1px solid rgba(255,255,255,0.1)"
    }}>
      
      <div style={{ 
        fontWeight: "bold",
        fontSize: "24px"
      }}>
        Suporte de Domingo
      </div>

      <nav style={{ display: "flex", gap: "24px", alignItems: "center" }}>
        <Link to="/" style={{ color: "#FFF", textDecoration: "none" }}>Home</Link>
        <Link to="/servicos" style={{ color: "#FFF", textDecoration: "none" }}>Serviços</Link>
        <Link to="/portfolio" style={{ color: "#FFF", textDecoration: "none" }}>Portfólio</Link>
        <Link to="/sobre" style={{ color: "#FFF", textDecoration: "none" }}>Sobre</Link>

        <button style={{
          backgroundColor: "#FFFFFF",
          color: "#111827",
          border: "none",
          padding: "10px 20px",
          borderRadius: "16px",
          cursor: "pointer"
        }}>
          Contato
        </button>
      </nav>

    </header>
  )
}

export default Header