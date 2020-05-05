const {
  User,
} = require('./models');

const resolvers = {
  Query: {
    user: async (root, data) => {
      const ret = await User.find({
        email: data.email,
      });
      return ret;
    },
  },
};

module.exports = resolvers;
