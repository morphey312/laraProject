<template>
  <div>
    <div class="top-menu">
      <div class="search">
        <form>
          <input type="text" placeholder="" required="" />
          <input type="submit" value="" />
        </form>
      </div>
      <span class="menu"> </span>
      <ul>
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="about">ABOUT</router-link></li>
        <li><router-link to="contact">CONTACT</router-link></li>
        <div class="clearfix"></div>
      </ul>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
};
</script>
