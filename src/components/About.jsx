function About() {
  return (
    <section style={{
      backgroundColor: "#0F172A",
      color: "#FFFFFF",
      padding: "32px"
    }}>

      {/* Linha */}
      <div style={{
        height: "1px",
        backgroundColor: "rgba(255,255,255,0.1)",
        marginBottom: "32px"
      }} />

      {/* Título */}
      <h2 style={{
        fontSize: "48px",
        marginBottom: "16px"
      }}>
        Sobre nós
      </h2>

      {/* Texto principal */}
      <p style={{
        fontSize: "32px",
        color: "#9CA3AF",
        maxWidth: "800px",
        lineHeight: "1.6"
      }}>
        A Suporte de Domingo entrega experiências conceituais com design autoral, criando identidades únicas que rompem com o genérico. Estruturamos soluções completas com código orientado ao futuro impulsionando conversões, reduzindo custos operacionais e proporcionando uma experiência de usuário memorável e acessível.
      </p>

      {/* Texto da direita */}
      <p style={{
        fontSize: "32px",
        marginTop: "32px",
        maxWidth: "650px",
        marginLeft: "auto",
        textAlign: "right",
        lineHeight: "1.6"
      }}>
        Nossos centros de inovação em código, automações e design → inspire-se no Instagram e colabore no Discord ⟡
      </p>

      <div style={{
  marginTop: "32px",
  display: "flex",
  justifyContent: "flex-end",
  gap: "24px",
  flexWrap: "wrap"
}}>

  <button style={{
    backgroundColor: "#111827",
    color: "#FFFFFF",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "16px 32px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "20px"
  }}>
    Instagram →
  </button>

  <button style={{
    backgroundColor: "#111827",
    color: "#FFFFFF",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "16px 32px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "20px"
  }}>
    Discord ⟡
  </button>

</div>

    </section>

    
  )
}

export default About