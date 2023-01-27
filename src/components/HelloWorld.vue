<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
/* eslint-disable */

<script>
import axios from 'axios';
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      location: "Bombolulu",
      posts: [],
      newPosts: {}
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
    submitData: function() {
      axios.post("http://localhost:3000/posts", this.newPosts).then(response =>{
        console.log("post to database", response);
        this.newPosts = {};
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
    <br />
    <h1>Post Create</h1>
    <p>Fill up form data below</p>
    Title: <input type="text" v-model="newPosts.title" /> <br />
    Body:<input type="text" v-model="newPosts.body" /><br />
    <button v-on:click="submitData">Submit</button>
    <br />
    <h1>All Posts</h1>
    <div v-for="post in posts" v-bind:key="post.id">
      <p>Title: {{ post.title }}</p>
      <p>Body: {{ post.body }}</p>
      <p><img v-bind:src="post.image" /></p>
      <hr />
    </div>
    <!-- <p>{{ posts }}</p> -->
  </div>
</template>

<style></style>
