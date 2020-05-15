const {
  Matter,
} = require('./models');

const resolvers = {
  Query: {
    matters: async (root, data) => {
      const {
        userId,
      } = data;

      const matters = await Matter.find({
        userId,
      }).catch((err) => console.error(err));

      return matters;
    },
  },

  Mutation: {
    createMatter: async (root, data) => {
      const {
        title,
        matterType,
        matterReference,
        userId,
      } = data;

      const matter = new Matter({
        title,
        matterType,
        matterReference,
        userId,
      });

      const ret = await matter.save()
        .catch((err) => console.error(err));

      return ret;
    },
  },
};

module.exports = resolvers;
