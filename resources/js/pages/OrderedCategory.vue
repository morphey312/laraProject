<template>
  <div>
    <div class="content">
      <div class="container">
        <div class="content-grids">
          <div class="col-md-8 content-main">
            <div class="content-grid">
              <div v-for="post in categoriesPost" :key="post.id">
                <post :post="post"></post>
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
  name: "OrderedCategory",
  components: { ContentRight, Post },
  props: ["category_id"],
  data() {
    return {};
  },
  created() {
    console.log("getCategoryPost", this.category_id);
    this.getCategoryPost(this.category_id);
  },
  methods: {
    ...mapActions(["getCategoryPost"]),
    goTo(id) {
      this.getCategoryPost(id);
      this.$router.push({
        name: "categoryID",
        params: {
          id: id,
        },
      });
    },
  },
  computed: {
    ...mapGetters(["categoriesPost"]),
  },
  watch: {
      '$route.path': function(){
    console.log(this.$route.params.id);
    this.getCategoryPost(this.category_id);
      }
  },
};
</script>
<style scoped>
h4 {
  display: flex;
  flex-wrap: wrap;
}
</style>
