import { useState } from "react";

export default function Carousel() {
  const items = ["Projeto 1", "Projeto 2", "Projeto 3"];
  const [index, setIndex] = useState(0);

  return (
    <div>
      <h2>{items[index]}</h2>
      <button onClick={() => setIndex((index + 1) % items.length)}>
        Próximo
      </button>
    </div>
  );
}