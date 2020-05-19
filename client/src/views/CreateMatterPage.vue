<template>
  <v-container>
    <v-text-field
      label="Title"
      outlined
      v-model="title"
    />

    <v-select
      :items="matterTypes"
      label="Matter Type"
      outlined
      v-model="matterType"
    />

    <v-text-field
      label="Matter Reference"
      outlined
      v-model="matterReference"
    />

    <FolderSelect />

    <v-btn
      color="success"
      @click="saveMatter"
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
    matterTypes: ['Youtube', 'Text', 'URL', 'Image'],
    title: '',
    matterType: 'Youtube',
    matterReference: '',
  }),

  methods: {
    async saveMatter() {
      const args = {
        title: this.title,
        matterType: this.matterType.toUpperCase(),
        matterReference: this.matterReference,
        userId: 'u001',
      };

      const ret = await this.$MatterService.createMatter(args)
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
