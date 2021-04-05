<template>
  <div class="single">
    <div class="container">
      <div class="col-md-8 single-main">
        <div class="single-grid">
          <div>
              <img :src="'../storage/' + singlePost.img" alt="" />
          </div>
          <p>
            {{ singlePost.content }}
          </p>
        </div>
        <ul class="comment-list">
          <h5 class="post-author_head">
            Written by
            <router-link
              to="#"
              :title="'Posts by' + singlePost.user.name"
              rel="author"
              >{{ singlePost.user.name }}</router-link
            >
          </h5>
          <li>
            <img
              src="/storage/images/avatar.png"
              class="img-responsive"
              alt=""
            />
            <div class="desc">
              <p>
                View all posts by:
                <router-link
                  :to="'/authorPosts/' + singlePost.user_id"
                  @click="goTo(singlePost.user_id)"
                  :title="'Posts by' + singlePost.user.name"
                  rel="author"
                  >{{ singlePost.user.name }}</router-link
                >
              </p>
            </div>
            <div class="clearfix"></div>
          </li>
        </ul>
        <div class="content-form">
          <h3>Leave a comment</h3>
          <form>
            <textarea placeholder="Message"></textarea>
            <input type="submit" value="SEND" />
          </form>
        </div>
      </div>
      <content-right />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import ContentRight from "../components/ContentRight.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Single",
  components: { ContentRight },
  props: ["id"],
  created() {
    this.getPost(this.id);
  },
  methods: {
    ...mapActions(["getPost"]),
    goTo(id) {
      this.$router.push({
        name: "authorPostsID",
        params: {
          user_id: id,
        },
      });
    },
  },
  computed: {
    ...mapGetters(["singlePost"]),
  },
  watch: {
    "$route.path": function () {
      console.log(this.$route.params.id);
      this.getPost(this.id);
    },
  },
};
</script>
