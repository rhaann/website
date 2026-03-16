export interface CaseStudy {
  slug: string;
  num: string;
  industry: string;
  title: string;
  titleMultiline: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    slug: 'from-confusion-to-a-90-day-roadmap',
    num: '01',
    industry: 'Private Equity · Portfolio Co.',
    title: 'From Confusion to a 90-Day Roadmap',
    titleMultiline: 'From Confusion to\na 90-Day Roadmap',
    summary:
      'A PE-backed manufacturer had board pressure to show AI progress but no internal expertise to evaluate where to start.',
    challenge:
      'A PE-backed manufacturer faced mounting board pressure to demonstrate AI progress, but had no internal expertise to evaluate where to start or which investments would generate real returns.',
    approach:
      'We conducted a full AI Readiness Audit across their operations and data infrastructure, then led focused education sessions with their leadership team to align on realistic expectations. We delivered a prioritized 90-day roadmap grounded in their existing systems.',
    outcome:
      'The leadership team entered their next board meeting with a credible, data-backed AI strategy — and the internal confidence to own its execution without outside dependency.',
    tags: ['Audit', 'Roadmap'],
  },
  {
    slug: 'cutting-through-vendor-noise',
    num: '02',
    industry: 'Mid-Market · SaaS',
    title: 'Cutting Through Vendor Noise',
    titleMultiline: 'Cutting Through\nVendor Noise',
    summary:
      "A growing SaaS company had evaluated 6 AI vendors but couldn't determine which addressed their actual operational gaps.",
    challenge:
      "A growing SaaS company had evaluated 6 AI vendors over 4 months but couldn't determine which — if any — actually addressed their operational gaps. Each vendor promised transformative results, but none mapped to the company's real workflow bottlenecks.",
    approach:
      'We ran a structured AI Literacy program with their product and engineering leads, then performed an independent evaluation of each vendor against the company\'s actual data and processes. We cut through the marketing and gave them a clear "buy vs. build vs. skip" recommendation.',
    outcome:
      'They eliminated 4 vendors immediately, saving over $200K in projected annual spend, and moved forward with a focused pilot that delivered measurable efficiency gains within 60 days.',
    tags: ['Education', 'Advisory'],
  },
  {
    slug: 'portfolio-wide-ai-readiness',
    num: '03',
    industry: 'Venture Capital · Fund',
    title: 'Portfolio-Wide AI Readiness',
    titleMultiline: 'Portfolio-Wide AI\nReadiness',
    summary:
      'A VC firm needed a consistent framework to assess AI maturity across 12 portfolio companies ahead of their annual LP review.',
    challenge:
      'A VC firm needed a consistent framework to assess AI maturity across 12 portfolio companies ahead of their annual LP review. Each company was at a different stage, and there was no standardized way to compare readiness or prioritize support.',
    approach:
      'We designed a lightweight AI Readiness Audit framework tailored for portfolio-level assessment, then ran education sessions with each company\'s leadership to establish a shared vocabulary. The result was a scored maturity model with actionable next steps per company.',
    outcome:
      'The fund presented a clear, data-driven AI narrative to their LPs — demonstrating strategic oversight and positioning themselves as a value-add partner, not just a capital source.',
    tags: ['Audit', 'Education'],
  },
];

export default caseStudies;
