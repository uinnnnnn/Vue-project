<template>
    <div>
        <form @submit.prevent="submitForm" class="w-full max-w-lg m-2">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-username">
                    User Name
                </label>
                <input v-model="formData.username"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name" type="text" placeholder="Doe" required />
                <!-- 錯誤訊息 -->
                <p v-if="formData.errors.username" class="text-red-500 text-xs italic">
                    {{ formData.errors.username }}
                </p>
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-Email">
                    E-mail
                </label>
                <input v-model="formData.email"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email" type="email" placeholder="Hos@gmail.com" required />
                <!-- 錯誤訊息 -->
                <p v-if="formData.errors.email" class="text-red-500 text-xs italic">
                    {{ formData.errors.email }}
                </p>
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Password
                </label>
                <input v-model="formData.password"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password" type="password" placeholder="*****" minlength="8" required />
                <!-- 錯誤訊息 -->
                <p v-if="formData.errors.password" class="text-red-500 text-xs italic">
                    {{ formData.errors.password }}
                </p>
            </div>
            <div class="flex">
                <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-4 rounded">
                    新增會員
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import axios from 'axios'
import { reactive } from 'vue'
const formData = reactive({
    username: '',
    email: '',
    password: '',
    errors: {
        username: '',
        email: '',
        password: ''
    }
})

const submitForm = async () => {
    const postData = {
        username: formData.username,
        email: formData.email,
        password: formData.password
    }

    let headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }

    const options = {
        method: 'POST',
        url: 'https://dev.cmrdb.cs.pu.edu.tw/~s1101834/web_2023_summer/public/api/users/create',
        data: postData,
        headers: headers
    }

    axios(options)
        .then((res) => {
            console.log(res)
            alert(
                res.data.message +
                '\n id=' +
                res.data.user.id +
                '\n username=' +
                res.data.user.username +
                '\n email=' +
                res.data.user.email
            )
        })
        .catch((error) => {
            console.log(error)
            console.log(error.response)
            alert(error.response.data.message)
            if (error.response.data.errors.password) {
                for (let i = 0; i < error.response.data.errors.password.length; i++) {
                    formData.errors.password += error.response.data.errors.password[i]
                }
            } else if (error.response.data.errors.username) {
                const usernameError = error.response.data.errors.username
                if (typeof usernameError === 'string') {
                    formData.errors.username = usernameError
                } else if (Array.isArray(usernameError)) {
                    for (let i = 0; i < usernameError.length; i++) {
                        formData.errors.username += usernameError[i]
                    }
                }
            } else if (error.response.data.errors.email) {
                for (let i = 0; i < error.response.data.errors.email.length; i++) {
                    formData.errors.email += error.response.data.errors.email[i]
                }
            }
        })
}
</script>
