<template>
  <div>
    <div class="content">
      <div class="container">
        <div class="content-grids">
          <div class="col-md-8 content-main">
            <div class="content-grid">
              <div v-for="post in categoriesPost.data" :key="post.id">
                <post :post="post"></post>
              </div>
              <pagination
                :data="categoriesPost"
                @pagination-change-page="getOrderCategories"
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
  name: "OrderedCategory",
  components: { ContentRight, Post, Modal },
  props: ["category_id"],
  data() {
    return {};
  },
  created() {
    this.getOrderCategories();
  },
  methods: {
    ...mapActions(["getCategoryPost"]),
    getOrderCategories(page = 1) {
      this.getCategoryPost({ category_id: this.category_id, page: page });
    },
  },
  computed: {
    ...mapGetters(["categoriesPost", "showModal"]),
  },
  watch: {
    "$route.path": function () {
      console.log(this.$route.params.id);
      this.getOrderCategories();
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
