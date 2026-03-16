import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../data/articles';

const ArticlesPage: React.FC = () => {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-20 bg-pure-white min-h-screen">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-sharp-orange text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
              Insights
            </span>
            <h1 className="text-4xl md:text-[3.25rem] md:leading-[1.15] font-extrabold text-navy-black mb-4">
              Articles
            </h1>
            <p className="text-navy-black/50 text-base md:text-lg max-w-2xl">
              Perspectives on AI strategy, enablement, and execution from the Actual Insight team.
            </p>
          </div>

          {featured && (
            <Link
              to={`/articles/${featured.slug}`}
              className="group grid grid-cols-1 md:grid-cols-2 bg-pure-white border border-navy-black/10 rounded-xl overflow-hidden mb-20 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-navy-black min-h-[280px] md:min-h-[400px] flex items-end p-8">
                <span className="text-sharp-orange text-xs font-medium tracking-[0.15em] uppercase">
                  Featured Article
                </span>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="text-sharp-orange text-xs font-medium tracking-[0.15em] uppercase mb-4 block">
                  {featured.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-black leading-tight mb-5 group-hover:text-sharp-orange transition-colors duration-300">
                  {featured.title}
                </h2>
                <p className="text-navy-black/50 text-base leading-relaxed mb-8">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="text-navy-black/40 text-sm">
                    <span className="font-medium text-navy-black/60">{featured.author}</span>
                    <span className="mx-2">·</span>
                    {featured.date}
                  </div>
                  <span className="text-sharp-orange text-sm font-medium tracking-[0.15em] uppercase flex items-center gap-2">
                    Read Article
                    <span className="text-base">→</span>
                  </span>
                </div>
              </div>
            </Link>
          )}

          <div className="mb-10">
            <span className="text-navy-black/40 text-xs font-medium tracking-[0.15em] uppercase block">
              All Articles
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {rest.map((article) => (
              <Link
                key={article.slug}
                to={`/articles/${article.slug}`}
                className="group flex flex-col"
              >
                <span className="text-navy-black/40 text-xs font-medium tracking-[0.15em] uppercase mb-3 block">
                  {article.category}
                </span>
                <h3 className="text-lg md:text-xl font-extrabold text-navy-black leading-tight mb-3 group-hover:text-sharp-orange transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-navy-black/50 text-sm leading-relaxed mb-5 flex-1">
                  {article.excerpt}
                </p>
                <div className="text-navy-black/40 text-sm mt-auto pt-4 border-t border-navy-black/10">
                  <span className="font-medium text-navy-black/60">{article.author}</span>
                  <span className="mx-2">·</span>
                  {article.date}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
