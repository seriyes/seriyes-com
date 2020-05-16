import Vue from 'vue';
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'http://localhost:4000/graphql',
});

// VueApollo (graphql implmentation) provider holds the apollo client instances
Vue.use(VueApollo);

export default new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $query: {
      fetchPolicy: 'cache-and-network',
      loadingKey: 'loading',
    },
  },
});
