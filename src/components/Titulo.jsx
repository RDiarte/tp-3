import { useState } from "react";
import { Button } from "react-bootstrap";
const Titulo = ({ primerProps }) => {
  const [cambioEstado, setCambioEstado] = useState(" ");
  return (
    <section>
      <h1>
        HELLO{primerProps}
        {cambioEstado}!
      </h1>
      <Button
        variant="primary"
        onClick={() => setCambioEstado(cambioEstado + "(from changed state)")}
      >
        Click me
      </Button>
    </section>
  );
};

export default Titulo;
