const {
  User,
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

  Mutation: {
    createUser: async (root, data) => {
      console.log('calling createUser');

      const ret = await User.create({
        email: data.email,
        username: data.username,
      });
        // .catch(err > console.log('err', err));

      console.log(ret);
      return ret;
    },
  },
};

module.exports = resolvers;
