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
        name,
        fileType,
        fileReference,
        folderId,
        userId,
      } = data;

      const file = new File({
        name,
        fileType,
        fileReference,
        folderId,
        userId,
      });

      const ret = await file.save()
        .catch((err) => console.error(err));

      return ret;
    },
  },

  Folder: {
    files: async (folder) => {
      const files = await File.find({
        _id: {
          $in: folder.filesIds,
        },
      });
      return files;
    },
  },
};

module.exports = resolvers;
