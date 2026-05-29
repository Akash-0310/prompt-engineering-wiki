const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// Get all articles (with optional category filter)
router.get('/', async (req, res) => {
  try {
    const { category, featured, limit } = req.query;
    const filter = {};
    if (category) filter.category = category;
    if (featured) filter.featured = featured === 'true';

    let query = Article.find(filter).sort({ createdAt: -1 });
    if (limit) query = query.limit(parseInt(limit));

    const articles = await query;
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Search articles
router.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) return res.json([]);

    const articles = await Article.find({
      $or: [
        { title: { $regex: q, $options: 'i' } },
        { content: { $regex: q, $options: 'i' } },
        { tags: { $regex: q, $options: 'i' } },
        { summary: { $regex: q, $options: 'i' } },
      ]
    }).sort({ createdAt: -1 });

    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get categories
router.get('/categories', async (req, res) => {
  try {
    const categories = await Article.distinct('category');
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single article by slug
router.get('/:slug', async (req, res) => {
  try {
    const article = await Article.findOne({ slug: req.params.slug });
    if (!article) return res.status(404).json({ message: 'Article not found' });
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
