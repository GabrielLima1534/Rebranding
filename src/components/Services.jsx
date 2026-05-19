import uiux from "../assets/images/UiUx.jpg"

function Services() {
  const whatsappLink = "https://wa.me/5511999999999?text=Quero%20solicitar%20um%20orçamento"
  const servicos = [
    {
      titulo: "UI / UX Design para Produtos Digitais",
      desc: "Transformamos ideias em interfaces intuitivas, responsivas e com foco na experiência do usuário projetadas para escalar globalmente.",
      imagem: uiux,
      destaque: true
    },
    {
      titulo: "Mídias Sociais ─ Design de Apresentações",
      desc: "Criamos conteúdos para redes sociais, apresentações profissionais e materiais promocionais. Sempre com clareza, estética e consistência visual."
    },
    {
      titulo: "Branding & Identidade Visual ◐",
      desc: "Criamos identidades visuais sólidas e marcantes alinhadas com posicionamento estratégico e experiência digital.",
      temBarra: true
    },
    {
      titulo: "Marketing Estratégico e Tráfego Pago ⟷",
      desc: "Campanhas inteligentes e segmentadas com foco em resultados reais. Estratégia, criatividade e performance.",
      metricas: ["58,12%", "34,27%", "64,26%"]
    },
    {
      titulo: "⌘ Desenvolvimento de Software",
      desc: "Aplicações web e mobile sob medida, com Clean Architecture, testes automatizados e escalabilidade integrada desde o início."
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

      <div style={{
        height: "1px",
        background: "linear-gradient(90deg, rgba(255,60,60,0.6), rgba(0,240,255,0.3))",
        marginBottom: "40px"
      }} />

      <h2 style={{
        fontSize: "56px",
        marginBottom: "16px",
        color: "#FF4D4D",
        textTransform: "uppercase",
        letterSpacing: "2px"
      }}>
        Serviços
      </h2>

      <p style={{
        fontSize: "32px",
        color: "#00F0FF",
        maxWidth: "900px",
        marginBottom: "24px"
      }}>
        Do branding à experiência digital ✶
      </p>

      <p style={{
        fontSize: "20px",
        color: "#B8C1CC",
        maxWidth: "950px",
        marginBottom: "56px",
        lineHeight: "1.7"
      }}>
        Soluções integradas em design, software, automação e capacitação para gerar valor e impulsionar resultados.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "28px"
      }}>

        {servicos.map((item, i) => {

          // 🔥 CARD DESTAQUE
          if (item.destaque) {
            return (
              <div key={i} style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "18px",
                minHeight: "320px",
                border: "1px solid rgba(255,70,70,0.3)",
                background: "linear-gradient(145deg, #1A0A0A, #090909)"
              }}>

                {item.imagem && (
                  <img
                    src={item.imagem}
                    alt="bg"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: "0.18"
                    }}
                  />
                )}

                <div style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(255,40,40,0.08), rgba(0,0,0,0.85))"
                }} />

                <div style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "32px"
                }}>

                  <h3 style={{
                    fontSize: "26px",
                    marginBottom: "16px",
                    color: "#00F0FF"
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

          // 🔹 CARDS NORMAIS
          return (
            <div key={i} className="service-card" style={{
              background: "linear-gradient(145deg, #130909, #070707)",
              padding: "32px",
              borderRadius: "18px",
              border: "1px solid rgba(255,70,70,0.2)"
            }}>

              <h3 style={{
                fontSize: "26px",
                marginBottom: "16px",
                color: "#00F0FF"
              }}>
                {item.titulo}
              </h3>

              {/* 🔥 BARRA SOMENTE NO ITEM COM temBarra */}
              {item.temBarra && (
                <div className="barra-branding" style={{
                  display: "flex",
                  gap: "4px",
                  marginBottom: "16px"
                }}>
                  {["#00f0ff","#00c8d6","#009fad","#007784","#004f5c"].map((cor,i)=>(
                    <span key={i} style={{
                      flex: 1,
                      height: "10px",
                      borderRadius: "4px",
                      background: cor,
                      display: "block"
                    }} />
                  ))}
                </div>
              )}

              <p style={{
                color: "#B8C1CC",
                lineHeight: "1.7",
                fontSize: "18px"
              }}>
                {item.desc}
              </p>

              {item.metricas && (
                <div style={{
                  marginTop: "18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px"
                }}>
                  {item.metricas.map((valor, index) => (
                    <div key={index} style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      gap: "8px"
                    }}>
                      <span style={{ color: "#00F0FF" }}>{valor}</span>
                      <span style={{ color: "#22C55E", fontWeight: "bold" }}>↑</span>
                    </div>
                  ))}
                </div>
              )}

                    <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="orcamento-btn"
>
  Solicitar orçamento
</a>

            </div>
          )
        })}
      </div>

    </section>
  )
}

export default Services