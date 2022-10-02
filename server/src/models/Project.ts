import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  img: String,
  name: String,
  github: String,
  url: String,
  description: String,
  technologies: [String],
});

export default mongoose.model('Project', projectSchema);
