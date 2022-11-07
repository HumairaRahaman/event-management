<template>
  <!-- data show the table -->
  <div class="mx-56 my-12">
    <div>
      <p>Check Your Invoice</p>
    </div>
    <div class="overflow-x-auto bg-slate-400 relative">
      <table
        class="w-full text-sm text-left bg-slate-500 text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="py-3 px-6">Participant</th>
            <th scope="col" class="py-3 px-6">Qty</th>
            <th scope="col" class="py-3 px-6">Registration Fee</th>
            <th scope="col" class="py-3 px-6">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Member
            </th>
            <td class="py-4 px-6">1</td>
            <td class="py-4 px-6">5000</td>
            <td class="py-4 px-6">5000</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Spouse
            </th>
            <td class="py-4 px-6">1</td>
            <td class="py-4 px-6">2500</td>
            <td class="py-4 px-6">2500</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Kids (Below 5)
            </th>
            <td class="py-4 px-6">1</td>
            <td class="py-4 px-6">0</td>
            <td class="py-4 px-6">0</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Kids (Above 5)
            </th>
            <td class="py-4 px-6">2</td>
            <td class="py-4 px-6">1000</td>
            <td class="py-4 px-6">2000</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Kid (Above 18)
            </th>
            <td class="py-4 px-6">0</td>
            <td class="py-4 px-6">2500</td>
            <td class="py-4 px-6">0</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Driver
            </th>
            <td class="py-4 px-6">1</td>
            <td class="py-4 px-6">1500</td>
            <td class="py-4 px-6">1500</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Maid
            </th>
            <td class="py-4 px-6">1</td>
            <td class="py-4 px-6">1500</td>
            <td class="py-4 px-6">1500</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Guest
            </th>
            <td class="py-4 px-6">2</td>
            <td class="py-4 px-6">5000</td>
            <td class="py-4 px-6">10000</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Total
            </th>
            <td class="py-4 px-6">9</td>
            <td class="py-4 px-6"></td>
            <td class="py-4 px-6">22500</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-6 block space-y-4 md:flex md:space-y-0 md:space-x-4 root">
      <button
        @click="modalOpen = true"
        type="submit"
        class="text-white bg-green-700 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Pay Now
      </button>

      <teleport to=".modals-container">
        <div class="modal" v-if="modalOpen">
          <Detail
            @close="modalOpen = false"
            title="Congrstulstion, Your Registation is complete!"
            msg="Thank You"
          ></Detail>
        </div>
      </teleport>
    </div>
  </div>
</template>
<style scoped>
.modal {
  background: rgba(0, 0, 0, 0.1);
  padding: 10px;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 90%;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<script setup>
import { ref } from "vue";
import Detail from "./Details.vue";

const modalOpen = ref(false);
</script>
