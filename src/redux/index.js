import axios from "axios";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const search = pokemon => {
    return dispatch => {
        // axios blah
        dispatch({
            type: "LOADING"
        });
        setTimeout(function(){
            axios.get(`http://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(response => {
                console.dir(response);
                dispatch({
                    type: "SEARCH",
                    pokemon: response.data
                });
            });
        }, 1000)
    }
}

export const addPokemon = () => {
    return dispatch => {
        dispatch({
            type: "ADD_POKEMON",
        });
    }
}

export const removePokemon = id => {
    return dispatch => {
        // axios blah
        dispatch({
            type: "REMOVE_POKEMON",
            id
        });
    }
}

export const addPokemontoPotential = () => {
    return dispatch => {
        // axios blah
        dispatch({
            type: "ADD_POKEMON_POTENTIAL",
        });
    }
}

export const removePokemonfromPotential = id => {
    return dispatch => {
        // axios blah
        dispatch({
            type: "REMOVE_POKEMON_POTENTIAL",
            id
        });
    }
}

const initialState = {
    searchResult: {},
    chosen: [],
    potentials: [],
    loading: false
};

export const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case "LOADING":
            return {
                ...prevState,
                loading: true
            };
        case "ADD_POKEMON":
            return {
                ...prevState,
                chosen: [prevState.searchResult, ...prevState.chosen]
            }
        case "REMOVE_POKEMON":
            const chosen = prevState.chosen.slice();
            const chosenIndex = chosen.findIndex(elem => elem._id = action.id);
            chosen.splice(chosenIndex, 1);
            return {
                ...prevState,
                chosen
            }
        case "ADD_POKEMON_POTENTIAL":
            return {
                ...prevState,
                potentials: [prevState.searchResult, ...prevState.potentials]
            }
        case "REMOVE_POKEMON_POTENTIAL":
            const potentials = prevState.potentials.slice();
            const potentialIndex = potentials.findIndex(elem => elem._id = action.id);
            potentials.splice(potentialIndex, 1);
            return {
                ...prevState,
                potentials
            }
        case "SEARCH":
            return {
                ...prevState,
                searchResult: action.pokemon,
                loading: false
            };
        default:
            return prevState
    }
}

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);
