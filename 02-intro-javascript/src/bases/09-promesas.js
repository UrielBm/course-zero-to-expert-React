import { getHeroSearch } from "./bases/08-exports";
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //Homework
    const { heroId, name, owner } = getHeroSearch(2);
    resolve({ heroId, name, owner });
  }, 2000);
}); //por natulareza asyncronas caen en la pila de trabajo primero todo lo sincrono

promise.then((hero) => {
  console.log(
    "el heroe es: " + hero.heroId + " " + hero.name + " " + hero.owner
  );
});

const getHerobyIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Homework
      const hero = getHeroSearch(id);
      if (hero.heroId !== undefined) {
        resolve(hero);
      } else {
        reject();
      }
    }, 2000);
  });
};

getHerobyIdAsync(2)
  .then((heroe) => console.log(heroe.heroId, heroe.name, heroe.owner))
  .catch(() => console.warn("hero no found"));
