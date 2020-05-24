import gql from 'graphql-tag';
import apollo from '@/apollo';

const services = {
  createFile(args) {
    console.log('FileService.createFile', args);
    const CREATE_FILE = gql`
        mutation createFile(
          $name: String!,
          $fileType: FILE_TYPE!,
          $fileReference: String!
          $userId: String!
        ) {
          createFile(
            name: $name,
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
