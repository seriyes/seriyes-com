import gql from 'graphql-tag';
import apollo from '@/apollo';

const services = {
  createMatter(args) {
    const CREATE_MATTER = gql`
        mutation createMatter(
          $title: String!,
          $matterType: MATTER_TYPE,
          $matterReference: String!
          $userId: String!
        ) {
          createMatter(
            title: $title,
            matterType: $matterType,
            matterReference: $matterReference,
            userId: $userId,
          ) {
            __typename,
            id,
          },
        }
      `;
    return apollo.defaultClient.mutate({
      mutation: CREATE_MATTER,
      variables: args,
    });
  },
};

const MatterService = {
  install(Vue) {
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$MatterService = services;
  },
};

export default MatterService;
