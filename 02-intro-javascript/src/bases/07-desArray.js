//asugnación desesctructurante de arreglos
const profesiones = ["QA", "DEVELOPER", "Proyect Manager"];
const [, , profesionOne] = profesiones;
console.log(profesionOne);

const returnArray = () => {
  return ["ABC", 123];
};

const [letras, numero] = returnArray();
console.log(letras, numero);

//Homework
// 1.- primer valor del arr se llamará nombre
// 2.- Se llamará setNombre
const useState = (value) => {
  return [value, () => console.log("hola mundo")];
};

// const arr = useState("Uriel");
//Solución.
const [name, setName] = useState("Diana");
console.log(name);
setName();
//Fin de la tarea.
