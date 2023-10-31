//Variables y constantes

const name = "Uriel";
const lastName = "Benítez";

let valueDado = 5;

console.log(name, lastName, valueDado);

//Scope solo se verifica dentro de la función
if (true) {
  let valueDado = 4;
  console.log(valueDado);
}
