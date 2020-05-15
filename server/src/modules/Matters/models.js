const mongoose = require('mongoose');

const MatterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  matterType: {
    type: String,
    required: true,
  },
  matterReference: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    ref: 'User',
  },
}, {
  strict: false,
});

const Matter = mongoose.model('Matter', MatterSchema);

module.exports = {
  Matter,
};
