<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/a">a</router-link> | 
    <router-link to="/c">c</router-link> | 
    <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
  </div>
  <router-view />
</template>
