import { useState } from "react";

const Titulo = ({ primerProps }) => {
  const [cambioEstado, setCambioEstado] = useState();
  return (
    <section>
      <h1>HELLO{primerProps}</h1>
    </section>
  );
};

export default Titulo;
