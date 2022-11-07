<template>
  <div class="modals bg-indigo-500 text-white text-2xl font-bold px-24 py-14 rounded-lg">
    <h1 class="text-xl font-semibold text-emerald-300 mb-2">{{ title }}</h1>
    <p class="text-center text-amber-400 mb-2">{{ msg }}</p>

    <div class="text-center">
      <button
        class="hover:text-red-700 hover:px-2 hover:py-1 text-sm rounded-sm hover:bg-white px-2 py-2 bg-red-700 text-white"
        @click="$emit('close')"
      >
        Close
      </button>
    </div>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  title: String,
  msg: String,
});
defineEmits("close");
</script>

<style scoped>
.modals {
}
.modals h1 {
  font-size: 32px;
  font-weight: 800;
  color: aquamarine;
}
</style>
