<template>
  <div>
    <div class="content">
      <div class="container">
        <div class="content-grids">
          <div class="col-md-8 content-main">
            <div class="content-grid">
              <div v-for="post in currentPages.data" :key="post.id">
                <div class="content-grid-info">
                  <img :src="post.img" alt="" />
                  <div class="post-info">
                    <h4>
                      <a :href="'/single/' + post.id" @click="goTo(post.id)">{{
                        post.title
                      }}</a>
                      <span>{{ post.published_at }} / 27 Comments</span>
                    </h4>
                    <p>
                      {{ shortText(post.content) }}
                    </p>
                    <a :href="'/single/' + post.id" @click="goTo(post.id)">
                      <span></span>READ MORE
                    </a>
                    <button type="button" class="btn btn-danger">Danger</button>
                    <star-rating v-model="rating" />
                  </div>
                </div>
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
import StarRating from "vue-star-rating";
import ContentRight from "../components/ContentRight.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { ContentRight, StarRating },
  data() {
    return {
      rating: 4,
    };
  },
  created() {
    this.getPagination();
  },
  methods: {
    ...mapActions(["getPosts", "getCurrentPages"]),
    shortText(str) {
      if (str.length > 200) {
        return str.slice(0, 196) + "...";
      } else {
        return str;
      }
    },
    getPagination(page = 1) {
      this.getCurrentPages(page);
    },
    goTo(id) {
      this.$router.push({
        name: "singleID",
        params: {
          id: id,
        },
      });
    },
  },
  computed: {
    ...mapGetters(["posts", "currentPages"]),
  },
};
</script>
<style scoped>
h4 {
  display: flex;
  flex-wrap: wrap;
}
</style>
