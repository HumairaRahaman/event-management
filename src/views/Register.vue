<script setup></script>

<template>
  <div class="h-full">
    <div class="flex justify-between h-auto">
      <div class="basis-[90%]">
        <div class="bg-green-50 px-3 mt-3 py-1 h-auto flex items-center rounded-lg">
          <h1 class="text-green-700 font-bold text-4xl mx-auto">Event Name</h1>
        </div>
        <div class="h-auto py-6 w-3/4 mb-6 mt-24 m-auto">
          <div>
            <p>Fill up your Informatioon</p>
          </div>
          <form>
            <div class="relative z-0 mb-6 w-full group">
              <input
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
                >Full Name</label
              >
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input
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
            <div class="grid md:grid-cols-2 md:gap-6">
              <div>
                <!-- <label
                  for="countries"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >Registration Type</label
                > -->
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Registration Type</option>
                  <option>Student</option>
                  <option>Earner</option>
                  <option>Spouse</option>
                  <option>Kids (below 5)</option>
                  <option>Kids (Above 5)</option>
                  <option>Kids (Above 18)</option>
                  <option>Driver</option>
                  <option>Maid</option>
                  <option>Souvenir</option>
                  <option>Guest</option>
                </select>
              </div>
              <div>
                <!-- <label
                  for="countries"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  ></label
                > -->
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                >
                  <option selected>Quantity</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                </select>
              </div>
            </div>
            <div class="grid md:grid-cols-2 mt-4 md:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <input
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
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="floating_profession"
                  id="floating_profession"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="floating_profession"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Profession</label
                >
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div>
                <label
                  for="countries"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >Marital Status</label
                >
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Unmarried</option>
                  <option>Married</option>
                  <option>Widowed</option>
                  <option>Single</option>
                  <option>Divorced</option>
                </select>
              </div>
              <div class="relative z-0 mt-6 w-full group">
                <input
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
            </div>
            <div class="grid md:grid-cols-2 mt-4 md:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="floating_kidName"
                  id="floating_kidName"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="floating_KidName"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Kid Name(1)</label
                >
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="number"
                  name="floating_age"
                  id="floating_age"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="floating_age"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Age</label
                >
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="floating_kidName"
                  id="floating_kidName"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="floating_KidName"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Kid Name(2)</label
                >
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="number"
                  name="floating_age"
                  id="floating_age"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="floating_age"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Age</label
                >
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="floating_kidName"
                  id="floating_kidName"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="floating_KidName"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Kid Name(3)</label
                >
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="number"
                  name="floating_age"
                  id="floating_age"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="floating_age"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Age</label
                >
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="floating_kidName"
                  id="floating_kidName"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="floating_KidName"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Kid Name(4)</label
                >
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="number"
                  name="floating_age"
                  id="floating_age"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="floating_age"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Age</label
                >
              </div>
            </div>
            <button
              type="submit"
              class="text-white bg-indigo-700 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div>
        <div class="overflow-x-auto top-[10px] left-[-10px] relative">
          <table class="w-28 text-sm text-left text-gray-500 dark:text-gray-400">
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
      </div>
    </div>

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
      <div class="mt-6 block space-y-4 md:flex md:space-y-0 md:space-x-4">
        <button
          type="submit"
          class="text-white bg-green-700 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Pay Now
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
