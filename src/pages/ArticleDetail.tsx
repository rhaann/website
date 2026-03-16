import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import articles from '../data/articles';

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-20 bg-pure-white min-h-screen">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.15em] uppercase text-navy-black/40 hover:text-sharp-orange transition-colors duration-300 mb-12"
          >
            <span>←</span>
            Back to Articles
          </Link>

          <div className="mb-10">
            <span className="text-sharp-orange text-xs font-medium tracking-[0.15em] uppercase block mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] font-extrabold text-navy-black mb-6">
              {article.title}
            </h1>
            <div className="text-navy-black/40 text-sm">
              <span className="font-medium text-navy-black/60">{article.author}</span>
              <span className="mx-2">·</span>
              {article.date}
            </div>
          </div>

          <div className="h-px bg-navy-black/10 mb-10" />

          <div className="space-y-6">
            {article.body.map((paragraph, idx) => (
              <p
                key={idx}
                className={`text-navy-black/60 leading-relaxed ${idx === 0 ? 'text-lg' : 'text-base'}`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="h-px bg-navy-black/10 mt-14 mb-10" />

          <div className="flex items-center justify-between">
            <div className="text-navy-black/40 text-sm">
              <span className="font-medium text-navy-black/60">{article.author}</span>
              <span className="mx-2">·</span>
              {article.date}
            </div>
            <span className="text-xs font-medium tracking-[0.1em] uppercase text-navy-black/50 border border-navy-black/15 rounded px-3 py-1">
              {article.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
