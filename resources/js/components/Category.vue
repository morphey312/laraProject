<template>
  <option :value="index + 1">
    <div>
      {{ category.name }}
    </div>
  </option>
</template>

<script>
export default {
  name: "Category",
  props: ["category", "index"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
option {
  outline: none;
}
</style>
