<template>

  <h2>Your Candy</h2>
  <section >

    <!-- NOTE data not rendered inbetween <>✨✨</> but inside <✨> </> can be used with : -->
    <span v-for="candy in myCandies" class="border rounded-circle p-2" :title="candy.name">
      {{ candy.picture }}
    </span>
    <div class="my-5"></div>

    <!-- NOTE you can pass information down, from THIS component, to another, using props -->
    <!-- NOTE props are passed down like arguments, matching the name of the prop in the component -->
    <CandyBubble v-for="candy in myCandies" :candyProp="candy"/>

  </section>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import CandyBubble from './CandyBubble.vue';
export default {
    setup() {
        return {
            myCandies: AppState.myCandies
        };
    },
    components: { CandyBubble }
};
</script>


<style lang="scss" scoped>

</style>
