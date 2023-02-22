// Importação
import { pokemons } from "./data.js";

//Encontrar Pokemon pelo nome
const findPokemon = (name) => {
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].name == name) {
      return pokemons[i];
    }
  }
};

//Listar Pokemons do mesmo tipo
const sameTypePokemons = (type) => {
  const pokemonsList = [];

  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].type.includes(type)) {
      pokemonsList.push(pokemons[i]);
    }
  }

  return pokemonsList;
};

//Tradução dos tipos de Pokemons para português
const translateType = () => {
  const typesIntoPortuguese = {
    normal: "normal",
    fire: "fogo",
    water: "água",
    grass: "grama",
    flying: "voador",
    fighting: "lutador",
    poison: "veneno",
    electric: "elétrico",
    ground: "terra",
    rock: "pedra",
    psychic: "psíquico",
    ice: "gelo",
    bug: "inseto",
    ghost: "fantasma",
    steel: "ferro",
    dragon: "dragão",
    dark: "sombrio",
    fairy: "fada",
  };

  for (let i = 0; i < pokemons.length; i++) {
    for (let j = 0; j < pokemons[i].type.length; j++) {
      pokemons[i].type[j] = typesIntoPortuguese[pokemons[i].type[j]];
    }
  }
};

//Impressões
console.log(findPokemon("pikachu"));

console.log(sameTypePokemons("fire"));

translateType();
console.log(pokemons);
