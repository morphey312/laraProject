<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <router-link to="/"
          ><img src="/storage/images/logo.jpg" title="logo" alt="logo"
        /></router-link>
        <div class="authMenu" v-if="user">
          <div>{{ user.name }}</div>
          <div><button @click="sendLogoutRequest">LOGOUT</button></div>
        </div>
        <div class="authMenu" v-else>
          <div> <router-link to="/login">LOGIN</router-link></div>
          <div><router-link to="/register">REGISTER</router-link></div>
        </div>

      </div>
      <!---start-top-nav---->
      <nav-menu />
      <!---//End-top-nav---->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NavMenu from "./NavMenu.vue";
export default {
  components: { NavMenu },
  name: "VueHeader",
  mounted() {
    console.log("current user is ", this.user);
  },
  methods: {
    ...mapActions("auth", ["sendLogoutRequest"]),
  },
  computed: {
    ...mapGetters("auth", ["user"]),
  },
};
</script>
<style scoped>
.authMenu {
  display: flex;
  justify-content: space-between;
}
</style>
