<template>
  <v-container>
    <v-text-field
      label="Title"
      outlined
      v-model="title"
    />

    <v-select
      :items="fileTypes"
      label="File Type"
      outlined
      v-model="fileType"
    />

    <v-text-field
      label="File Reference"
      outlined
      v-model="fileReference"
    />

    <FolderSelect />

    <v-btn
      color="success"
      @click="saveFile"
    >
      Save
    </v-btn>
  </v-container>
</template>

<script>
import FolderSelect from '@/components/Selects/FolderSelect.vue';

export default {
  components: {
    FolderSelect,
  },

  data: () => ({
    fileTypes: ['Youtube', 'Text', 'URL', 'Image'],
    title: '',
    fileType: 'Youtube',
    fileReference: '',
  }),

  methods: {
    async saveFile() {
      const args = {
        title: this.title,
        fileType: this.fileType.toUpperCase(),
        fileReference: this.fileReference,
        userId: 'u001',
      };

      const ret = await this.$FileService.createFile(args)
        .catch((err) => console.error(err));

      console.log({ ret });

      if (ret.data) {
        this.$router.push({
          name: 'contents',
          params: {
            video: args,
          },
        });
      }
    },
  },
};
</script>
