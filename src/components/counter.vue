<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <p class="text-xl">Count: {{ counter.count }}</p>
    <div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="increment"
      >
        Increment
      </button>
      <button
        class="bg-red-500 ml-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        @click="decrement"
      >
        Decrement
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
const increment = () => counter.increment()
const decrement = () => counter.decrement()
</script>
