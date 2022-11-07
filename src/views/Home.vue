<script setup></script>

<template>
  <div class="h-full pb-96">
    <div class="h-1/4">
      <img
        src="../assets/images/COMINGSOONDESKTOP.png"
        class="w-full px-5 py-2 rounded-4xl mx-auto"
        alt=""
      />
    </div>
    <div class="flex py-11 h-full mt-10">
      <div class="w-1/2 shadow-lg m-5 py-44 bg-lime-200 shadow-lime-200">
        <p class="px-3 py-8 text-lg text-green-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe animi, totam
          laudantium et voluptas ipsa esse mollitia minus. Soluta obcaecati exercitationem
          molestiae labore amet, veritatis commodi nam odio autem iusto recusandae
          explicabo non doloremque repellendus? Quod pariatur totam unde beatae. Mollitia
          repellendus consequuntur et amet id rerum totam, quod illum laudantium,
        </p>
      </div>
      <div
        class="bg-lime-600 w-1/2 rounded-lg mb-5 py-44 m-5 shadow-lg font-semibold text-white shadow-lime-200"
      >
        <ul class="px-6 py-12">
          <li class="mt-2">EVENT NAME:</li>
          <li class="mt-2">EVENT DATE:</li>
          <li class="mt-2">VENUE:</li>
          <li class="mt-2">ORGANIGER NAME:</li>
        </ul>
      </div>
    </div>
    <div class="flex justify-center items-center mt-6 mb-3">
      <RouterLink to="/register">
        <button
          class="bg-violet-700 hover:bg-violet-500 text-white font-bold py-4 px-6 rounded"
        >
          Register now
        </button></RouterLink
      >
    </div>
  </div>
</template>

<style scoped></style>
