const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fileType: {
    type: String,
    required: true,
  },
  fileReference: {
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

const File = mongoose.model('File', FileSchema);

module.exports = {
  File,
};
