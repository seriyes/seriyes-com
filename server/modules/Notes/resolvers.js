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
      console.log({ ret });
      let [first] = ret;
      // first = first.toJSON();
      console.log({ first });
      console.log({ title: first.title });
      console.log({ userId: first.userId });

      return ret;
    },
  },
};

module.exports = resolvers;
