import React, { cloneElement } from "react";

function Familia(props) {
  return (
    <div>
      {/* props.children.map((child)) vai pegar cada valor
         passado em props.children e atribuira em (child),
         depois disso a função chama um return que retorna uma
         função de clonagem que clona o valor que foi passado em (child)
         e atribui o valor passo em props para o objeto clonado 
         cloneElement(child, {..props, key:i}) cria uma chave e 
         atribui ela para cada clone */}
      {props.children.map((child, i) => {
        return cloneElement(child, { ...props, key: i });
      })}
    </div>
  );
}

export default Familia;
