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
      title: 'Audit',
      description:"We start with your reality. We look across the company end to end to map the blueprint of you processes. We inventory data sources and pipelines, check quality and access, and trace how data flows from capture to consumption. We shadow key workflows to surface repetitive tasks, handoffs, and failure points. We quantify volumes, cycle times, and error rates, then agree on baselines. You’ll see where the data is strong, where it needs work, and which friction points are worth solving first. By the end, everyone shares the same picture of the current state and how success will be measured."    },
    {
      step: 2,
      title: 'Advisory',
      description:"Using the evidence from Audit, we turn findings into guidance your teams can execute. We prioritize opportunities by impact and feasibility, sequence the work, and outline a target architecture that fits your warehouse and tools. We provide decision frameworks and standards, review designs and prototypes, and support vendor evaluation and RFPs. We keep progress tied to the baselines established in Audit and maintain alignment across leaders and delivery teams. This phase is advisory only—your teams build; we ensure the plan stays clear, realistic, and on track."
    },
    {
      step: 3,
      title: 'AI Partner',
      description: "We become your AI department, focused on your company’s needs. From first pilot to scaled rollout, we design, develop, and deploy governed, production-ready agents and applications that fit your stack and daily workflows. We stand up a safe sandbox, connect to your data, and ship with observability, audit trails, performance budgets, and clear runbooks and training. We review results against the Audit baselines on a regular cadence, expand what works, tune what lags, and keep outcomes tied to the metrics that matter."
    }
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


