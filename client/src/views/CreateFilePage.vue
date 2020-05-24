<template>
  <v-container>
    <v-text-field
      label="Name"
      outlined
      v-model="name"
    />

    <v-select
      :items="fileTypes"
      label="File Type"
      outlined
      v-model="fileType"
    />

    <v-textarea
      v-if="fileType === 'Text'"
      label="Text"
      v-model="fileReference"
      outlined
    />
    <v-text-field
      v-else
      label="File Reference"
      outlined
      v-model="fileReference"
    />

    <FolderSelect
      @folderChanged="setFolderId"
    />

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
    fileTypes: ['Youtube', 'Text', 'URL'],
    name: '',
    fileType: 'Youtube',
    fileReference: '',
    folderId: '',
  }),

  methods: {
    setFolderId(folderId) {
      this.folderId = folderId;
    },

    async saveFile() {
      const args = {
        name: this.name,
        fileType: this.fileType.toUpperCase(),
        fileReference: this.fileReference,
        userId: 'u001',
      };

      const { data } = await this.$FileService.createFile(args)
        .catch((err) => console.error(err));

      if (data) {
        const args2 = {
          folderId: this.folderId,
          fileId: data.createFile.id,
        };
        const ret2 = await this.$FolderService.addFileToFolder(args2);
        if (ret2.data) {
          this.$router.push({
            name: 'contents',
          });
        }
      }
    },
  },
};
</script>
