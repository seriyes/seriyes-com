import gql from 'graphql-tag';
import apollo from '@/apollo';

const services = {
  createFolder(variables) {
    const mutation = gql`
        mutation createFolder(
          $name: String!,
          $userId: String
        ) {
          createFolder(
            name: $name,
            userId: $userId,
          ) {
            __typename,
            id,
          },
        }
      `;
    return apollo.defaultClient.mutate({
      mutation,
      variables,
    });
  },

  addFileToFolder(variables) {
    const mutation = gql`
      mutation addFileToFolder(
        $folderId: ID!,
        $fileId: ID!,
      ) {
        addFileToFolder(
          folderId: $folderId,
          fileId: $fileId,
        ) {
          __typename,
          id,
        }
      }
    `;
    return apollo.defaultClient.mutate({
      mutation,
      variables,
    });
  },
};

const FolderService = {
  install(Vue) {
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$FolderService = services;
  },
};

export default FolderService;
