//Funciones EN jS

function saludar(name = "Uriel") {
  return `Hola, ${name}`;
}
//Funciones flecha
const saludarTwo = (name = "Uriel") => {
  return `Hola, ${name}`;
};
const saludarThree = (name = "Uriel") => `Hola ${name}`;

const getUser = () => ({
  uid: "user123",
  userName: "Uriel",
});

const user = getUser();
console.log(user);
console.log(saludarTwo("Diana"));

// Homework
// 1.- Transformar a una función de Flecha
// 2.- Tiene que retornar un objeto implicito
// 3.- Probrar que funcione
function getActiveUser(name = "Uriel") {
  return {
    uid: "ABC1234",
    userName: name,
  };
}
const activeUser = getActiveUser("Diana");
//Solución HomeWork.
const getActiveUserHomeWork = (name = "Uriel") => ({
  iud: "ABC1234",
  userName: name,
});
const activeUserTwo = getActiveUserHomeWork("Elizabeth");

console.log("Inicio de tarea");
console.log(activeUserTwo);
console.log("Fin de tarea");
