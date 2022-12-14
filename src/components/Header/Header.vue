<script setup></script>

<template>
  <div
    class="bg-gray-50 rounded-b-lg drop-shadow-lg md:px-7 sm:px-5 px-3 md:py-4 sm:py-3 py-1 flex"
  >
    <div class="basis-1/4">
      <a
        class="text-green-800 font-bold sm:text-2xl text-lg"
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
            <a class="md:text-lg text-sm"><RouterLink to="/">Home</RouterLink></a>
          </li>
          <!-- <li
            class="px-5 py-2 font-semibold text-green-800 rounded-md hover:bg-amber-200 mr-1"
          >
            <a><RouterLink to="/details">Details</RouterLink></a>
          </li> -->
          <li
            class="px-5 py-2 font-semibold text-green-800 rounded-md hover:bg-amber-200 mr-1"
          >
            <a class="md:text-lg text-sm"
              ><RouterLink to="/register">Register</RouterLink></a
            >
          </li>
          <li
            class="px-5 py-2 font-semibold text-green-800 rounded-md hover:bg-amber-200 mr-1"
          >
            <a class="md:text-lg text-sm"><RouterLink to="/test">Test</RouterLink></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped></style>
