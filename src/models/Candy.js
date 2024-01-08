

export class Candy{
  constructor(data){
    this.name = data.name
    this.price = data.price
    this.stock = data.stock
    this.containsNuts = data.containsNuts || false
    this.picture = data.picture
  }

  // REVIEW now that we have vue, we pretty much don't need templates any more
}
