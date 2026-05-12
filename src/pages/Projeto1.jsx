function Projeto1() {
  return (
    <section style={{
      backgroundColor: "#0F172A",
      color: "#FFFFFF",
      minHeight: "100vh",
      padding: "32px"
    }}>

      <h1 style={{
        fontSize: "48px",
        marginBottom: "24px"
      }}>
        Projeto 1
      </h1>

      <img
        src="https://picsum.photos/1000/500"
        alt="Projeto"
        style={{
          width: "100%",
          borderRadius: "16px",
          marginBottom: "24px"
        }}
      />

      <p style={{
        fontSize: "24px",
        color: "#9CA3AF",
        maxWidth: "900px",
        lineHeight: "1.6"
      }}>
        Projeto desenvolvido para apresentar uma experiência digital moderna,
        responsiva e escalável utilizando React e Vite.
      </p>

      <h2 style={{
        marginTop: "32px",
        marginBottom: "16px"
      }}>
        Tecnologias
      </h2>

      <ul>
        <li>React</li>
        <li>Vite</li>
        <li>JavaScript</li>
        <li>CSS</li>
      </ul>

    </section>
  )
}

export default Projeto1