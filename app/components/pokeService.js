import Pokemon from "../models/pokemon.js";

//private

let _pokeAPI = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

let _sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/Sean/heroes'
})



let _state = {
  apiPoke: [],
  myTeam: []
}

let _subscribers = {
  apiPoke: [],
  myTeam: []
}


function setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].array.forEach(fn => fn())
}


//public
export default class PokeService {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get ApiPoke() {
    return _state.apiPoke.map(p => new Pokemon(p))
  }

  get MyTeam() {
    return _state.myTeam.map(p => new Pokemon(p))
  }

  addToTeam(id) {
    let poke = _state.apiPoke

    let myPoke = _state.myTeam.find(p => p.name == poke.name)
    if (myPoke) {
      alert('Already Have!')
      return
    }

    _sandbox.post('', poke)
      .then(res => {
        this.getMyTeamData()
      })
      .catch((err) => {
        console.log(err)
      })
  }


  getMyTeamData() {
    _sandbox.get()
      .then(res => {
        let data = res.data.results.map(d => new Pokemon(d))
        setState('myTeam', data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  getPokeData() {
    _pokeAPI.get()
      .then(res => {
        let data = res.data.results.map(d => new Pokemon(d))
        setState('apiPoki', data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}