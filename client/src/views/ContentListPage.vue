<template>
  <v-container>
    <v-card
      v-for="(folder, i) in folders"
      :key="i"
    >
      <v-card-title>
        {{ folder.name }}
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row
            v-for="(file, j) in folder.files"
            :key="-j"
          >
            <v-label
              v-if="file.fileType === 'TEXT'"
            >
              {{ file.fileReference }}
            </v-label>
            <iframe
              v-else
              style="width: 100%;"
              :src="file.fileReference"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import gql from 'graphql-tag';

export default {
  data: () => ({
    folders: [],
  }),

  apollo: {
    folders: {
      query: gql`query folders($userId: String) {
        folders(userId: $userId) {
          id
          name
          files {
            id
            name
            fileReference
            fileType
          }
        }
      }`,

      variables: {
        userId: 'u001',
      },
    },
  },
};
</script>
