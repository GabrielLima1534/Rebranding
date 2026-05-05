function Services() {
  const servicos = [
    {
      titulo: "UI / UX Design para Produtos Digitais",
      desc: "Transformamos ideias em interfaces intuitivas, responsivas e com foco na experiência do usuário projetadas para escalar globalmente.",
      imagem: "https://images.unsplash.com/photo-1557683316-973673baf926"
    },
    {
      titulo: "Mídias Sociais ─ Design de Apresentações",
      desc: "Criamos conteúdos para redes sociais, apresentações profissionais e materiais promocionais. Sempre com clareza, estética e consistência visual.."
    },
    {
      titulo: "Branding & Identidade Visual ◐",
      desc: "Transformamos ideias em interfaces intuitivas, responsivas e com foco na experiência do usuário projetadas para escalar globalmente."
    },
    {
      titulo: "Marketing Estratégico e Tráfego Pago ⟷",
      desc: "Campanhas inteligentes e segmentadas com foco em resultados reais. Estratégia, criatividade e performance para seu negócio crescer com propósito."
    }
  ]

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
        Serviços
      </h2>

      {/* Subtítulo */}
      <p style={{
        fontSize: "32px",
        color: "#9CA3AF",
        maxWidth: "800px",
        marginBottom: "32px"
      }}>
        Do branding à experiência digital ✶
      </p>

      {/* Descrição */}
      <p style={{
        fontSize: "20px",
        color: "#9CA3AF",
        maxWidth: "900px",
        marginBottom: "48px"
      }}>
        Soluções integradas em design, software, automação e capacitação para gerar valor e impulsionar resultados.
      </p>

      {/* Grid de serviços */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "24px"
      }}>
        {servicos.map((item, i) => {

          if (i === 0) {
            return (
              <div key={i} style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                height: "280px",
                border: "1px solid rgba(255,255,255,0.1)"
              }}>

                {/* imagem de fundo */}
                <img 
                  src={item.imagem}
                  alt="bg"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "grayscale(100%) brightness(0.4)"
                  }}
                />

                {/* conteúdo */}
                <div style={{
                  position: "relative",
                  padding: "24px",
                  zIndex: 2
                }}>
                  <h3 style={{ fontSize: "20px", marginBottom: "12px" }}>
                    {item.titulo}
                  </h3>

                  <p style={{ fontSize: "16px", color: "#D1D5DB" }}>
                    {item.desc}
                  </p>
                </div>

              </div>
            )
          }

          // 🔹 CARDS NORMAIS
          return (
            <div key={i} style={{
              backgroundColor: "#111827",
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.1)"
            }}>
              <h3 style={{ fontSize: "24px", marginBottom: "8px" }}>
                {item.titulo}
              </h3>
              <p style={{ color: "#9CA3AF" }}>
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