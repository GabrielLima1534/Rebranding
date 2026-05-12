import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Portfolio() {

  const navigate = useNavigate()

  const projetos = [
    {
      nome: "Projeto 1",
      imagem: "https://picsum.photos/1200/700?1",
      rota: "/portfolio/projeto-1"
    },

    {
      nome: "Projeto 2",
      imagem: "https://picsum.photos/1200/700?2",
      rota: "/portfolio/projeto-2"
    },

    {
      nome: "Projeto 3",
      imagem: "https://picsum.photos/1200/700?3",
      rota: "/portfolio/projeto-3"
    },

    {
      nome: "Projeto 4",
      imagem: "https://picsum.photos/1200/700?4",
      rota: "/portfolio/projeto-4"
    },

    {
      nome: "Projeto 5",
      imagem: "https://picsum.photos/1200/700?5",
      rota: "/portfolio/projeto-5"
    },

    {
      nome: "Projeto 6",
      imagem: "https://picsum.photos/1200/700?6",
      rota: "/portfolio/projeto-6"
    },

    {
      nome: "Projeto 7",
      imagem: "https://picsum.photos/1200/700?7",
      rota: "/portfolio/projeto-7"
    },

    {
      nome: "Projeto 8",
      imagem: "https://picsum.photos/1200/700?8",
      rota: "/portfolio/projeto-8"
    }
  ]

  const [index, setIndex] = useState(0)

  const proximo = () => {
    if (index < projetos.length - 2) {
      setIndex(index + 2)
    }
  }

  const anterior = () => {
    if (index > 0) {
      setIndex(index - 2)
    }
  }

  return (
    <section style={{
      background:
        "linear-gradient(180deg, #070707 0%, #050816 100%)",
      color: "#FFFFFF",
      padding: "72px 32px",
      position: "relative",
      overflow: "hidden"
    }}>

      {/* brilho */}
      <div style={{
        position: "absolute",
        top: "-150px",
        right: "-120px",
        width: "420px",
        height: "420px",
        background: "rgba(255,40,40,0.08)",
        filter: "blur(120px)"
      }} />

      {/* linha */}
      <div style={{
        height: "1px",
        background:
          "linear-gradient(90deg, rgba(255,60,60,0.4), rgba(0,240,255,0.25))",
        marginBottom: "48px"
      }} />

      {/* título */}
      <h2 style={{
        fontSize: "56px",
        marginBottom: "18px",
        color: "#FF4D4D",
        textTransform: "uppercase",
        letterSpacing: "2px",
        textShadow: "0 0 14px rgba(255,70,70,0.3)"
      }}>
        Portfólio
      </h2>

      {/* subtítulo */}
      <p style={{
        fontSize: "32px",
        color: "#00F0FF",
        maxWidth: "950px",
        marginBottom: "48px",
        lineHeight: "1.6",
        textShadow: "0 0 10px rgba(0,240,255,0.2)"
      }}>
        Nossos trabalhos:
        interfaces futuristas,
        códigos escaláveis &
        experiências digitais imersivas ⌘
      </p>

      {/* controles */}
      <div style={{
        marginBottom: "28px",
        display: "flex",
        gap: "16px"
      }}>

        <button
          onClick={anterior}
          style={{
            background:
              "linear-gradient(90deg, #151515, #0B1120)",
            border: "1px solid rgba(0,240,255,0.2)",
            color: "#00F0FF",
            width: "58px",
            height: "58px",
            borderRadius: "16px",
            cursor: "pointer",
            fontSize: "24px",
            boxShadow: "0 0 16px rgba(0,240,255,0.08)"
          }}
        >
          ←
        </button>

        <button
          onClick={proximo}
          style={{
            background:
              "linear-gradient(90deg, #2A0B0B, #130707)",
            border: "1px solid rgba(255,60,60,0.2)",
            color: "#FF4D4D",
            width: "58px",
            height: "58px",
            borderRadius: "16px",
            cursor: "pointer",
            fontSize: "24px",
            boxShadow: "0 0 16px rgba(255,60,60,0.08)"
          }}
        >
          →
        </button>

      </div>

      {/* cards */}
      <div style={{
        display: "flex",
        gap: "28px",
        flexWrap: "wrap"
      }}>

        {projetos.slice(index, index + 2).map((proj, i) => (
          <div
            key={i}
            onClick={() => navigate(proj.rota)}
            style={{
              cursor: "pointer",
              flex: 1,
              minWidth: "320px",
              background:
                "linear-gradient(180deg, #101010 0%, #0B1120 100%)",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.06)",
              transition: "0.3s",
              boxShadow: "0 0 25px rgba(0,0,0,0.35)"
            }}
          >

            {/* imagem */}
            <div style={{
              overflow: "hidden"
            }}>
              <img
                src={proj.imagem}
                alt={proj.nome}
                style={{
                  width: "100%",
                  height: "460px",
                  objectFit: "cover",
                  transition: "0.4s",
                  filter: "brightness(0.82)"
                }}
              />
            </div>

            {/* conteúdo */}
            <div style={{
              padding: "24px"
            }}>

              <h3 style={{
                marginTop: "0",
                marginBottom: "12px",
                fontSize: "28px",
                color: "#FF4D4D",
                textTransform: "uppercase",
                letterSpacing: "1px",
                textShadow: "0 0 10px rgba(255,70,70,0.2)"
              }}>
                {proj.nome}
              </h3>

              <p style={{
                color: "#9CA3AF",
                lineHeight: "1.6",
                fontSize: "18px"
              }}>
                Experiência digital desenvolvida com
                foco em performance, design futurista
                e interfaces responsivas.
              </p>

              <div style={{
                marginTop: "24px",
                color: "#00F0FF",
                fontSize: "16px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                textShadow: "0 0 10px rgba(0,240,255,0.2)"
              }}>
                Explorar projeto →
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Portfolio