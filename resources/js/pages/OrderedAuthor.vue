<template>
  <div>
    <div class="content">
      <div class="container">
        <div class="content-grids">
          <div class="col-md-8 content-main">
            <div class="content-grid">
              <div v-for="post in authorPost" :key="post.id">
                <post :post="post" />
              </div>
            </div>
          </div>
          <content-right />
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "../components/Post.vue";
import ContentRight from "../components/ContentRight.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "OrderedAuthor",
  components: { ContentRight, Post },
  props: ["user_id"],
  data() {
    return {};
  },
  created() {
    this.getAuthorPosts(this.user_id);
  },
  methods: {
    ...mapActions(["getAuthorPosts"]),
  },
  computed: {
    ...mapGetters(["authorPost"]),
  },
  watch: {
    "$route.path": function () {
      console.log(this.$route.params.id);
      this.getAuthorPosts(this.user_id);
    },
  },
};
</script>
<style scoped>
h4 {
  display: flex;
  flex-wrap: wrap;
}
</style>
