<template>
  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 my-3">
    <label
      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      for="grid-username"
    >
      輸入 username 查詢使用者資訊
    </label>
    <input
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="grid-last-name"
      type="text"
      placeholder="Doe"
      required
    />
    <!-- 錯誤訊息 -->
    <p class="text-red-500 text-xs italic">
      <!-- {{ formData.errors.username }} -->
    </p>
  </div>
  <div class="flex">
    <button
      type="submit"
      class="w-1/4 m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-4 rounded"
    >
      確認
    </button>
  </div>
</template>

<script>
import { reactive } from 'vue'

const username = reactive('');

const options = {
  method: "GET",
  url: "https://dev.cmrdb.cs.pu.edu.tw/~s1101834/web_2023_summer/public/api/users/username/${username}",
};

axios(options)
  .then((res) => {

  })

</script>
