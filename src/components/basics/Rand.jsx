import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ min, max }) => {
  // min 50 max 100
  const aleatorio = Math.random() * (max - min) + min;

  return (
    <div>
      <h2>Número Aleatorio</h2>
      <p>Valor Mínimo: {min}</p>
      <p>Valor Maximo: {max}</p>
      <p>Valor escolhido: {Math.round(aleatorio)}</p>
    </div>
  );
};
