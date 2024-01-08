<template>
  <!-- NOTE the VIEW of the component -->
  <div>Your Money ${{ money }}</div>
  <div>Spend Money ${{ spentMoney }}</div>
  <button @click="addQuarter()" class="btn btn-custom">🪙 add quarter</button>


  <!-- SECTION candies -->
  <div class="text-light container">
    <section class="row">

      <div v-for="candy in candies" class="col-3">
        <div v-if="candy.stock > 0" class="card border text-center">
          <!-- {{ candy }} -->
          <h1>{{ candy.picture }}</h1>
          <h3>{{ candy.name }}</h3>
          <h5 class="text-success">$ {{ candy.price.toFixed(2) }}</h5>
          <span class="border rounded-pill"><i class="mdi mdi-package"></i>{{ candy.stock }}</span>
          <button :disabled="money < candy.price" @click="buyItem(candy)" class="btn btn-primary">Buy</button>
        </div>
        <div v-else>
          Sold Out
        </div>
      </div>

    </section>

    {{ candies }}

    <CandyBag/>
  </div>
</template>


<!-- NOTE the JS of the component [Controller code] -->
<script>
import { computed, ref} from 'vue'
import {AppState} from '../AppState.js'
import {vendingService} from '../services/VendingService.js'
import CandyBag from '../components/CandyBag.vue'
export default {
    setup() {
        // NOTE takes plain old js
        let money = ref(10);
        function addQuarter() {
            money.value += .25;
            console.log('🪙', money.value);
        }
        function buyItem(candy) {
            if (money.value >= candy.price) {
                console.log('buying', candy);
                vendingService.buyCandy(candy.name);
                money.value -= candy.price;
            }
        }
        let candies = computed(() => AppState.candies);
        // NOTE vue magic gets unwrapped so it can be accessed plainly in the template
        return {
            addQuarter,
            buyItem,
            money,
            candies,
            spentMoney: computed(() => AppState.moneyMade)
        };
    },
    components: { CandyBag }
}
</script>


<!-- NOTE Styles bound to this component (styles won't transfer as long as "scoped is on the style tag") -->
<style lang="scss" scoped>

</style>
