<template>
  <div>
    <div class="content">
      <div class="container">
        <div class="content-grids">
          <div class="col-md-8 content-main">
            <div class="content-grid">
              <div v-for="post in currentPages.data" :key="post.id">
                <post :post="post" />
              </div>
              <pagination
                :data="currentPages"
                @pagination-change-page="getPagination"
              ></pagination>
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
import ContentRight from "../components/ContentRight.vue";
import Post from "../components/Post.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { ContentRight, Post },
  data() {
    return {
      post: {},
    };
  },
  created() {
    this.getPagination();
  },
  methods: {
    ...mapActions(["getCurrentPages"]),
    getPagination(page = 1) {
      this.getCurrentPages(page);
    },
  },
  computed: {
    ...mapGetters(["currentPages"]),
  },
};
</script>
<style scoped>
h4 {
  display: flex;
  flex-wrap: wrap;
}
.postGroup {
  display: flex;
  justify-content: space-evenly;
}
</style>
