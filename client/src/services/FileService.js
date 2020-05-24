import gql from 'graphql-tag';
import apollo from '@/apollo';

const services = {
  createFile(args) {
    const CREATE_FILE = gql`
        mutation createFile(
          $title: String!,
          $fileType: FILE!,
          $fileReference: String!
          $userId: String!
        ) {
          createFile(
            title: $title,
            fileType: $fileType,
            fileReference: $fileReference,
            userId: $userId,
          ) {
            __typename,
            id,
          },
        }
      `;
    return apollo.defaultClient.mutate({
      mutation: CREATE_FILE,
      variables: args,
    });
  },
};

const FileService = {
  install(Vue) {
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$FileService = services;
  },
};

export default FileService;
