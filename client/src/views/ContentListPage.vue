<template>
  <v-container>
    Content List Page
    {{ video }}
  </v-container>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
