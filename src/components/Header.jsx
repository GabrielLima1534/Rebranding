import { Link } from "react-router-dom"
import { useState } from "react"

function Header() {

  const [hoverHome, setHoverHome] = useState(false)
  const [hoverServicos, setHoverServicos] = useState(false)
  const [hoverPortfolio, setHoverPortfolio] = useState(false)
  const [hoverSobre, setHoverSobre] = useState(false)
  const [hoverContato, setHoverContato] = useState(false)
  return (
    <header style={{
      background:
        "linear-gradient(90deg, #120909 0%, #050816 100%)",
      color: "#FFFFFF",
      padding: "22px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid rgba(255,60,60,0.2)",
      position: "sticky",
      top: 0,
      zIndex: 999,
      backdropFilter: "blur(12px)",
      boxShadow: "0 0 30px rgba(255,0,0,0.08)"
    }}>

      {/* LOGO */}
      <div style={{
        fontWeight: "900",
        fontSize: "28px",
        color: "#FF4D4D",
        letterSpacing: "1px",
        textTransform: "uppercase",
        textShadow: "0 0 14px rgba(255,70,70,0.35)"
      }}>
        Suporte de Domingo
      </div>

      {/* MENU */}
      <nav style={{
        display: "flex",
        gap: "32px",
        alignItems: "center"
      }}>

        <Link
  to="/"

  onMouseEnter={() => setHoverHome(true)}
  onMouseLeave={() => setHoverHome(false)}

  style={{
    color: hoverHome ? "#FF4D4D" : "#00F0FF",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "1px",

    transition: "all 0.3s ease",

    textShadow: hoverHome
      ? "0 0 12px rgba(255,70,70,0.35)"
      : "0 0 8px rgba(0,240,255,0.3)"
  }}
>
  Home
</Link>

        <Link
  to="/servicos"

  onMouseEnter={() => setHoverServicos(true)}
  onMouseLeave={() => setHoverServicos(false)}

  style={{
    color: hoverServicos ? "#FF4D4D" : "#00F0FF",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "1px",

    transition: "all 0.3s ease",

    textShadow: hoverServicos
      ? "0 0 12px rgba(255,70,70,0.35)"
      : "0 0 8px rgba(0,240,255,0.3)"
  }}
>
  Serviços
</Link>

        <Link
  to="/portfolio"

  onMouseEnter={() => setHoverPortfolio(true)}
  onMouseLeave={() => setHoverPortfolio(false)}

  style={{
    color: hoverPortfolio ? "#FF4D4D" : "#00F0FF",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "1px",

    transition: "all 0.3s ease",

    textShadow: hoverPortfolio
      ? "0 0 12px rgba(255,70,70,0.35)"
      : "0 0 8px rgba(0,240,255,0.3)"
  }}
>
  Portfólio
</Link>

        <Link
  to="/sobre"

  onMouseEnter={() => setHoverSobre(true)}
  onMouseLeave={() => setHoverSobre(false)}

  style={{
    color: hoverSobre ? "#FF4D4D" : "#00F0FF",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "1px",

    transition: "all 0.3s ease",

    textShadow: hoverSobre
      ? "0 0 12px rgba(255,70,70,0.35)"
      : "0 0 8px rgba(0,240,255,0.3)"
  }}
>
  Sobre
</Link>

        {/* BOTÃO */}
        <button
  onClick={() =>
    window.open(
      "https://wa.me/5511987654321?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20do%20Suporte%20de%20Domingo!",
      "_blank"
    )
  }

  onMouseEnter={() => setHoverContato(true)}
  onMouseLeave={() => setHoverContato(false)}

  style={{
    background: hoverContato
      ? "linear-gradient(90deg, #00F0FF, #0066FF)"
      : "linear-gradient(90deg, #FF3C3C, #B31212)",

    color: "#FFFFFF",

    border: hoverContato
      ? "1px solid rgba(0,240,255,0.35)"
      : "1px solid rgba(255,255,255,0.08)",

    padding: "14px 26px",
    borderRadius: "14px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    textTransform: "uppercase",
    letterSpacing: "1px",

    transition: "all 0.35s ease",

    boxShadow: hoverContato
      ? "0 0 24px rgba(0,240,255,0.25)"
      : "0 0 20px rgba(255,60,60,0.25)"
  }}
>
  Contato
</button>

      </nav>

    </header>
  )
}

export default Header