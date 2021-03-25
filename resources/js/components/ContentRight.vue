<template>
  <div class="col-md-4 content-right">
    <div class="recent">
      <h3>RECENT POSTS</h3>
      <ul>
        <li>
          <a v-for="post in orderPosts" :key="post.id" href="#">{{
            post.title
          }}</a>
        </li>
      </ul>
    </div>
    <div class="comments">
      <h3>RECENT COMMENTS</h3>
      <ul>
        <li><a href="#">Amada Doe </a> on <a href="#">Hello World!</a></li>
        <li><a href="#">Peter Doe </a> on <a href="#"> Photography</a></li>
        <li><a href="#">Steve Roberts </a> on <a href="#">HTML5/CSS3</a></li>
      </ul>
    </div>
    <div class="clearfix"></div>
    <div class="categories">
      <h3>CATEGORIES</h3>
      <ul>
        <li v-for="category in categories" :key="category.id">
          <a href="#">{{ category.name }}</a>
        </li>
      </ul>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ContentRight",
  created() {
    this.getCategories();
    this.getOrderPosts();
  },
  methods: {
    ...mapActions(["getCategories", "getOrderPosts"]),
  },
  computed: {
    ...mapGetters(["categories", "orderPosts"]),
  },
};
</script>
