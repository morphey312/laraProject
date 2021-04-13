<template>
  <div>
    <div class="content">
      <div class="container">
        <div class="content-grids">
          <div class="col-md-8 content-main">
            <div class="content-grid">
              <div v-for="post in authorPost.data" :key="post.id">
                <post :post="post" />
              </div>
              <pagination
                :data="authorPost"
                @pagination-change-page="getOrderedAuthor"
              ></pagination>
            </div>
            <modal v-if="showModal">
              <template v-slot:header>
                <h3>Warning!</h3>
              </template>
            </modal>
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
import Modal from "../components/Modal.vue";
import ContentRight from "../components/ContentRight.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "OrderedAuthor",
  components: { ContentRight, Post, Modal },
  props: ["user_id"],
  data() {
    return {};
  },
  created() {
    this.getOrderedAuthor();
  },
  methods: {
    ...mapActions(["getAuthorPosts"]),
    getOrderedAuthor(page = 1) {
      this.getAuthorPosts({ user_id: this.user_id, page: page });
    },
  },
  computed: {
    ...mapGetters(["authorPost", "showModal"]),
  },
  watch: {
    "$route.path": function () {
      this.getOrderedAuthor(this.user_id);
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
