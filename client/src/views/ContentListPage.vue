<template>
  <v-container>
    Content List Page
    {{ video }}
    <iframe
      style="width: 100%;"
      v-if="video.content"
      :src="video.content"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
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
