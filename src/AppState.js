import { reactive } from 'vue'
import { Candy } from './models/Candy.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},


/** @type {Candy[]} */
  candies : [
    new Candy(
      {
      name: 'Bizzmunch',
      price: 3,
      stock: 25,
      containsNuts: true,
      picture: '🐝🍬'
    }),
    new Candy(
      {
      name: 'Cronchy Conch Bar',
      price: 2,
      stock: 2,
      containsNuts: false,
      picture: '🐚🍫'
    }),
      new Candy({
      name: 'Wizz Worlds Whirly Pop',
      price: 10.30,
      stock: 15,
      containsNuts: false,
      picture: '🧙‍♂️🍭'
    }),
      new Candy({
      name: 'Wizz Worlds Whirly Pop Deluxe',
      price: 30.10,
      stock: 5,
      containsNuts: true,
      picture: '🧙‍♂️🍭✨'
    }),
  ],

  // NOTE represents how much money the vending machine has made
  moneyMade: 0,

/** @type {Candy[]} */
  myCandies: []
})
