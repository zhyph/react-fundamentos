// function geraNumeros(qtd) {
//   let arr = [];
//   for (let i = 0; i < qtd; i++) {
//     let rand = Math.round(Math.random() * 59 + 1);
//     arr.push(rand);
//     arr.forEach(function (item, indice, array) {
//       if (arr[i] === item) {
//         arr.pop();
//         qtd++;
//       }
//     });
//   }
//   return arr;
// }

// console.log(geraNumeros(7));

// function geraNumeros(qtd) {
//   var arr = [];
//   while (arr.length < qtd) {
//     var r = Math.round(Math.random() * 59) + 1;
//     if (arr.indexOf(r) === -1) arr.push(r);
//   }
//   arr.sort((a, b) => a - b);
//   return arr;
// }
// console.log(geraNumeros(7));
