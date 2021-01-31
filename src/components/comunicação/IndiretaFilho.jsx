import React from "react";

function IndiretaPai(props) {
  const cb = props.quandoClicar;
  const gerarIdade = () => parseInt(Math.random() * 20 + 50);
  const gerarNerd = () => Math.random() > 0.5;
  return (
    <div>
      <div>Filho</div>
      <button onClick={(_) => cb("Joao", gerarIdade(), gerarNerd())}>
        Fornecer Informações
      </button>
    </div>
  );
}

export default IndiretaPai;
