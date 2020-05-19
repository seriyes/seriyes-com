<template>
  <v-container>
    <v-text-field
      label="Folder Name"
      outlined
      v-model="name"
    />

    <v-btn
      color="success"
      @click="createFolder"
    >
      Save
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name: '',
  }),

  methods: {
    async createFolder() {
      const args = {
        name: this.name,
        userId: 'u001',
      };

      const ret = await this.$FolderService.createFolder(args)
        .catch((err) => console.error(err));

      if (ret.data) {
        this.$router.push({
          name: 'Home',
        });
      }
    },
  },
};
</script>
