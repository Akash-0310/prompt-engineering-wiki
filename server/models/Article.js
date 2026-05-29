const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  summary: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String },
  tags: [String],
  readTime: { type: Number, default: 5 },
  featured: { type: Boolean, default: false },
}, { timestamps: true });

articleSchema.index({ title: 'text', content: 'text', tags: 'text' });

module.exports = mongoose.model('Article', articleSchema);
