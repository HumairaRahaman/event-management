<template>
  <div class="h-full">
    <div class="flex flex-col md:flex-row justify-between h-auto">
      <div class="basis-[90%] md:order-none order-2">
        <div
          class="bg-green-50 px-3 sm:mt-3 mt-11 py-1 h-auto flex items-center rounded-lg"
        >
          <h1 class="text-green-700 font-bold text-4xl mx-auto">Event Name</h1>
        </div>
        <div class="h-auto py-6 md:w-[90%] w-3/4 mb-6 mt-8 md:mt-24 m-auto">
          <!-- <div>
            <p>Fill up your Informatioon</p>
          </div> -->
          <form @submit.prevent="submit">
            <div class="grid md:grid-cols-2 md:gap-6 md:mb-8">
              <!-- <div class="text-center md:text-left">
                <label
                  for="countries"
                  class="block mb-5 text-lg font-semibold text-gray-900 dark:text-gray-400"
                  >Registation Type</label
                >
                <input
                  type="radio"
                  id="student"
                  name="member"
                  v-model="member"
                  value="Student"
                  class="mr-2"
                />
                <label for="student" class="pr-8">Student</label>

                <input
                  type="radio"
                  id="earner"
                  name="member"
                  v-model="member"
                  value="Earner"
                  class="mr-2"
                />
                <label for="earner">Earner</label>
              </div> -->
            </div>
            <div class="mt-5 text-center md:text-left">
              <p class="font-semibold mb-4">Fill up your Informatioon</p>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input
                v-model="name"
                type="text"
                name="floating_name"
                id="floating_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                for="floating_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Cadet Name</label
              >
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input
                v-model="email"
                type="email"
                name="floating_email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Email address</label
              >
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input
                v-model="email"
                type="text"
                name="floating_address"
                id="floating_address"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                for="floating_address"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Address</label
              >
            </div>

            <div class="grid md:grid-cols-2 mt-4 md:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <input
                  v-model="batch"
                  type="text"
                  name="floating_batch"
                  id="floating_batch"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="floating_batch"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Batch</label
                >
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  v-model="cadetName"
                  type="number"
                  name="floating_cadetNumber"
                  id="floating_cadetNumber"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="floating_cadetNumber"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Cadet Number</label
                >
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <input
                  v-model="phoneNumber"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="floating_phone"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Phone number</label
                >
              </div>
              <div class="md:grid-cols-2 flex space-x-1 sm:space-x-5">
                <div>
                  <button
                    id="dropdownDefault"
                    data-dropdown-toggle="dropdown"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                  >
                    Houses
                    <svg
                      class="ml-2 w-4 h-4"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  <!-- Dropdown menu -->
                  <div
                    id="dropdown"
                    class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  >
                    <ul
                      class="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefault"
                    >
                      <li>
                        <a
                          @click="hiden"
                          id="option"
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >SH</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >FH</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >NH</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >RH</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <button
                    id="dropdownDefault2"
                    data-dropdown-toggle="dropdown2"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                  >
                    T-Shirt
                    <svg
                      class="ml-2 w-4 h-4"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  <!-- Dropdown menu -->
                  <div
                    id="dropdown2"
                    class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  >
                    <ul
                      class="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefault2"
                    >
                      <li>
                        <a
                          @click="hiden"
                          id="option"
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >S</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >M</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >L</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >XL</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >XXL</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="grid md:grid-cols-2 md:gap-6">
              <div class="text-center sm:text-left">
                <label
                  for="Mstatus"
                  class="block mb-2 text-sm text-gray-900 dark:text-gray-400 font-semibold"
                  >Marital Status</label
                >
                <input
                  type="radio"
                  id="singal"
                  name="Mstatus"
                  v-model="status"
                  value="singal"
                  class="mr-2"
                />
                <label for="singal" class="pr-8">Singal</label>

                <input
                  type="radio"
                  id="married"
                  name="Mstatus"
                  v-model="status"
                  value="married"
                  class="mr-2"
                />
                <label for="married">Married</label>
              </div>
              <div v-if="status === 'married'" class="relative z-0 mt-6 w-full group">
                <input
                  v-model="spouseName"
                  type="text"
                  name="floating_spouseName"
                  id="floating_spouseName"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="floating_spouseName"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Spouse Name</label
                >
              </div>
            </div> -->
            <!-- <div v-if="status === 'married'" class="mt-4">
              <div v-for="(item, index) in kids" :key="item">
                <div class="flex flex-wrap w-full">
                  <div class="2xl:w-2/5 w-[30%]">
                    <div class="relative z-0 mt-6 w-full group pr-4">
                      <input
                        v-model="item.name"
                        type="text"
                        name="kidName"
                        id="kidName"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required=""
                      />
                      <label
                        for="kidName"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Kid name</label
                      >
                    </div>
                  </div>
                  <div class="2xl:w-2/5 w-[30%]">
                    <div class="relative z-0 mt-6 w-full group pr-4">
                      <input
                        v-model="item.age"
                        type="text"
                        name="kidAge"
                        id="kidAge"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required=""
                      />
                      <label
                        for="kidAge"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Kid age</label
                      >
                    </div>
                  </div>
                  <div class="2xl:w-1/5 w-2/5 space-x-1 xl:space-x-5 flex items-end">
                    <button
                      type="button"
                      class="bg-red-400 py-2 px-4 text-white"
                      @click="removeRow(index)"
                    >
                      delate
                    </button>
                    <button
                      @click="addRow"
                      class="bg-blue-400 py-2 px-1 sm:px-4 ml-0[important] text-white"
                    >
                      Add more
                    </button>
                  </div>
                </div>
              </div>
            </div> -->

            <!-- Driver -->

            <!-- <div class="mt-4">
              <div v-for="(item, index) in driver" :key="item">
                <div class="flex flex-wrap w-full">
                  <div class="w-1/2 2xl:w-2/5">
                    <div class="relative z-0 mt-6 w-full group pr-4">
                      <input
                        v-model="item.name"
                        type="text"
                        name="DriverName"
                        id="DriverName"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required=""
                      />
                      <label
                        for="DriverName"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Driver Name</label
                      >
                    </div>
                  </div>
                  <div class="2xl:w-1/5 w-1/2 lg:space-x-5 space-x-1 flex items-end">
                    <button
                      type="button"
                      class="bg-red-400 py-2 px-4 text-white"
                      @click="DriremoveRow(index)"
                    >
                      delate</button
                    >&nbsp;
                    <button
                      @click="DriaddRow"
                      class="bg-blue-400 py-2 px-2 sm:px-4 text-white"
                    >
                      Add more
                    </button>
                  </div>
                </div>
              </div>
            </div> -->

            <!-- Maid -->

            <!-- <div class="mt-4">
              <div v-for="(item, index) in maid" :key="item">
                <div class="flex flex-wrap w-full">
                  <div class="2xl:w-2/5 w-1/2">
                    <div class="relative z-0 mt-6 w-full group pr-4">
                      <input
                        v-model="item.name"
                        type="text"
                        name="MaidName"
                        id="MaidName"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required=""
                      />
                      <label
                        for="MaidName"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Maid Name</label
                      >
                    </div>
                  </div>
                  <div class="2xl:w-1/5 w-1/2 lg:space-x-5 space-x-1 flex items-end">
                    <button
                      type="button"
                      class="bg-red-400 py-2 px-4 text-white"
                      @click="MaidremoveRow(index)"
                    >
                      delate</button
                    >&nbsp;
                    <button
                      @click="MaidaddRow"
                      class="bg-blue-400 py-2 px-2 sm:px-4 text-white"
                    >
                      Add more
                    </button>
                  </div>
                </div>
              </div>
            </div> -->

            <!-- Souvenir -->
            <!-- <div class="mt-4">
              <div v-for="(item, index) in souvenir" :key="item">
                <div class="flex flex-wrap w-full">
                  <div class="w-1/2 2xl:w-2/5">
                    <div class="relative z-0 mt-6 w-full group pr-4">
                      <input
                        v-model="item.name"
                        type="text"
                        name="SouvenirName"
                        id="SouvenirName"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required=""
                      />
                      <label
                        for="SouvenirName"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Souvenir Name</label
                      >
                    </div>
                  </div>
                  <div class="2xl:w-1/5 w-1/2 lg:space-x-5 space-x-1 flex items-end">
                    <button
                      type="button"
                      class="bg-red-400 py-2 px-4 text-white"
                      @click="SouvenirremoveRow(index)"
                    >
                      delate</button
                    >&nbsp;
                    <button
                      @click="SouveniraddRow"
                      class="bg-blue-400 py-2 px-2 sm:px-4 text-white"
                    >
                      Add more
                    </button>
                  </div>
                </div>
              </div>
            </div> -->

            <!-- Guest -->

            <!-- <div class="mt-4">
              <div v-for="(item, index) in guest" :key="item">
                <div class="flex flex-wrap w-full">
                  <div class="w-1/2 2xl:w-2/5">
                    <div class="relative z-0 mt-6 w-full group pr-4">
                      <input
                        v-model="item.name"
                        type="text"
                        name="GuestName"
                        id="GuestName"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required=""
                      />
                      <label
                        for="GuestName"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Guest Name</label
                      >
                    </div>
                  </div>
                  <div class="2xl:w-1/5 w-1/2 lg:space-x-5 space-x-1 flex items-end">
                    <button
                      type="button"
                      class="bg-red-400 py-2 px-4 text-white"
                      @click="GuestremoveRow(index)"
                    >
                      delate</button
                    >&nbsp;
                    <button
                      @click="GuestaddRow"
                      class="bg-blue-400 py-2 px-2 sm:px-4 text-white"
                    >
                      Add more
                    </button>
                  </div>
                </div>
              </div>
            </div> -->

            <div class="md:text-left text-center">
              <button
                @click="submit"
                class="mt-6 text-white bg-indigo-700 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:w- w-50% sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Pay Now
              </button>
            </div>
          </form>
        </div>
      </div>
      <!----chart---->
      <!-- <div class="order-1">
        <div
          class="overflow-x-auto top-[10px] md:left-[-10px] sm:ml-[30px] left-[-10px] relative flex justify-center"
        >
          <table
            class="md:w-28 w-[75%] text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Student
                </th>
                <td class="py-1 px-4">3000</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Earner
                </th>
                <td class="py-1 px-4">5000</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Spouse
                </th>
                <td class="py-1 px-4">2500</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Kids (below 5)
                </th>
                <td class="py-1 px-4">0</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Kids (Above 5)
                </th>
                <td class="py-1 px-4">1000</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Kids (Above 18)
                </th>
                <td class="py-1 px-4">2500</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Driver
                </th>
                <td class="py-1 px-4">1500</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Maid
                </th>
                <td class="py-1 px-4">1500</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Souvenir
                </th>
                <td class="py-1 px-4">2500</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Guest
                </th>
                <td class="py-1 px-4">5000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> -->
      <!----chart---->
    </div>
    <!-- data show the table -->
    <!-- <div class="h-auto py-2 md:py-6 md:w-[90%] sm:w-4/5 mb-6 mt-11 sm:mt-24 m-auto">
      <div>
        <p class="ml-5 mb-5 text-center md:text-left font-semibold">Check Your Invoice</p>
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
                Member:<strong>{{ member }}</strong>
              </th>
              <td class="py-4 px-6">{{ memberquan }}</td>
              <td class="py-4 px-6">{{ memberfee }}</td>
              <td class="py-4 px-6">{{ memberfee }}</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Spouse
              </th>
              <td class="py-4 px-6">{{ spousequan }}</td>
              <td class="py-4 px-6">2500</td>
              <td class="py-4 px-6">{{ spousefee }}</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Kids (Below 5)
              </th>
              <td class="py-4 px-6">{{ kidb5quan }}</td>
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
              <td class="py-4 px-6">{{ kida5quan }}</td>
              <td class="py-4 px-6">1000</td>
              <td class="py-4 px-6">{{ kida5fee }}</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Kid (Above 18)
              </th>
              <td class="py-4 px-6">{{ kida18quan }}</td>
              <td class="py-4 px-6">2500</td>
              <td class="py-4 px-6">{{ kida18fee }}</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Driver
              </th>
              <td class="py-4 px-6">{{ drivarquan }}</td>
              <td class="py-4 px-6">1500</td>
              <td class="py-4 px-6">{{ driverfee }}</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Maid
              </th>
              <td class="py-4 px-6">{{ maidquan }}</td>
              <td class="py-4 px-6">1500</td>
              <td class="py-4 px-6">{{ maidfee }}</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Souvenir
              </th>
              <td class="py-4 px-6">{{ souvenirquan }}</td>
              <td class="py-4 px-6">2500</td>
              <td class="py-4 px-6">{{ souvenirfee }}</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Guest
              </th>
              <td class="py-4 px-6">{{ guestquan }}</td>
              <td class="py-4 px-6">5000</td>
              <td class="py-4 px-6">{{ guestfee }}</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Total
              </th>
              <td class="py-4 px-6">{{ totalquan }}</td>
              <td class="py-4 px-6"></td>
              <td class="py-4 px-6">{{ totalfee }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="mt-6 block space-y-4 text-center sm:text-left md:flex md:space-y-0 md:space-x-4 root"
      >
        <button
          @click="modalOpen = true"
          type="submit"
          class="text-white bg-green-700 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[16%] sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
    </div> -->
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

<!---<script setup>
// import { ref } from "vue";
// import Detail from "./Details.vue";

// const modalOpen = ref(false);
//
</script>--->

<script>
//import { ref } from "vue";
import ShowData from "./ShowData.vue";
import { reactive, ref } from "vue";

export default {
  name: "Register",
  components: {
    ShowData,
  },
  data() {
    house: "sh,fh,nh,rh";
  },
  setup() {
    let name = ref("");
    let status = ref("");
    let member = ref("");
    const modalOpen = ref(false);
    let maid = reactive([{ name: "" }]);
    let souvenir = reactive([{ name: "" }]);
    let guest = reactive([{ name: "" }]);
    let driver = reactive([{ name: "" }]);
    let kids = reactive([{ name: "", age: 0 }]);
    let drivarquan = ref(0);
    let driverfee = ref(0);
    let maidquan = ref(0);
    let maidfee = ref(0);
    let guestquan = ref(0);
    let guestfee = ref(0);
    let souvenirquan = ref(0);
    let souvenirfee = ref(0);
    let kidb5quan = ref(0);
    let kida5quan = ref(0);
    let kida5fee = ref(0);
    let kida18quan = ref(0);
    let kida18fee = ref(0);
    let kidsage = ref(kids.age);
    let spousefee = ref(0);
    let spousequan = ref(0);
    let memberquan = ref(0);
    let memberfee = ref(0);
    let totalquan = ref(0);
    let totalfee = ref(0);

    const addRow = () => {
      kids.push({ name: "", age: 0 });
    };

    const removeRow = (index) => {
      if (kids.length > 1) {
        kids.splice(index, 1);
      }
    };

    // driver
    const DriaddRow = () => {
      driver.push({ name: "" });
    };

    const DriremoveRow = (index) => {
      if (driver.length > 0) {
        driver.splice(index, 1);
      }
    };

    // maid

    const MaidaddRow = () => {
      maid.push({ name: "" });
    };

    const MaidremoveRow = (index) => {
      if (maid.length > 0) {
        maid.splice(index, 1);
      }
    };
    // souvenir
    const SouveniraddRow = () => {
      souvenir.push({ name: "" });
    };

    const SouvenirremoveRow = (index) => {
      if (souvenir.length > 0) {
        souvenir.splice(index, 1);
      }
    };
    // Guest
    const GuestaddRow = () => {
      guest.push({ name: "" });
    };

    const GuestremoveRow = (index) => {
      if (guest.length > 0) {
        guest.splice(index, 1);
      }
    };
    const hiden = () => {
      document.getElementById("");

      console.log("a");
    };
    const submit = () => {
      //member
      console.log(member.value);
      if (member.value === "Student") {
        memberquan.value = 1;
        memberfee.value = 3000;
      } else if (member.value === "Earner") {
        memberquan.value = 1;
        memberfee.value = 5000;
      } else {
        memberquan.value = 0;
        memberfee.value = 0;
      }
      //spouse
      console.log(status.value);

      if (status.value === "married") {
        spousefee.value = 2500;
        spousequan.value = 1;
      } else {
        spousefee.value = 0;
        spousequan.value = 0;
      }
      //Kids
      console.log(kids[0].age);

      console.log(kids.length);

      for (let i = 0; i < kids.length; i++) {
        if (kids[0].name === "") {
          kida5quan.value = 0;
          kida18quan.value = 0;
          kidb5quan.value = 0;
        } else if (kids[i].age <= 5) {
          kidb5quan.value++;
          kids[i].name;
        } else if (kids[i].age > 5 && kids[i].age < 19) {
          kida5quan.value++;
        } else {
          kida18quan.value++;
        }
      }
      kida5fee.value = 1000 * kida5quan.value;
      kida18fee.value = 2500 * kida18quan.value;

      //driver
      for (let i = 0; i < driver.length; i++) {
        if (driver[i].name === "") {
          drivarquan.value = 0;
        } else {
          drivarquan.value = Object.keys(driver).length;
        }
      }
      driverfee.value = 1500 * drivarquan.value;
      //maid
      for (let i = 0; i < maid.length; i++) {
        if (maid[i].name === "") {
          maidquan.value = 0;
        } else {
          maidquan.value = Object.keys(maid).length;
        }
      }
      maidfee.value = 1500 * maidquan.value;

      //guest
      for (let i = 0; i < guest.length; i++) {
        if (guest[i].name === "") {
          guestquan.value = 0;
        } else {
          guestquan.value = Object.keys(guest).length;
        }
      }
      guestfee.value = 5000 * guestquan.value;

      //souvenir
      for (let i = 0; i < souvenir.length; i++) {
        if (souvenir[i].name === "") {
          souvenirquan.value = 0;
        } else {
          souvenirquan.value = Object.keys(guest).length;
        }
      }
      souvenirfee.value = 2500 * souvenirquan.value;

      //total
      totalquan.value =
        memberquan.value +
        spousequan.value +
        kidb5quan.value +
        kida5quan.value +
        kida18quan.value +
        drivarquan.value +
        maidquan.value +
        souvenirquan.value +
        guestquan.value;

      totalfee.value =
        memberfee.value +
        spousefee.value +
        kida5fee.value +
        kida18fee.value +
        driverfee.value +
        maidfee.value +
        souvenirfee.value +
        guestfee.value;
    };

    // const saveItem = () =>{
    //   // axios
    //   axios.post('items',form).then(res=>{
    //     console.log(res);
    //   })
    // }

    return {
      status,
      member,
      kids,
      driver,
      memberquan,
      memberfee,
      spousefee,
      spousequan,
      drivarquan,
      maidquan,
      maidfee,
      driverfee,
      guestquan,
      guestfee,
      souvenirquan,
      souvenirfee,
      kidb5quan,
      kida5quan,
      kida5fee,
      kida18quan,
      kida18fee,
      kidsage,
      maid,
      souvenir,
      guest,
      totalquan,
      totalfee,
      addRow,
      removeRow,
      DriaddRow,
      DriremoveRow,
      MaidaddRow,
      MaidremoveRow,
      SouveniraddRow,
      SouvenirremoveRow,
      GuestaddRow,
      GuestremoveRow,
      submit,
      hiden,
    };
  },
};
</script>
