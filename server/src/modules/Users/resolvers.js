const {
  NewNote,
  User,
} = require('./models');

const resolvers = {
  Query: {
    user: async (root, data) => {
      // const ret = await User.find({
      //   email: data.email,
      // });
      // return ret;
      console.log('sfsf');
      const ret = await NewNote.find({
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
