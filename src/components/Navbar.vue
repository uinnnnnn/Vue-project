<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/user">user</router-link></li>
      <!-- <li><router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link></li> -->
      <li><router-link to="/backend">backend</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
nav {
  background-color: #333;
  color: white;
  padding: 10px;
}

ul {
  list-style-type: none;
  display: flex;
}

li {
  margin-right: 10px;
}
</style>
