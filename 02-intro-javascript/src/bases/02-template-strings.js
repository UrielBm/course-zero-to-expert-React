//Tamplate Strings

const name = `Uriel`;
const latsName = `Benítez`;
// const fullName = name + " " + latsName; old versión
//Elemntos entre ${...} es código de javascript
const fullName = `${name} ${latsName}`;
console.log(fullName);

//pasado por referencia  y varible por default
const getSaludo = (name = "Uriel") => {
  return `hola, ${name}`;
};
console.log(getSaludo(fullName));
