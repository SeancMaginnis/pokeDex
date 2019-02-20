export default class Pokemon {
  constructor(data) {
    this.url = data.url
    this.name = data.name
    this.id = data.id || data._id
    this.type = data.type || data.types.type.name
    this.weight = data.weight
    this.height = data.height
    this.img = data.img || data.sprites.front_default + "." + data.sprites.extension
  }


  getCard(button) {
    return `
  <div class="col-3">
  <div class="card" style = "width: 18rem;" >
  <img src="${this.img}" class="card-img-top" alt="Card image Cap">
    <div class="card-body">
      <h5 class="card-title">${this.name}</h5>
      <p class="card-text">${this.type}</p>
      ${button}
    </div>
</div>
`
  }
}