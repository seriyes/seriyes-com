const {
  Note,
} = require('./models');

const resolvers = {
  Query: {
    notes: async (root, data) => {
      const ret = await Note.find();
      return ret;
    },
  },
};

module.exports = resolvers;
