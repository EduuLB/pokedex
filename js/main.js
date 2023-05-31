const divPokemons = document.getElementById("lista_pokemons");
const botao = document.getElementById("botaoPoke");
async function fetchPokemon(pokemon) {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
}

async function renderPokemon() {
    for (let i = 1; i <= 151; i++) {
        const pokemon = await fetchPokemon(i);
        const nome = pokemon.name;
        const id = String(pokemon.id).padStart(3, '0');
        const gif = pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        const tipo1 = pokemon.types[0].type.name
        let tipo2 = ''
        if(pokemon.types.length == 2){
            tipo2 = pokemon.types[1].type.name;
        }

        const tiposHTML = `
            <ul id="lista" class="tipos">
                <li class="tipo ${tipo1}${tipo2 ? '' : `centralizado ${tipo1}`}">${tipo1}</li>

                ${tipo2 ? `<li class="tipo ${tipo2}">${tipo2}</li>` : ''}
            </ul>
            `

        divPokemons.innerHTML += `
        <li class="cartao-pokemon">
            <div class="informacoes">
                <span>${nome}</span>
                <span>#${id}</span>
            </div>

            <img class="gif" src="${gif}" />
            ${tiposHTML}

        </li>
        `;

    }

  }
renderPokemon();
