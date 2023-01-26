<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<script>
import axios from 'axios';
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      location: "Bombolulu",
      posts: []
    };
  },
  created: function() {},
  methods: {
    getData: function() {
      console.log("fetch from axios");
      axios.get("http://localhost:3000/posts").then(response =>{
        console.log(response.data);
        this.posts = response.data
      })
    },
    toggleInfo: function() {
    console.log("do something")
  }

  }
}
;
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>{{ location }}</p>
    Location: <input type="text" v-model="location" />
    <button v-on:click="toggleInfo">Info</button>
    <button v-on:click="getData">Data</button>
    <p>{{ posts }}</p>
  </div>
</template>

<style></style>
