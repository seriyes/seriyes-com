<template>
  <v-select
    :items="folders"
    label="Folder"
    item-text="name"
    item-value="id"
    outlined
    v-model="folderId"
  />
</template>

<script>
import gql from 'graphql-tag';

export default {
  data: () => ({
    folderId: '',
    folders: [],
  }),

  apollo: {
    folders: {
      query: gql`query folders($userId: String) {
        folders(userId: $userId) {
          id
          name
        }
      }`,

      variables: {
        userId: 'u001',
      },
    },
  },
};
</script>
