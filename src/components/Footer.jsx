function Footer() {
  return (
    <footer style={{
      background:
        "linear-gradient(180deg, #070707 0%, #050816 100%)",
      color: "#FFFFFF",
      padding: "72px 32px",
      borderTop: "1px solid rgba(255,60,60,0.18)",
      position: "relative",
      overflow: "hidden"
    }}>

      {/* brilho */}
      <div style={{
        position: "absolute",
        bottom: "-180px",
        left: "-120px",
        width: "400px",
        height: "400px",
        background: "rgba(255,40,40,0.08)",
        filter: "blur(120px)"
      }} />

      {/* título */}
      <h2 style={{
        fontSize: "42px",
        marginBottom: "48px",
        color: "#FF4D4D",
        textTransform: "uppercase",
        letterSpacing: "2px",
        textShadow: "0 0 14px rgba(255,70,70,0.3)",
        position: "relative",
        zIndex: 2
      }}>
        Transformando ideias
        <br />
        em produtos digitais
      </h2>

      {/* conteúdo */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "64px",
        position: "relative",
        zIndex: 2
      }}>

        {/* navegação */}
        <div>

          <h3 style={{
            marginBottom: "20px",
            fontSize: "22px",
            color: "#00F0FF",
            textTransform: "uppercase",
            letterSpacing: "1px",
            textShadow: "0 0 10px rgba(0,240,255,0.25)"
          }}>
            Navegue
          </h3>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px"
          }}>

            <p style={{
              color: "#D1D5DB",
              cursor: "pointer",
              fontSize: "18px"
            }}>
              Home
            </p>

            <p style={{
              color: "#D1D5DB",
              cursor: "pointer",
              fontSize: "18px"
            }}>
              Serviços
            </p>

            <p style={{
              color: "#D1D5DB",
              cursor: "pointer",
              fontSize: "18px"
            }}>
              Portfólio
            </p>

            <p style={{
              color: "#D1D5DB",
              cursor: "pointer",
              fontSize: "18px"
            }}>
              Redes
            </p>

          </div>

        </div>

        {/* redes */}
        <div>

          <h3 style={{
            marginBottom: "20px",
            fontSize: "22px",
            color: "#00F0FF",
            textTransform: "uppercase",
            letterSpacing: "1px",
            textShadow: "0 0 10px rgba(0,240,255,0.25)"
          }}>
            Redes
          </h3>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px"
          }}>

            <p style={{
              cursor: "pointer",
              color: "#FF4D4D",
              fontSize: "18px",
              textShadow: "0 0 8px rgba(255,70,70,0.2)"
            }}>
              Instagram ↗
            </p>

            <p style={{
              cursor: "pointer",
              color: "#FF4D4D",
              fontSize: "18px",
              textShadow: "0 0 8px rgba(255,70,70,0.2)"
            }}>
              Linkedin ↗
            </p>

            <p style={{
              cursor: "pointer",
              color: "#FF4D4D",
              fontSize: "18px",
              textShadow: "0 0 8px rgba(255,70,70,0.2)"
            }}>
              WhatsApp ↗
            </p>

          </div>

        </div>

      </div>

      {/* linha inferior */}
      <div style={{
        marginTop: "56px",
        height: "1px",
        background:
          "linear-gradient(90deg, rgba(255,60,60,0.35), rgba(0,240,255,0.2))"
      }} />

      {/* copyright */}
      <p style={{
        marginTop: "24px",
        color: "#6B7280",
        fontSize: "14px",
        letterSpacing: "1px"
      }}>
        © 2026 — Suporte de Domingo // Cyber Interface System
      </p>

    </footer>
  )
}

export default Footer