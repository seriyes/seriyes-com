const { GraphQLModule } = require('@graphql-modules/core');
const NoteModule = require('./Notes/index');
const UserModule = require('./Users/index');
const FolderModule = require('./Folders/index');
const FileModule = require('./Files/index');

const AppModule = new GraphQLModule({
  typeDefs: [],
  resolvers: {},
  imports: [
    UserModule,
    NoteModule,
    FolderModule,
    FileModule,
  ],
});

module.exports = AppModule;
