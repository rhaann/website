import React, { useState } from 'react';

interface AdvantageItem {
  step: number;
  title: string;
  description: string;
}

const OperationalAdvantage: React.FC = () => {
  const items: AdvantageItem[] = [
    {
      step: 1,
      title: 'AI Operating System',
      description:
        "We start by building your AI Operating System. This is the foundation for everything we create together. This personalized conversational interface connects with your existing systems, surfaces critical insights, and automates routine tasks to deliver immediate productivity gains. As we build new capabilities, they're seamlessly delivered through this unified platform that understands your business inside and out.",
    },
    {
      step: 2,
      title: 'Workflow Optimization',
      description:
        'We identify your biggest friction points and transform them into streamlined processes that save hours every day and reduce costly errors. Using data from your workflows, we gain insights that reveal optimization opportunities while giving your team immediate relief from repetitive tasks. Through this analysis, we create the foundation for reliable automation built on proven logic.',
    },
    {
      step: 3,
      title: 'Autonomous Agents',
      description:
        'Once workflows prove themselves through real-world performance, we transform them into AI agents that execute independently through your AI Operating System. Each agent is built on the business processes and insights uncovered during workflow optimization. This ensures reliable, accurate automation that delivers consistent results.',
    },
    {
      step: 4,
      title: 'AI–Native Organization',
      description:
        'As we deploy more AI agents, your organization transforms into a collaborative ecosystem. Your specialized agents work together seamlessly through your unified interface, creating organizational intelligence that lets you move faster, adapt quicker, and scale smarter than competitors still relying on manual processes and disconnected systems.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="operational-advantage" className="section-padding bg-grey-lighter/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1fr,2fr] gap-12 lg:gap-16 items-start">
          {/* Left Heading */}
          <div>
            <h2 className="heading-lg mb-4">Welcome to The Future of Operational Advantage</h2>
          </div>

          {/* Right Content with vertical steps and accordion */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-sky-blue/60" aria-hidden="true"></div>

            <ul className="space-y-8">
              {items.map((item, index) => (
                <li key={item.title} className="grid grid-cols-[48px,1fr] gap-6 items-start relative">
                  {/* Step badge */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-md border-2 border-sky-blue text-sky-blue font-semibold flex items-center justify-center bg-pure-white shadow-sm">
                      {item.step}
                    </div>
                  </div>

                  {/* Accordion Item */}
                  <div>
                    <button
                      onClick={() => handleToggle(index)}
                      aria-expanded={openIndex === index}
                      className="w-full text-left flex items-center justify-between group"
                    >
                      <span className="text-xl font-bold text-navy-black group-hover:text-navy-black/80">
                        {item.title}
                      </span>
                      <svg
                        className={`w-5 h-5 ml-4 text-navy-black/60 transition-transform duration-200 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {openIndex === index && (
                      <p className="mt-3 text-navy-black/70 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationalAdvantage;


