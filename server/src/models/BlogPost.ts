import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: String,
  tags: [String],
  timestamp: {
    type: Date,
    default: new Date(),
  },
  description: String,
});

export default mongoose.model('Post', PostSchema);
