const pokemonNumber = document.querySelector('#pokemon-number')
const pokemonName = document.querySelector('#pokemon-name')
const pokemonImage = document.querySelector('#pokemon-img')

const searchBar = document.querySelector("#search-bar");

const fetchPokemon = async pokemon =>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    var pokemonData = await res.json();

    return pokemonData;
}

const loadPokemon = async pokemon =>{
    const data = await fetchPokemon(pokemon)

    pokemonNumber.innerHTML = data.id
    pokemonName.innerHTML = data.name
    pokemonImage.src = data.sprites.versions['generation-v']['black-white'].animated["front_default"]
    pokemonImage.alt = `Sprite do ${data.name}`;
    pokemonImage.style.height= `${Math.max(80,Math.min(data.height*15,300))}px`;
}

async function searchPokemon(){
    let search = searchBar.value
    searchBar.value = ''
    loadPokemon(search.toLowerCase())
    
}

searchBar.addEventListener('keyup',async (e)=>{
    if(e.code =="Enter"){
        searchPokemon();
    }
});

loadPokemon('charizard')

