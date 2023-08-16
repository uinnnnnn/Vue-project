<template>
  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 my-3">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-username">
      輸入 username 查詢使用者資訊
    </label>
    <input v-model="inputUsername"
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      type="text" placeholder="Username" required />
  </div>
  <div class="flex">
    <button @click="submitUsername" type="submit"
      class="w-1/4 m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-4 rounded">
      查詢
    </button>
  </div>
  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 my-3">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
      輸入 id 查詢使用者資訊
    </label>
    <input v-model="inputId"
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      type="text" placeholder="Id" required />
  </div>
  <div class="flex">
    <button @click="submitId" type="submit"
      class="w-1/4 m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-4 rounded">
      查詢
    </button>
  </div>
  <div class="m-2">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">使用者資訊</label>
    <p>id：{{ id }}</p>
    <p>名稱：{{ username }}</p>
    <p>信箱：{{ email }}</p>
    <p>最新資訊時間：{{ updateTime }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const inputUsername = ref('')
const inputId = ref('')
const username = ref('')
const id = ref('')
const email = ref('')
const updateTime = ref('')

const submitUsername = async () => {
  try {
    const response = await axios.get(`https://dev.cmrdb.cs.pu.edu.tw/~s1101834/web_2023_summer/public/api/users/username/${inputUsername.value}`)
    const userData = response.data.user

    id.value = userData.id
    username.value = userData.username
    email.value = userData.email
    updateTime.value = userData.updated_at.substr(0, 10)
  } catch (error) {
    console.error(error)
    // alert(error.response.data.errors.user)
  }
}

const submitId = async () => {
  try {
    const response = await axios.get(`https://dev.cmrdb.cs.pu.edu.tw/~s1101834/web_2023_summer/public/api/users/id/${inputId.value}`)
    const userData = response.data.user

    id.value = userData.id
    username.value = userData.username
    email.value = userData.email
    updateTime.value = userData.updated_at.substr(0, 10)
  } catch (error) {
    console.error(error)
    // alert(error.response.data.errors.user)
  }
}
</script>
