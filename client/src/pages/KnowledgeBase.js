import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import articles, { categories } from '../data/articles';
import { AnimatedSection } from '../components/ScrollAnimation';

const KnowledgeBase = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    let result = articles;

    if (activeCategory !== 'All') {
      result = result.filter(a => a.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(a =>
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    const counts = { All: articles.length };
    articles.forEach(a => {
      counts[a.category] = (counts[a.category] || 0) + 1;
    });
    return counts;
  }, []);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div className="container">
      <div className="knowledge-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <h3 className="sidebar-title">Categories</h3>
          <div className="sidebar-categories">
            {categories.map(cat => (
              <button
                key={cat}
                className={`sidebar-category ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
                <span className="count">{categoryCounts[cat] || 0}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main>
          <AnimatedSection animation="fade-up">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 20, marginBottom: 8 }}>
              <div>
                <h1 className="section-title" style={{ marginBottom: 8 }}>Knowledge Base</h1>
                <p className="section-subtitle">
                  {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
                  {activeCategory !== 'All' && ` in ${activeCategory}`}
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
              </div>
              <div className="search-container">
                <FiSearch className="search-icon" />
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search articles, topics, tags..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </AnimatedSection>

          <div className="articles-grid">
            {filteredArticles.map((article, i) => (
              <AnimatedSection key={article._id} animation="fade-up" delay={i * 80}>
                <Link to={`/article/${article.slug}`} className="article-card">
                  <div className="article-card-image-wrapper">
                    <img src={article.image} alt={article.title} className="article-card-image" />
                    <span className="article-card-category">{article.category}</span>
                  </div>
                  <div className="article-card-body">
                    <h3 className="article-card-title">{article.title}</h3>
                    <p className="article-card-summary">{article.summary}</p>
                    <div className="article-card-meta">
                      <div className="article-card-tags">
                        {article.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="article-tag">{tag}</span>
                        ))}
                      </div>
                      <span className="article-read-time">{article.readTime} min read</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-tertiary)' }}>
              <FiSearch style={{ fontSize: '3rem', marginBottom: 16 }} />
              <h3 style={{ color: 'var(--text-secondary)', marginBottom: 8 }}>No articles found</h3>
              <p>Try adjusting your search or category filter</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default KnowledgeBase;
