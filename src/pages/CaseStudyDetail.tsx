import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import caseStudies from '../data/caseStudies';

const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-20 bg-pure-white min-h-screen">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.15em] uppercase text-navy-black/40 hover:text-sharp-orange transition-colors duration-300 mb-12"
          >
            <span>←</span>
            Back to Case Studies
          </Link>

          <div className="mb-12">
            <span className="text-navy-black/40 text-xs font-medium tracking-[0.15em] uppercase block mb-4">
              {study.industry}
            </span>
            <h1 className="text-4xl md:text-[3.25rem] md:leading-[1.15] font-extrabold text-navy-black">
              {study.title}
            </h1>
          </div>

          <div className="h-px bg-navy-black/10 mb-12" />

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16">
            <div>
              <span className="text-navy-black/40 text-xs font-medium tracking-[0.15em] uppercase block mb-1">
                The Challenge
              </span>
              <div className="h-px bg-sharp-orange/30 mb-6" />
              <p className="text-navy-black/60 text-base leading-relaxed">
                {study.challenge}
              </p>
            </div>
            <div>
              <span className="text-navy-black/40 text-xs font-medium tracking-[0.15em] uppercase block mb-1">
                Our Approach
              </span>
              <div className="h-px bg-sharp-orange/30 mb-6" />
              <p className="text-navy-black/60 text-base leading-relaxed">
                {study.approach}
              </p>
            </div>
          </div>

          <div className="bg-navy-black rounded-xl p-8 md:p-12 mb-12">
            <span className="text-sharp-orange text-xs font-medium tracking-[0.15em] uppercase block mb-5">
              The Outcome
            </span>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed">
              {study.outcome}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium tracking-[0.1em] uppercase text-navy-black/50 border border-navy-black/15 rounded px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
