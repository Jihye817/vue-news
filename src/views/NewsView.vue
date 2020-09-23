<template>
  <div>
    <div v-for="user in users" v-bind:key="user">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    fetchNewsList()
      .then(response => {
        console.log(response);
        this.users = response.data;
      })
      .catch(function(error) {
        console.log(error);
      })
  }
}
</script>

<style>

</style>