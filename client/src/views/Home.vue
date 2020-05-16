<template>
  <v-container>
    Home
    <v-btn
      @click="$router.push('/create-matter')"
    >
      GO
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
};
</script>
