const { GraphQLModule } = require('@graphql-modules/core');
const NoteModule = require('./Notes/index');
const UserModule = require('./Users/index');
const FolderModule = require('./Folders/index');
const MatterModule = require('./Matters/index');

const AppModule = new GraphQLModule({
  typeDefs: [],
  resolvers: {},
  imports: [
    UserModule,
    NoteModule,
    FolderModule,
    MatterModule,
  ],
});

module.exports = AppModule;
