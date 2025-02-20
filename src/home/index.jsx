import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";
const Index = () => {
  const [getCount, setCount] = useState(0);
  const handleButton = () => {
    setCount(getCount + 1);
  };
  return (
    <Row>
      <>
        Hola soy Jesus, este es un Button:{" "}
        <Button
          onClick={() => {
            handleButton();
          }}
        >
          Hola
        </Button>
      </>
      <>
        <h1>{getCount}</h1>
      </>
    </Row>
  );
};
export default Index;
