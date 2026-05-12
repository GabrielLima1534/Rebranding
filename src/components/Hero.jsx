import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Hero() {

  const navigate = useNavigate()

  const [hoverButton, setHoverButton] = useState(false)

  return (
    <section style={{
      background:
        "radial-gradient(circle at top, rgba(255,40,40,0.18), #050816 45%)",
      color: "#FFFFFF",
      padding: "120px 32px",
      textAlign: "center",
      borderBottom: "1px solid rgba(255,60,60,0.15)",
      position: "relative",
      overflow: "hidden"
    }}>

      {/* brilho cyberpunk */}
      <div style={{
        position: "absolute",
        top: "-120px",
        left: "-120px",
        width: "400px",
        height: "400px",
        background: "rgba(255,40,40,0.12)",
        filter: "blur(120px)"
      }} />

      <div style={{
        position: "absolute",
        bottom: "-120px",
        right: "-120px",
        width: "400px",
        height: "400px",
        background: "rgba(0,240,255,0.08)",
        filter: "blur(120px)"
      }} />

      {/* texto */}
      <h1 style={{
        fontSize: "96px",
        fontWeight: "900",
        margin: "0",
        color: "#FF4D4D",
        lineHeight: "1.05",
        letterSpacing: "-3px",
        textTransform: "uppercase",
        position: "relative",
        zIndex: 2,
        textShadow: `
          0 0 10px rgba(255,70,70,0.4),
          0 0 25px rgba(255,70,70,0.25)
        `
      }}>
        Empresas sólidas
        <br />
        precisam de um
        <br />
        sistema escalável.
      </h1>

      <p style={{
        fontSize: "32px",
        color: "#00F0FF",
        marginTop: "32px",
        maxWidth: "1000px",
        marginInline: "auto",
        lineHeight: "1.6",
        position: "relative",
        zIndex: 2,
        textShadow: "0 0 12px rgba(0,240,255,0.25)"
      }}>
        Descubra tudo o que podemos oferecer para sua
        transformação digital e conecte sua empresa
        ao futuro com experiências modernas,
        interfaces inteligentes e sistemas escaláveis.
      </p>

      {/* botão */}
      <div style={{
        marginTop: "48px",
        position: "relative",
        zIndex: 2
      }}>

        <button
          onClick={() => navigate("/portfolio")}

          onMouseEnter={() => setHoverButton(true)}
          onMouseLeave={() => setHoverButton(false)}

          style={{
            background: hoverButton
              ? "linear-gradient(90deg, #00F0FF, #0066FF)"
              : "linear-gradient(90deg, #FF3C3C, #B31212)",

            color: "#FFFFFF",

            border: hoverButton
              ? "1px solid rgba(0,240,255,0.35)"
              : "1px solid rgba(255,255,255,0.1)",

            padding: "18px 42px",
            borderRadius: "16px",
            cursor: "pointer",
            fontSize: "20px",
            fontWeight: "bold",
            letterSpacing: "1px",
            textTransform: "uppercase",

            transition: "all 0.35s ease",

            transform: hoverButton
              ? "translateY(-4px)"
              : "translateY(0px)",

            boxShadow: hoverButton
              ? "0 0 30px rgba(0,240,255,0.35)"
              : "0 0 25px rgba(255,60,60,0.25)"
          }}
        >
          Explorar projetos →
        </button>

      </div>

    </section>
  )
}

export default Hero