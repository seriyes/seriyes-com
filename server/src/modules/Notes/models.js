const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  // userId: {
  //   type: String,
  // },
}, {
  strict: false,
});

// NoteSchema.add({
//   userId: {
//     type: String,
//   },
// });

const Note = mongoose.model('Note', NoteSchema);

module.exports = {
  Note,
  NoteSchema,
};
