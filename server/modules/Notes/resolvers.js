const {
  Note,
} = require('./models');

const resolvers = {
  Query: {
    notes: async (root, data) => {
      const ret = await Note.find({
        userId: '001',
      });
      const [first] = ret;
      console.log(first.userId);

      return ret;
    },
  },
};

module.exports = resolvers;
