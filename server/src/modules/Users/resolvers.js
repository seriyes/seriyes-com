const {
  NewNote,
} = require('./models');

const resolvers = {
  Query: {
    user: async (root, data) => {
      const ret = await NewNote.find({
        userId: '001',
      });

      return ret;
    },
  },
};

module.exports = resolvers;
