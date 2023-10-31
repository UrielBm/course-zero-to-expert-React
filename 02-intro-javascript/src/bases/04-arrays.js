// Arreglos en Js colección de objectos en una misma variable los objetos pueden ser de diferentes tipos

const myArray = new Array(100); //Forma no recomendada al menos que se quiera iniciar con un tamaño fijo ya prestablecido
myArray.push(1);
const correctArray = [1, 2, 3, 4];
// no hacer por que muta el valor de arreglo
// correctArray.push(1);
// correctArray.push(2);
// correctArray.push(3);
// correctArray.push(4);

// arreglo 2 pasado por referencia pasa que modifica la dirección de memoria original y altera el arreglo correcto
let arrayTwo = correctArray;
//Tarea agregar al arreglo 2 un elemnto nuevo sin alterar al elemnto original en este caso correctArray
//Solución tarea.
const solutionHomeWork = () => {
  const arrayOne = [1, 2, 3, 4];
  console.log({ arrayOne });
  const arrayTwo = [...arrayOne, 5];
  console.log({ arrayTwo });
};
const alternativeSolution = (arrayOne = [1, 2, 3, 4]) => {
  const arrayTwo = [...arrayOne];
  arrayTwo.push(5);
  console.log({ arrayOne }, { arrayTwo });
};
// Ejecicio duplicar el valor de un arreglo
const solutionEjercicio = (arrayoOriginal = [2, 5, 10, 15]) => {
  const arrayThree = arrayoOriginal.map((value) => {
    return value * 2;
  });
  return { arrayoOriginal, arrayThree };
};
console.log("solución de tarea");
solutionHomeWork();
alternativeSolution();
console.log("Fin de la solución");
console.log("solución del ejercicio");
console.log(solutionEjercicio().arrayoOriginal, solutionEjercicio().arrayThree);
console.log("Fin del ejercicio");
console.log({ correctArray }, { arrayTwo });
console.log({ myArray });
