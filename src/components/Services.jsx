function Services() {
  const servicos = [
    {
      titulo: "UI / UX Design para Produtos Digitais",
      desc: "Transformamos ideias em interfaces intuitivas, responsivas e com foco na experiência do usuário projetadas para escalar globalmente.",
      imagem: "https://images.unsplash.com/photo-1557683316-973673baf926"
    },
    {
      titulo: "Mídias Sociais ─ Design de Apresentações",
      desc: "Criamos conteúdos para redes sociais, apresentações profissionais e materiais promocionais. Sempre com clareza, estética e consistência visual."
    },
    {
      titulo: "Branding & Identidade Visual ◐",
      desc: "Criamos identidades visuais sólidas e marcantes alinhadas com posicionamento estratégico e experiência digital."
    },
    {
      titulo: "Marketing Estratégico e Tráfego Pago ⟷",
      desc: "Campanhas inteligentes e segmentadas com foco em resultados reais. Estratégia, criatividade e performance."
    },

    {
  titulo: "Consultoria & Capacitação",
  desc: "Diagnóstico de processos, automações e treinamentos práticos para sua equipe evoluir com estratégia e eficiência."
}
  ]

  return (
    <section style={{
      background: "linear-gradient(180deg, #120909 0%, #050505 100%)",
      color: "#FFFFFF",
      padding: "64px 32px"
    }}>

      {/* Linha */}
      <div style={{
        height: "1px",
        background: "linear-gradient(90deg, rgba(255,60,60,0.6), rgba(0,240,255,0.3))",
        marginBottom: "40px"
      }} />

      {/* Título */}
      <h2 style={{
        fontSize: "56px",
        marginBottom: "16px",
        color: "#FF4D4D",
        textTransform: "uppercase",
        letterSpacing: "2px",
        textShadow: "0 0 12px rgba(255,70,70,0.4)"
      }}>
        Serviços
      </h2>

      {/* Subtítulo */}
      <p style={{
        fontSize: "32px",
        color: "#00F0FF",
        maxWidth: "900px",
        marginBottom: "24px",
        textShadow: "0 0 10px rgba(0,240,255,0.35)"
      }}>
        Do branding à experiência digital ✶
      </p>

      {/* Descrição */}
      <p style={{
        fontSize: "20px",
        color: "#B8C1CC",
        maxWidth: "950px",
        marginBottom: "56px",
        lineHeight: "1.7"
      }}>
        Soluções integradas em design, software, automação e capacitação para gerar valor e impulsionar resultados.
      </p>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "28px"
      }}>

        {servicos.map((item, i) => {

          // CARD PRINCIPAL
          if (i === 0) {
            return (
              <div
                key={i}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "18px",
                  minHeight: "320px",
                  border: "1px solid rgba(255,70,70,0.3)",
                  background: "linear-gradient(145deg, #1A0A0A, #090909)",
                  boxShadow: "0 0 25px rgba(255,70,70,0.12)"
                }}
              >

                {/* imagem */}
                <img
                  src={item.imagem}
                  alt="bg"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: "0.18",
                    filter: "grayscale(100%) contrast(120%)"
                  }}
                />

                {/* overlay */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(255,40,40,0.08), rgba(0,0,0,0.85))"
                }} />

                {/* conteúdo */}
                <div style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "32px"
                }}>

                  <h3 style={{
                    fontSize: "28px",
                    marginBottom: "18px",
                    color: "#00F0FF",
                    textShadow: "0 0 10px rgba(0,240,255,0.35)"
                  }}>
                    {item.titulo}
                  </h3>

                  <p style={{
                    fontSize: "18px",
                    lineHeight: "1.7",
                    color: "#D1D5DB"
                  }}>
                    {item.desc}
                  </p>

                </div>

              </div>
            )
          }

          // CARDS NORMAIS
          return (
            <div
              key={i}
              style={{
                background:
                  "linear-gradient(145deg, #130909, #070707)",
                padding: "32px",
                borderRadius: "18px",
                border: "1px solid rgba(255,70,70,0.2)",
                transition: "0.3s",
                boxShadow: "0 0 18px rgba(255,0,0,0.08)"
              }}
            >

              <h3 style={{
                fontSize: "26px",
                marginBottom: "16px",
                color: "#00F0FF",
                textShadow: "0 0 8px rgba(0,240,255,0.25)"
              }}>
                {item.titulo}
              </h3>

              <p style={{
                color: "#B8C1CC",
                lineHeight: "1.7",
                fontSize: "18px"
              }}>
                {item.desc}
              </p>

            </div>
          )
        })}
      </div>

    </section>
  )
}

export default Services