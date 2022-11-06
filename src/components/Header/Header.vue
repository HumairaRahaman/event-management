<script setup></script>

<template>
  <div class="bg-teal-100 rounded-b-lg drop-shadow-md px-7 py-4 flex">
    <div class="basis-1/4">
      <a
        class="text-green-800 font-bold text-2xl"
        href="https://www.octaglory.com/"
        target="blanck"
        >Octaglory</a
      >
    </div>
    <div class="basis-3/4">
      <nav>
        <ul class="flex justify-end mx-auto">
          <!-- Navbar menu content here -->
          <li
            class="px-5 py-2 font-semibold text-green-800 rounded-md hover:bg-amber-200 active:bg-violet-700 mr-1"
          >
            <a><RouterLink to="/">Home</RouterLink></a>
          </li>
          <li
            class="px-5 py-2 font-semibold text-green-800 rounded-md hover:bg-amber-200 mr-1"
          >
            <a><RouterLink to="/details">Details</RouterLink></a>
          </li>
          <li
            class="px-5 py-2 font-semibold text-green-800 rounded-md hover:bg-amber-200 mr-1"
          >
            <a><RouterLink to="/register">Register</RouterLink></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped></style>
