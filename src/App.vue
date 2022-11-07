<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
</script>

<template class="h-full">
  <Header />

  <RouterView />
  <!-- <transition name="fade" mode="out-in">
      v-slot="{ component }"
      <component :is="component"></component>
    </transition> -->
  <Footer></Footer>
</template>

<style scoped>
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */
</style>
