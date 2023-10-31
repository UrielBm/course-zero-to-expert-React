//objetos literales es lo mismo que un diccionario y trabaja con pares de valores
const person = {
  name: "Uriel",
  lastName: "Benítez",
  age: 27,
  address: {
    zipcode: "42084",
    city: "Pachuca",
    no: "136",
  },
};
// se pasan por referencia en memoria no por valor esto provoca una falsa asignación.
let person2 = person; // esto esta mal pasar por spret operator
person2 = { ...person }; // forma correcta
person2.name = "Diana";

//por EDMASCRIPT6 se puede obviar el nombre si se le pone el mismo nombre.
console.log({ person });
console.log({ person2 });
// console table
console.table(person);
