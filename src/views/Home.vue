<script setup></script>

<template>
  <div class="h-full 2xl:pb-20 md:pb-0 pb-20">
    <div class="h-auto w-full">
      <img
        src="../assets/images/COMINGSOONDESKTOP.png"
        class="w-full px-5 py-2 rounded-4xl mx-auto"
        alt=""
      />
    </div>
    <div class="md:flex md:py-11 py-2 h-full mt-2 lg:mt-10">
      <div
        class="md:w-1/2 w-[95%] shadow-lg m-5 py-8 md:flex md:items-center lg:py-20 xl:py-20 2xl:py-44 bg-lime-200 shadow-lime-200"
      >
        <img
          src="../assets/images/COMINGSOONDESKTOP.png"
          class="w-full px-5 py-2 md:h-[70%] rounded-4xl mx-auto"
          alt=""
        />
      </div>
      <div
        class="bg-lime-100 md:w-1/2 w-[95%] rounded-lg mb-5 py-8 lg:py-20 xl:py-20 2xl:py-44 m-5 shadow-lg font-semibold text-white shadow-lime-200"
      >
        <div class="flex flex-col md:items-start items-center">
          <ul class="px-6 md:py-12 pt-12 pb-6 text-lime-700">
            <li class="mt-2">EVENT NAME:</li>
            <li class="mt-2">EVENT DATE:</li>
            <li class="mt-2">VENUE:</li>
            <li class="mt-2">ORGANIGER NAME:</li>
          </ul>
          <div
            class="flex sm:justify-start justify-center md:items-start items-center md:ml-6 xl:mt-6 mb-3"
          >
            <RouterLink to="/register">
              <button
                class="bg-violet-700 hover:bg-violet-500 text-white font-bold md:py-[0.75rem] py-2 sm:py-4 px-6 rounded"
              >
                Register now
              </button></RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
