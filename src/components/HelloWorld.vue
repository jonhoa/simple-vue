<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      location: "Bombolulu"
    };
  },
  created: function() {},
  methods: {
    toggleInfo: function() {
    console.log("do something")
  }
}
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>{{ location }}</p>
    Location: <input type="text" v-model="location" />
    <button v-on:click="toggleInfo">Info</button>
  </div>
</template>

<style></style>
