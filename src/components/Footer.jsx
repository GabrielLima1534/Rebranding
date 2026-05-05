function Footer() {
  return (
    <footer style={{
      backgroundColor: "#0F172A",
      color: "#FFFFFF",
      padding: "48px 32px",
      borderTop: "1px solid rgba(255,255,255,0.1)"
    }}>

      {/* Frase principal */}
      <h2 style={{
        fontSize: "32px",
        marginBottom: "32px"
      }}>
        Transformando ideias em produtos digitais
      </h2>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "32px"
      }}>

        {/* Navegação */}
        <div>
          <h3 style={{ marginBottom: "16px", fontSize: "20px" }}>
            Navegue
          </h3>
          <p>Home</p>
          <p>Serviços</p>
          <p>Portfólio</p>
          <p>Redes</p>
        </div>

        {/* Redes */}
        <div>
          <h3 style={{ marginBottom: "16px", fontSize: "20px" }}>
            Redes
          </h3>

          <p style={{ cursor: "pointer" }}>
            Instagram ↗
          </p>

          <p style={{ cursor: "pointer" }}>
            Linkedin ↗
          </p>

          <p style={{ cursor: "pointer" }}>
            WhatsApp ↗
          </p>
        </div>

      </div>

    </footer>
  )
}

export default Footer