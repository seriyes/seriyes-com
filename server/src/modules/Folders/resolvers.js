const {
  Folder,
} = require('./models');

const resolvers = {
  Query: {
    folders: async (root, data) => {
      const {
        userId,
      } = data;

      const ret = await Folder.find({
        userId,
      }).catch((err) => console.error(err));

      return ret;
    },
  },

  Mutation: {
    createFolder: async (root, data) => {
      const {
        name,
        userId,
      } = data;

      const folder = new Folder({
        name,
        userId,
      });

      const ret = await folder.save()
        .catch((err) => console.error(err));

      return ret;
    },
  },
};

module.exports = resolvers;
