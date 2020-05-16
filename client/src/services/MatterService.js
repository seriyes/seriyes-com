import gql from 'graphql-tag';
import apollo from '@/apollo';

const services = {
  createMatter(args) {
    const CREATE_MATTER = gql`
        mutation createMater(
          $title: String!,
          $matterType: MATTER_TYPE,
          $reference: String!
          $userId: String!
        ) {
          createMater(
            workerId: $workerId,
            id: $id,
            to: $to,
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
