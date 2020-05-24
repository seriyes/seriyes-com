const mongoose = require('mongoose');
const { ObjectId } = require('mongoose').Schema.Types;

const FolderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    ref: 'User',
  },
  filesIds: [{
    type: ObjectId,
    ref: 'File',
  }],
}, {
  strict: false,
  timestamps: true,
});

const Folder = mongoose.model('Folder', FolderSchema);

module.exports = {
  Folder,
};
