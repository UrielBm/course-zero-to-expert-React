//Desestructuración.
const person = {
  name: "Uriel",
  age: 27,
  profession: "Developer",
  range: "SemiSr",
  address: {
    number: 136,
    zipcode: 42084,
  },
};

const { name: nombre, age, profession } = person;

console.table(nombre, age, profession);

const getPerson = ({ profession, age, name = "Uriel", range = "Jr" }) => {
  //   console.log(name, age, range);
  return {
    nombre: name,
    edad: age,
  };
};

const trabajador = getPerson(person);

//HomeWork
const useContext = ({
  profession = "Developer",
  age = 18,
  name = "John Dou",
  range = "Jr",
  address,
}) => {
  return {
    nombre: name,
    edad: age,
    direccion: address,
  };
};
const user = useContext(person);
const {
  nombre: nombreUser,
  edad,
  direccion: { number, zipcode },
} = useContext(person);
//Fin de la tarea
console.log(nombreUser, edad);
console.log(number, zipcode);
//Antes
// console.log(person.age);
// console.log(person.profession);
