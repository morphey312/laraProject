<template>
  <div class="contact-content">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div>
            <img :src="'../storage/' + singlePost.img" alt="" />
          </div>
          <div class="formGroup">
            <form
              method="POST"
              enctype="multipart/form-data"
              @submit.prevent="updatePost(singlePost.id)"
            >
              <div class="input-group mb-3">
                <input
                  class="form-control"
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                  type="text"
                  placeholder="Title"
                  name="title"
                  v-model="singlePost.title"
                  required
                />
                <input
                  class="form-control"
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                  type="date"
                  placeholder="Published at"
                  name="published_at"
                  v-model="published_at"
                  required
                />
              </div>
              <div class="input-group mb-3">
                <select
                  class="form-control"
                  id="inputGroupSelect01"
                  name="category_id"
                  v-model="selectedCategory"
                >
                  <category
                    v-for="(category, index) in categories"
                    :key="category.id"
                    :value="category.id"
                    :index="index"
                    :category="category"
                  ></category>
                </select>
                <label
                  class="input-group-text"
                  for="inputGroupSelect02"
                ></label>
              </div>
              <div class="input-group mb-3">
                <input
                  class="form-control"
                  id="inputGroupFile02"
                  type="file"
                  placeholder="File"
                  name="file"
                  @change="selectFile"
                />
                <label class="input-group-text" for="inputGroupFile02"></label>
              </div>
              <div class="input-group mb-3">
                <textarea
                  class="form-control"
                  placeholder="Content"
                  name="content"
                  v-model="singlePost.content"
                  required
                ></textarea>
                <input type="submit" value="SEND" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Category from "../components/Category.vue";
export default {
  name: "CreatePost",
  components: { Category },
  props: ["post_id"],
  data() {
    return {
      file: null,
      title: "",
      published_at: null,
      selectedCategory: 0,
      content: "",
    };
  },
  created() {
    this.getCategories();
    this.getPost(this.post_id);
  },
  methods: {
    ...mapActions(["getCategories", "editPost", "getPost"]),
    selectFile(event) {
      this.file = event.target.files[0];
      console.log(this.file);
    },

    updatePost(id) {
      let form = new FormData();
      form.append("_method", "PUT");
      form.append("file", this.file);
      form.append("title", document.getElementsByName("title")[0].value);
      form.append(
        "published_at",
        document.getElementsByName("published_at")[0].value
      );
      form.append("category_id", this.selectedCategory);
      form.append("content", document.getElementsByName("content")[0].value);
      form.append("id", id);
      console.log(document.getElementsByName("title")[0].value);
      console.log(
        "category_id",
        document.getElementsByName("category_id")[0].value
      );
      console.log(
        "published_at",
        document.getElementsByName("published_at")[0].value
      );
      console.log(this.selectedCategory);
      console.log("content", document.getElementsByName("content")[0].value);

      this.editPost({ post_id: id, form: form });
    },
  },
  computed: {
    ...mapGetters(["categories", "singlePost"]),
    ...mapGetters("auth", ["user"]),
    getDate() {
      this.published_at = this.singlePost.published_at.slice(0, 10);
      console.log("date-----", this.published_at);
    },
    getSelectedCategory() {
      this.selectedCategory = this.singlePost.category.id;
      console.log("date-----", this.selectedCategory);
    },
  },
  watch: {
    singlePost: function () {
      if (this.singlePost.published_at) {
        this.getDate;
        this.getSelectedCategory;
      }
    },
    "$route.path": function () {
      console.log(this.$route.params.id);
      this.getAuthorPosts(this.user_id);
    },
  },
};
</script>
<style scoped>
select {
  width: 100%;
}
.formGroup form {
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
}
form div {
  flex-basis: 100%;
}
input {
  outline: none;
}
input[type="file"]:focus {
  outline: none !important;
}
textarea {
  resize: none;
}
</style>
