const {
  Note,
} = require('./models');
// const {
//   Note,
// } = require('../Users/models');

const resolvers = {
  Query: {
    notes: async (root, data) => {
      const ret = await Note.find({
        userId: '001',
      });

      return ret;
    },
  },
};

module.exports = resolvers;
