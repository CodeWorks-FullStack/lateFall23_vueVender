<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="home-card p-5 card align-items-center shadow rounded elevation-3">
      <img src="https://bcw.blob.core.windows.net/public/img/8600856373152463" alt="CodeWorks Logo"
        class="rounded-circle">
      <h1 class="my-5 bg-dark text-white p-3 rounded text-center">
        Vue 3 Starter 🦧🦍
        {{ profits }}
      </h1>
      <Login/>
      <Navbar/>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, computed } from 'vue';
import Login from '../components/Login.vue';
import Navbar from '../components/Navbar.vue';
import { AppState } from '../AppState.js';

export default {
    setup() {
        // NOTE on mounted works very similar to the constructor in MVC, it runs, each time this component is mounted
        onMounted(() => {
            console.log('hompage loaded');
        });
        onUnmounted(() => {
            console.log('hompage unloaded');
        });
        return {
          profits: computed(()=> AppState.moneyMade)
        };
    },
    components: { Login, Navbar }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
