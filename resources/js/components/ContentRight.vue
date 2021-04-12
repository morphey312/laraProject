<template>
  <div class="col-md-4 col-12 content-right">
    <div class="recent">
      <h3>RECENT POSTS</h3>
      <ul>
        <li v-for="post in orderPosts" :key="post.id">
          <router-link :to="'/single/' + post.id" @click="goTo(post.id)">
            {{ post.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="clearfix"></div>
    <div class="categories">
      <h3>CATEGORIES</h3>
      <ul>
        <li v-for="category in categories" :key="category.id">
          <router-link
            :to="'/category/' + category.id"
            @click="goToCategory(category.id)"
            >{{ category.name }}</router-link
          >
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
    goTo(id) {
      this.$router.push({
        name: "singleID",
        params: {
          id: id,
        },
      });
    },
    goToCategory(id) {
      this.$router.push({
        name: "categoryID",
        params: {
          category_id: id,
        },
      });
    },
  },
  computed: {
    ...mapGetters(["categories", "orderPosts"]),
  },
};
</script>
