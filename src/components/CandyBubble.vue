<template>
  <span  class="border p-2" :style="`border-radius: ${candyProp.containsNuts ? '50px': '0px'}`" :class="{'bg-info': candyProp.containsNuts, 'bg-light': candyProp.containsNuts == false}" :title="candyProp.name">
    {{ candyProp.picture }}
  </span>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
  // NOTE props are like arguments and parameters, we need the component to take in a prop (parameter)
  props: {candyProp: {required: true}},
  setup(){
  return {  }
  }
};
</script>


<style lang="scss" scoped>

</style>
