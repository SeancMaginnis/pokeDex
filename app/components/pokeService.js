import Pokemon from "../models/pokemon.js";

//private




let _state = {
  apiPoke: []
  myTeam: []
}

let _subscribers = {
  apiPoke: []
  myTeam[]
}


function setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].array.forEach(fn => fn())
}


//public
export default class PokeService(prop, fn){

  addSubscriber(prop, fn){
    _subscribers[prop].push(fn)
  }

  get ApiPoke(){
    return _state.apiPoke.map(p => new Pokemon(p))
  }

  get MyTeam(){
    return _subscribers.myTeam.map(p => new Pokemon(p))
  }





