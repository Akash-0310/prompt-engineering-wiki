import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { FiClock, FiArrowLeft, FiTag } from 'react-icons/fi';
import articles from '../data/articles';
import { AnimatedSection } from '../components/ScrollAnimation';

const Article = () => {
  const { slug } = useParams();

  const article = useMemo(() => articles.find(a => a.slug === slug), [slug]);

  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return articles
      .filter(a => a.slug !== slug && a.category === article.category)
      .slice(0, 3);
  }, [article, slug]);

  if (!article) {
    return (
      <div className="container" style={{ paddingTop: 'calc(var(--nav-height) + 80px)', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Article Not Found</h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: 8, marginBottom: 24 }}>The article you're looking for doesn't exist.</p>
        <Link to="/knowledge-base" className="btn btn-primary">
          <FiArrowLeft /> Back to Knowledge Base
        </Link>
      </div>
    );
  }

  return (
    <div className="article-page">
      <div className="container">
        <AnimatedSection animation="fade-up">
          <Link to="/knowledge-base" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--primary)', fontWeight: 500, fontSize: '0.9rem', marginBottom: 32 }}>
            <FiArrowLeft /> Back to Knowledge Base
          </Link>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={100}>
          <div className="article-header">
            <span className="article-category-badge">{article.category}</span>
            <h1>{article.title}</h1>
            <div className="article-meta-info">
              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <FiClock /> {article.readTime} min read
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <FiTag /> {article.tags.join(', ')}
              </span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="scale-in" delay={200}>
          <img src={article.image} alt={article.title} className="article-hero-image" />
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={300}>
          <div className="article-content">
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>
        </AnimatedSection>

        {relatedArticles.length > 0 && (
          <div style={{ maxWidth: 780, margin: '60px auto 0' }}>
            <AnimatedSection animation="fade-up">
              <h2 className="section-title" style={{ fontSize: '1.5rem' }}>Related Articles</h2>
            </AnimatedSection>
            <div className="articles-grid" style={{ marginTop: 20 }}>
              {relatedArticles.map((a, i) => (
                <AnimatedSection key={a._id} animation="fade-up" delay={i * 100}>
                  <Link to={`/article/${a.slug}`} className="article-card">
                    <div className="article-card-image-wrapper">
                      <img src={a.image} alt={a.title} className="article-card-image" />
                      <span className="article-card-category">{a.category}</span>
                    </div>
                    <div className="article-card-body">
                      <h3 className="article-card-title">{a.title}</h3>
                      <p className="article-card-summary">{a.summary}</p>
                      <div className="article-card-meta">
                        <div className="article-card-tags">
                          {a.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="article-tag">{tag}</span>
                          ))}
                        </div>
                        <span className="article-read-time">{a.readTime} min read</span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Article;
