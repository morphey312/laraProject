<template>
  <div>
    <div class="content">
      <div class="container">
        <div class="">
          <div class="col-md-8 col-12 content-main">
            <div class="content-grid">
              <div v-for="post in currentPages.data" :key="post.id">
                <post :post="post" />
              </div>
              <pagination
                :data="currentPages"
                @pagination-change-page="getPagination"
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
  name: "Home",
  components: { ContentRight, Post, Modal },
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
    ...mapGetters(["currentPages", "showModal"]),
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
