import { useState } from "react"

function Portfolio() {

  const projetos = [
    { nome: "Projeto 1", imagem: "https://picsum.photos/800/500?1", link: "https://google.com" },
    { nome: "Projeto 2", imagem: "https://picsum.photos/800/500?2", link: "https://google.com" },
    { nome: "Projeto 3", imagem: "https://picsum.photos/800/500?3", link: "https://google.com" },
    { nome: "Projeto 4", imagem: "https://picsum.photos/800/500?4", link: "https://google.com" },
    { nome: "Projeto 5", imagem: "https://picsum.photos/800/500?5", link: "https://google.com" },
    { nome: "Projeto 6", imagem: "https://picsum.photos/800/500?6", link: "https://google.com" },
    { nome: "Projeto 7", imagem: "https://picsum.photos/800/500?7", link: "https://google.com" },
    { nome: "Projeto 8", imagem: "https://picsum.photos/800/500?8", link: "https://google.com" }
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
      <h2 style={{ fontSize: "48px", marginBottom: "16px" }}>
        Portfólio
      </h2>

      {/* Subtítulo */}
      <p style={{
        fontSize: "32px",
        color: "#9CA3AF",
        maxWidth: "800px",
        marginBottom: "32px"
      }}>
        Nossos trabalhos: interfaces, códigos & experiências digitais ⌘
      </p>

      {/* Controles */}
      <div style={{ marginBottom: "16px" }}>
        <button onClick={anterior}>⬅</button>
        <button onClick={proximo} style={{ marginLeft: "8px" }}>➡</button>
      </div>

      {/* Cards */}
      <div style={{
        display: "flex",
        gap: "24px"
      }}>
        {projetos.slice(index, index + 2).map((proj, i) => (
          <div 
            key={i} 
            style={{ 
              cursor: "pointer", 
              flex: 1 
            }}
            onClick={() => window.open(proj.link)}
          >

            <img 
              src={proj.imagem}
              alt={proj.nome}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "16px"
              }}
            />

            <h3 style={{
              marginTop: "16px",
              fontSize: "24px"
            }}>
              {proj.nome}
            </h3>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Portfolio