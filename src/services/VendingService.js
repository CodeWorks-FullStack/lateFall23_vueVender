import { AppState } from "../AppState.js";



class VendingService{

  buyCandy(candyName){
    console.log('service buying', candyName);
    const selectedCandy = AppState.candies.find(candy => candy.name == candyName)
    selectedCandy.stock --
    AppState.moneyMade += selectedCandy.price
    AppState.myCandies.push(selectedCandy)
  }

}

export const vendingService = new VendingService()
