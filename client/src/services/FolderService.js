import gql from 'graphql-tag';
import apollo from '@/apollo';

const services = {
  createFolder(args) {
    const CREATE_FOLDER = gql`
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
      mutation: CREATE_FOLDER,
      variables: args,
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
