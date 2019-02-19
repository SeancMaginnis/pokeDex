//private
import PokeService from "./pokeService.js";

let _pokeService = new PokeService()

function drawApiPoke() {
  let template = ''
  let poke = _pokeService.ApiPoke
  poke.array.forEach(p => {
    let button = `<button class= "btn btn-warning" onclick="app.controllers.pokeController.addToTeam('${p.id}')">ADD TO TEAM</button>`
    template += p.getCard(button)
  })
  document.querySelector('.pokeMon-characters').innerHTML = template
}

function drawMyteam() {
  let template = ''
  let poke = _pokeService.MyTeam
  poke.forEach(p => {
    let button = `<button class= "btn btn-primary" onclick="app.controllers.pokeController.removeFromTeam('${p.id}')">Remove From Team</button>`

    template += p.getCard(button)
  })
  document.querySelector('.myTeam').innerHTML = template



  //public
  export default class PokeController {
    constructor() {
      _pokeService.addsubscriber('apiPoke', drawApiPoke)
      _pokeService.addsubscriber('myTeam', drawMyteam)
    }
  }