<template>
  <div class="content-grid-info">
    <img :src="'../storage/' + post.img" alt="" />
    <div class="post-info">
      <h4>
        <router-link :to="'/single/' + post.id" @click="goTo(post.id)">
          {{ post.title }}
        </router-link>
        <span>{{ post.published_at }} / 27 Comments</span>
      </h4>
      <p>
        {{ shortText(post.content) }}
      </p>
      <div class="postGroup">
        <router-link :to="'/single/' + post.id" @click="goTo(post.id)">
          <span></span>READ MORE
        </router-link>
        <div v-if="authorization">
          <button
            type="button"
            class="btn btn-primary"
            @click="goToEdit(post.id)"
          >
            EDIT
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="setShowModal({ showModal: true, id: post.id })"
            id="show-modal"
          >
            DELETE
          </button>
        </div>
      </div>
      <div>
        <star-rating
          v-model="rating"
          @rating-selected="getVote({ post: post.id, user: user.id })"
        />
        <div class="rating">
          <div v-if="ratingPost > 0">
            AVG Rating {{ Math.round(ratingPost) }}
          </div>
          <div v-if="rating > 0">Your Rating {{ rating }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Post",
  components: { StarRating },
  props: ["post"],
  data() {
    return {
      rating: 3,
      ratingPost: null,
      voteRating: 0,
    };
  },
  created() {
    this.getRating(this.post.id);
  },
  methods: {
    ...mapActions(["deletePost", "setShowModal"]),
    getRating(rating) {
      axios
        .get("/api/ratings/" + rating)
        .then((res) => {
          this.ratingPost = res.data;
          console.log("setRating", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getVote(data) {
      console.log("setVote", data);
      if (this.user) {
        await axios
          .get("/api/voting/" + data.post + "/users/" + data.user)
          .then((res) => {
            this.voteRating = res.data;
            console.log("voteRating", res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (this.voteRating[0]) {
        console.log("Vote rating =", this.voteRating[0].pivot.rating);
        alert(
          "you voted for this post on " +
            this.voteRating[0].pivot.rating +
            " stars"
        );
      } else {
        this.voteRating = 0;
        axios.post();
      }
    },
    shortText(str) {
      if (str.length > 200) {
        return str.slice(0, 196) + "...";
      } else {
        return str;
      }
    },
    goTo(id) {
      this.$router.push({
        name: "singleID",
        params: {
          id: id,
        },
      });
    },
    goToEdit(id) {
      this.$router.push({
        name: "edit",
        params: {
          post_id: id,
        },
      });
    },
  },
  computed: {
    ...mapGetters("auth", ["user"]),
    ...mapGetters(["ratingAVG"]),
    authorization() {
      console.log("user for role ", this.user);
      if (this.user) {
        if (this.user.role_id === 1) {
          return true;
        } else {
          if (this.user.role_id === 2) {
            if (this.user.id === this.post.user_id) {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
    },
  },
  watch: {},
};
</script>
<style scoped>
.rating {
  display: flex;
  justify-content: space-between;
}
</style>
