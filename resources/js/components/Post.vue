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
      <star-rating v-model="rating" />
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
        rating:0,
    };
  },
  created() {
    this.getRating(this.post.id);
  },
  methods: {
    ...mapActions(["deletePost", "setShowModal", "getRating"]),

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
  watch: {
    //   ratingAVG () {
    //       this.rating = this.ratingAVG;
    //   }
  }
};
</script>
