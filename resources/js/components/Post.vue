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
          @click="deletePost(post.id)"
        >
          DELETE
        </button>
      </div>
      <star-rating v-model="rating" />
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import { mapActions } from "vuex";
export default {
  name: "Post",
  components: { StarRating },
  props: ["post"],
  data() {
    return {
      rating: 4,
    };
  },
  methods: {
    ...mapActions(["deletePost"]),

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
};
</script>
