<template>
  <div>
    <vueHeader />
        <router-view />
    <vueFooter />
  </div>
</template>

<script>
import VueHeader from "../components/VueHeader.vue";
import VueFooter from "../components/VueFooter.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: { VueFooter, VueHeader },
  computed: {
    ...mapGetters("auth", ["user"]),
  },

  mounted() {
    if (localStorage.getItem("authToken")) {
      this.getUserData();
    }
  },

  methods: {
    ...mapActions("auth", ["getUserData"]),
  },
};
</script>
