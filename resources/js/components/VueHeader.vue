<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <a href="/"><img src="/storage/images/logo.jpg" title="" /></a>
      </div>
      <!---start-top-nav---->
      <nav-menu />
      <!---//End-top-nav---->
    </div>
  </div>
</template>

<script>
import NavMenu from "./NavMenu.vue";
export default {
  components: { NavMenu },
  name: "VueHeader",
};
</script>
