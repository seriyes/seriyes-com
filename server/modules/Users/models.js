const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
}, {
  strict: false,
});

const User = mongoose.model('User', UserSchema);

const { NoteSchema } = require('../Notes/models');

const NewNoteSchema = NoteSchema.add({
  userId: {
    type: String,
  },
});

const NewNote = mongoose.model('NewNote', NewNoteSchema);

module.exports = {
  NewNote,
  User,
};
