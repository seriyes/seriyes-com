const {
  File,
} = require('./models');

const resolvers = {
  Query: {
    files: async (root, data) => {
      const {
        userId,
      } = data;

      const files = await File.find({
        userId,
      }).catch((err) => console.error(err));

      return files;
    },
  },

  Mutation: {
    createFile: async (root, data) => {
      const {
        title,
        fileType,
        fileReference,
        userId,
      } = data;

      const file = new File({
        title,
        fileType,
        fileReference,
        userId,
      });

      const ret = await file.save()
        .catch((err) => console.error(err));

      return ret;
    },
  },
};

module.exports = resolvers;
