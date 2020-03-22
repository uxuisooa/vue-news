<template>
  <div>
    <div v-for="job in jobs">{{ job }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js';

export default {
  data() {
    return {
      ask: []
    };
  },
  created() {
    var vm = this;
    fetchJobsList()
      .then(reponse => (this.jobs = reponse.data))
      .catch(error => console.log(error));
  }
};
</script>

<style></style>
