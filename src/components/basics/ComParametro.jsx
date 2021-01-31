// MESMA COISA
// function ComParametro({ titulo, subtitulo }) {
//   return (
//     <div>
//       <h2> {titulo} </h2>
//       <p>{subtitulo}</p>
//     </div>
//   );
// }
function ComParametro(props) {
  const status = props.nota >= 7 ? "Aprovado" : "Reprovado";
  return (
    <div>
      <h2> {props.titulo} </h2>
      <p>
        <strong>{props.aluno}</strong> tem a nota de{" "}
        <strong>{props.nota}</strong> e esta <strong>{status}</strong>!
      </p>
    </div>
  );
}

export default ComParametro;
