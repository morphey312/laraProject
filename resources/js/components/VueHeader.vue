<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <router-link to="/"><img src="/storage/images/logo.jpg" title="logo" alt="logo" /></router-link>
        <div v-if= "user" > {{ user.name }} </div>
      </div>
      <!---start-top-nav---->
      <nav-menu />
      <!---//End-top-nav---->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NavMenu from "./NavMenu.vue";
export default {
  components: { NavMenu },
  name: "VueHeader",
  mounted() {
      console.log('current user is ',this.user)
  },
  computed: {
      ...mapGetters("auth",["user"])
  }
};
</script>
