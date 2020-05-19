const mongoose = require('mongoose');

const FolderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    ref: 'User',
  },
}, {
  strict: false,
  timestamps: true,
});

const Folder = mongoose.model('Folder', FolderSchema);

module.exports = {
  Folder,
};
