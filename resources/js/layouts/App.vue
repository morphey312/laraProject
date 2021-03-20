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

export default {
  name: "App",
  components: { VueFooter, VueHeader },
};
</script>
