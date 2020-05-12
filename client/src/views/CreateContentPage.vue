<template>
  <v-container>
    <v-select
      :items="items"
      label="Material Type"
      outlined
      v-model="materialType"
    />
    <v-text-field
      label="Content"
      outlined
      v-model="content"
    />
    <v-btn
      color="success"
      @click="saveContent"
    >
      Save
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: ['Youtube', 'Text', 'URL'],
    materialType: 'Youtube',
    content: '',
  }),

  methods: {
    saveContent() {
      const args = {
        materialType: this.materialType,
        content: this.content,
      };

      this.$router.push({
        name: 'contents',
        params: {
          video: args,
        },
      });
    },
  },
};
</script>
