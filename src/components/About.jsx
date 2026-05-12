import { useState } from "react"

function About() {

  const [hoverInstagram, setHoverInstagram] = useState(false)
  const [hoverDiscord, setHoverDiscord] = useState(false)
  return (
    <section style={{
      background:
        "linear-gradient(180deg, #070707 0%, #050816 100%)",
      color: "#FFFFFF",
      padding: "72px 32px",
      position: "relative",
      overflow: "hidden"
    }}>

      {/* brilho vermelho */}
      <div style={{
        position: "absolute",
        top: "-150px",
        right: "-150px",
        width: "400px",
        height: "400px",
        background: "rgba(255,40,40,0.08)",
        filter: "blur(120px)"
      }} />

      {/* linha */}
      <div style={{
        height: "1px",
        background:
          "linear-gradient(90deg, rgba(255,60,60,0.45), rgba(0,240,255,0.25))",
        marginBottom: "48px"
      }} />

      {/* título */}
      <h2 style={{
        fontSize: "56px",
        marginBottom: "24px",
        color: "#FF4D4D",
        textTransform: "uppercase",
        letterSpacing: "2px",
        position: "relative",
        zIndex: 2,
        textShadow: "0 0 14px rgba(255,70,70,0.3)"
      }}>
        Sobre nós
      </h2>

      {/* texto principal */}
      <p style={{
        fontSize: "32px",
        color: "#D1D5DB",
        maxWidth: "980px",
        lineHeight: "1.7",
        position: "relative",
        zIndex: 2
      }}>
        A Suporte de Domingo entrega experiências conceituais
        com design autoral, criando identidades únicas que
        rompem com o genérico. Estruturamos soluções digitais
        modernas com foco em performance, escalabilidade e
        impacto visual futurista.
      </p>

      {/* texto lateral */}
      <p style={{
        fontSize: "30px",
        marginTop: "48px",
        maxWidth: "720px",
        marginLeft: "auto",
        textAlign: "right",
        lineHeight: "1.7",
        color: "#00F0FF",
        position: "relative",
        zIndex: 2,
        textShadow: "0 0 10px rgba(0,240,255,0.2)"
      }}>
        Nossos centros de inovação em código,
        automações e design →
        inspire-se no Instagram
        e colabore no Discord ⟡
      </p>

      {/* botões */}
      <div style={{
        marginTop: "40px",
        display: "flex",
        justifyContent: "flex-end",
        gap: "24px",
        flexWrap: "wrap",
        position: "relative",
        zIndex: 2
      }}>

        {/* instagram */}
       <button
  onClick={() => window.open("https://instagram.com", "_blank")}

  onMouseEnter={() => setHoverInstagram(true)}
  onMouseLeave={() => setHoverInstagram(false)}

  style={{
    background: hoverInstagram
      ? "linear-gradient(90deg, #FF3C3C, #8B0000)"
      : "linear-gradient(90deg, #101826, #0B1120)",

    color: hoverInstagram ? "#FFFFFF" : "#00F0FF",

    border: hoverInstagram
      ? "1px solid rgba(255,60,60,0.4)"
      : "1px solid rgba(0,240,255,0.25)",

    padding: "18px 38px",
    borderRadius: "18px",
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",

    transition: "all 0.35s ease",

    boxShadow: hoverInstagram
      ? "0 0 25px rgba(255,60,60,0.25)"
      : "0 0 20px rgba(0,240,255,0.12)"
  }}
>
  Instagram →
</button>

        {/* discord */}
      <button
  onClick={() => window.open("https://discord.gg/seuserver", "_blank")}

  onMouseEnter={() => setHoverDiscord(true)}
  onMouseLeave={() => setHoverDiscord(false)}

  style={{
    background: hoverDiscord
      ? "linear-gradient(90deg, #00F0FF, #0066FF)"
      : "linear-gradient(90deg, #2A0B0B, #130707)",

    color: hoverDiscord ? "#FFFFFF" : "#FF4D4D",

    border: hoverDiscord
      ? "1px solid rgba(0,240,255,0.4)"
      : "1px solid rgba(255,60,60,0.2)",

    padding: "18px 38px",
    borderRadius: "18px",
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",

    transition: "all 0.35s ease",

    boxShadow: hoverDiscord
      ? "0 0 25px rgba(0,240,255,0.25)"
      : "0 0 20px rgba(255,60,60,0.12)"
  }}
>
  Discord ⟡
</button>

      </div>

    </section>
  )
}

export default About