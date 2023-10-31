import heroes from "../data/heros";

console.log(heroes);

//Homework

export const getHeroSearch = (id = 1) => {
  try {
    const {
      id: heroId,
      name,
      owner,
    } = heroes.find(({ id: heroId }) => heroId === id);
    return { heroId, name, owner };
  } catch (error) {
    console.log(`Error id no find`);
    return {
      heroId: undefined,
      name: undefined,
      onwer: undefined,
    };
  }
};

const getHeroesByOwner = (owner = "Marvel") => {
  let OwnerHeroes = [];
  try {
    OwnerHeroes = heroes.filter(({ owner: ownerHero }) => ownerHero === owner);
  } catch (error) {
    console.error(`data no find`);
    OwnerHeroes = [];
  } finally {
    return OwnerHeroes;
  }
};
const { heroId, name, owner } = getHeroSearch(6);
const arrayByOwner = getHeroesByOwner("Marvel");
console.log(` Get Hero by Id`);
console.table(heroId, name, owner);
console.log("Get hero by owner");
console.log(arrayByOwner);
// Homework done.
