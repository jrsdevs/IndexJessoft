import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";
import "../styles/styles.css";

const Index = () => {
  const [getFlagButton, flagButton] = useState(false);
  const handleButton = () => {
    flagButton(!getFlagButton);
  };

  const sectionVane = () => {
    return (
      <>
        <h1>Yo soy Vane</h1>
        <>
          <small>
            Estamos dando nuestros primeros pasos para nuestra cafeteria, y aqui
            comenzará nuestra pagina web para poder ver las ordenes de nuestros
            servicios asi como obtener totales de cuenta por venta, inventarios
            y demas, tenemos muchos sueños por delante
          </small>
        </>
      </>
    );
  };

  return (
    <Row className="main-div">
      <Row className="main-child">
        <>
          <h1>JESSOFT</h1>
          Presiona el botón
          <Button
            onClick={() => {
              handleButton();
            }}
          >
            Clic me!
          </Button>
        </>
        {getFlagButton == true && sectionVane()}
      </Row>
    </Row>
  );
};
export default Index;
