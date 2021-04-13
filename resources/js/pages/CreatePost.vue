<template>
  <div class="contact-content">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="contact-info">
            <img src="" alt="" />
          </div>
          <div class="formGroup">
            <form
              method="POST"
              enctype="multipart/form-data"
              @submit.prevent="sendPost(user.id)"
            >
              <div class="input-group mb-3">
                <input
                  class="form-control"
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                  type="text"
                  placeholder="Title"
                  name="title"
                  required
                />
                <input
                  class="form-control"
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                  type="date"
                  placeholder="Published at"
                  name="published_at"
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
                  required
                  @change="selectFile"
                />
                <label class="input-group-text" for="inputGroupFile02"></label>
              </div>
              <div class="input-group mb-3">
                <textarea
                  class="form-control"
                  placeholder="Content"
                  name="content"
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
  name: "EditPost",
  components: { Category },
  data() {
    return {
      selectedCategory: 0,
      file: null,
    };
  },
  created() {
    this.getCategories();
  },
  methods: {
    ...mapActions(["getCategories", "createPost"]),
    selectFile(event) {
      this.file = event.target.files[0];
    },
    sendPost(id) {
      let form = new FormData();
      form.append("file", this.file);
      form.append("title", document.getElementsByName("title")[0].value);
      form.append(
        "published_at",
        document.getElementsByName("published_at")[0].value
      );
      form.append("category_id", this.selectedCategory);
      form.append("content", document.getElementsByName("content")[0].value);

      this.createPost({ user_id: id, form: form });
    },
  },
  computed: {
    ...mapGetters(["categories"]),
    ...mapGetters("auth", ["user"]),
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
