<template>
  <v-container>
    Home
    <v-btn
      @click="$router.push('/create-matter')"
    >
      GO
    </v-btn>
    <v-btn
      @click="$router.push('/create-folder')"
    >
      Create Folder
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
