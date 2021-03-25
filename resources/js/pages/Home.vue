<template>
  <div>
    <div class="content">
      <div class="container">
        <div class="content-grids">
          <div class="col-md-8 content-main">
            <div class="content-grid">
              <div v-for="post in curentPage.data" :key="post.id">
                <div class="content-grid-info">
                  <img :src="post.img" alt="" />
                  <div class="post-info">
                    <h4>
                      <a href="single">{{ post.title }}</a>
                      <span>{{ post.published_at }} / 27 Comments</span>
                    </h4>
                    <p>
                      {{ shortText(post.content) }}
                    </p>
                    <a href="single"><span></span>READ MORE</a>
                  </div>
                </div>
              </div>
              <pagination
                :data="curentPage"
                @pagination-change-page="getPagination"
              ></pagination>
              <div class="content-grid-info">
                <img src="/storage/images/post2.jpg" alt="" />
                <div class="post-info">
                  <h4>
                    <a href="single">Lorem ipsum dolor sit amet</a> July 30,
                    2014 / 27 Comments
                  </h4>
                  <p>
                    Praesent dapibus, neque id cursus faucibus, tortor neque
                    egestas augue, eu vulputate magna eros eu erat. Aliquam erat
                    volutpat. Nam dui mi, tincidunt quis.
                  </p>
                  <a href="single"><span></span>READ MORE</a>
                </div>
              </div>
              <div class="content-grid-info">
                <img src="/storage/images/post3.jpg" alt="" />
                <div class="post-info">
                  <h4>
                    <a href="single">Lorem ipsum dolor sit amet</a> July 30,
                    2014 / 27 Comments
                  </h4>
                  <p>
                    Praesent dapibus, neque id cursus faucibus, tortor neque
                    egestas augue, eu vulputate magna eros eu erat. Aliquam erat
                    volutpat. Nam dui mi, tincidunt quis.
                  </p>
                  <a href="single"><span></span>READ MORE</a>
                </div>
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
import ContentRight from "../components/ContentRight.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { ContentRight },
  data() {
    return {
      curentPage: {},
    };
  },
  created() {
    this.getPagination();
  },
  methods: {
    ...mapActions(["getPosts"]),
    shortText(str) {
      if (str.length > 200) {
        return str.slice(0, 196) + "...";
      } else {
        return str;
      }
    },
    getPagination(page = 1) {
      axios.get("api/curentPage?page=" + page).then((res) => {
        this.curentPage = res.data;
      });
    },
  },
  computed: {
    ...mapGetters(["posts"]),
  },
};
</script>
<style scoped>
h4 {
  display: flex;
  flex-wrap: wrap;
}
</style>
