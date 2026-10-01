import { Department } from '@/types';

export const DEPARTMENTS_DATA: Department[] = [
  {
    id: 'dept-01',
    slug: 'executive-leadership',
    number: '01',
    name: 'EXECUTIVE LEADERSHIP',
    headline: 'Architecting strategic vision, long-term stewardship, and institutional purpose.',
    philosophy: 'PRECISION IN MANDATE AND UNWAVERING ACCOUNTABILITY.',
    description: 'Executive Leadership establishes the governance architecture, ethical benchmarks, and strategic horizon for SHLAVEX. Operating with multi-decade discipline, leadership ensures human talent and computational infrastructure compound in unison.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
    leadership: [
      {
        name: 'LAVESH DOBRIYAL',
        position: 'FOUNDER',
        slug: 'lavesh-dobriyal',
      },
      {
        name: 'SHREYA',
        position: 'CO-FOUNDER',
        slug: 'shreya',
      },
      {
        name: 'AKKI RAJ',
        position: 'CHIEF EXECUTIVE OFFICER',
        slug: 'akki-raj',
      },
    ],
    responsibilities: [
      'Institutional strategy and organizational direction',
      'Capital structure governance and resource allocation',
      'Stewardship of human intellectual capital and key appointments',
      'Long-range technological and research mandate oversight',
    ],
    relatedAreas: [
      'Finance & Treasury',
      'Research & Strategy',
      'Risk Management',
    ],
    order: 1,
    featured: true,
  },
  {
    id: 'dept-02',
    slug: 'trading-quantitative-research',
    number: '02',
    name: 'TRADING & QUANTITATIVE RESEARCH',
    headline: 'Mathematical formulations transforming empirical market structures into actionable hypotheses.',
    philosophy: 'HYPOTHESIS-DRIVEN RIGOR OVER SPECULATIVE CONJECTURE.',
    description: 'The Quantitative Research division formulates predictive statistical models, stochastic simulations, and proprietary signal generation algorithms across global asset classes, underpinned by rigorous peer critique and scientific verification.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop',
    leadership: [
      {
        name: 'DR. MARCUS VANCE',
        position: 'HEAD OF QUANTITATIVE RESEARCH',
        slug: 'marcus-vance',
      },
    ],
    responsibilities: [
      'Empirical market hypothesis formulation and statistical modeling',
      'Cross-asset signal generation and factor analysis',
      'Systematic backtesting architecture and walk-forward verification',
      'Continuous quantitative methodology peer review',
    ],
    relatedAreas: [
      'Algorithmic Trading & HFT',
      'Risk Management',
      'Technology & Engineering',
    ],
    order: 2,
    featured: true,
  },
  {
    id: 'dept-03',
    slug: 'algorithmic-trading-hft',
    number: '03',
    name: 'ALGORITHMIC TRADING & HFT',
    headline: 'Microsecond order routing, execution optimization, and low-latency market infrastructure.',
    philosophy: 'DETERMINISTIC LATENCY AND MICROSTRUCTURE PRECISION.',
    description: 'Operating at the leading edge of execution technology, this unit engineers ultra-low-latency market connectivity, custom exchange gateways, and automated execution engines designed for resilience under extraordinary market volatility.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop',
    leadership: [
      {
        name: 'ELENA ROSTOVA',
        position: 'HEAD OF EXECUTION & HFT SYSTEMS',
        slug: 'elena-rostova',
      },
    ],
    responsibilities: [
      'Sub-millisecond direct market access and order routing algorithms',
      'Microstructure analysis and adverse selection mitigation',
      'Kernel-bypass network programming and hardware optimization',
      'Real-time automated circuit breakers and limit monitoring',
    ],
    relatedAreas: [
      'Technology & Engineering',
      'Trading & Quantitative Research',
      'Risk Management',
    ],
    order: 3,
    featured: true,
  },
  {
    id: 'dept-04',
    slug: 'technology-engineering',
    number: '04',
    name: 'TECHNOLOGY & ENGINEERING',
    headline: 'Distributed computational architecture engineered for absolute fault tolerance and scale.',
    philosophy: 'SIMPLICITY IN ARCHITECTURE, CERTAINTY IN PRODUCTION.',
    description: 'Engineering constructs the core data pipelines, simulation grids, high-performance compute clusters, and internal developer tooling that power the institutional platform across all SHLAVEX operations.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop',
    leadership: [
      {
        name: 'KAI CHEN',
        position: 'HEAD OF CORE SYSTEMS ENGINEERING',
        slug: 'kai-chen',
      },
    ],
    responsibilities: [
      'Petabyte-scale financial market data streaming and storage engines',
      'High-performance distributed compute clusters for parallel backtesting',
      'Zero-trust security perimeters and immutable audit infrastructures',
      'Continuous deployment pipelines and mission-critical telemetry',
    ],
    relatedAreas: [
      'Algorithmic Trading & HFT',
      'Operations',
      'Research & Strategy',
    ],
    order: 4,
    featured: true,
  },
  {
    id: 'dept-05',
    slug: 'risk-management',
    number: '05',
    name: 'RISK MANAGEMENT',
    headline: 'Continuous capital protection through probabilistic bounds and tail-risk containment.',
    philosophy: 'SURVIVAL IS PREREQUISITE TO PERFORMANCE.',
    description: 'Independent from day-to-day trading, Risk Management exercises real-time surveillance over capital commitments, factor exposures, scenario stresses, and counterparty limits to preserve institutional safety under extreme scenarios.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop',
    leadership: [
      {
        name: 'JULIAN KAUFMAN',
        position: 'CHIEF RISK OFFICER',
        slug: 'julian-kaufman',
      },
    ],
    responsibilities: [
      'Real-time automated portfolio risk factor monitoring and stress testing',
      'Extreme tail-event simulation and liquidity horizon planning',
      'Autonomous capital drawdown throttles and position caps',
      'Counterparty risk assessment and clearinghouse collateral management',
    ],
    relatedAreas: [
      'Executive Leadership',
      'Trading & Quantitative Research',
      'Finance & Treasury',
    ],
    order: 5,
    featured: true,
  },
  {
    id: 'dept-06',
    slug: 'finance-treasury',
    number: '06',
    name: 'FINANCE & TREASURY',
    headline: 'Disciplined capital stewardship, liquidity optimization, and financial reporting.',
    philosophy: 'LIQUIDITY DISCIPLINE AND ABSOLUTE BALANCE SHEET INTEGRITY.',
    description: 'Under executive governance, Finance & Treasury manages corporate liquidity, capital allocation across divisions, institutional banking relationships, tax compliance, and comprehensive financial control.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
    leadership: [
      {
        name: 'SHREYA',
        position: 'CO-FOUNDER',
        slug: 'shreya',
      },
    ],
    responsibilities: [
      'Treasury cash management and liquidity buffer preservation',
      'Corporate accounting, auditing, and multi-jurisdictional compliance',
      'Balance sheet optimization and financing facilities',
      'Financial performance metrics and stakeholder reporting',
    ],
    relatedAreas: [
      'Executive Leadership',
      'Risk Management',
      'Operations',
    ],
    order: 6,
    featured: true,
  },
  {
    id: 'dept-07',
    slug: 'research-strategy',
    number: '07',
    name: 'RESEARCH & STRATEGY',
    headline: 'Structural macroeconomic inquiry, technological horizon scanning, and strategic foresight.',
    philosophy: 'FIRST-PRINCIPLES DEDUCTION PRECEDING EXPANSION.',
    description: 'Research & Strategy investigates long-range technological transformations, geopolitical shifts, regulatory evolutions, and market market structural dynamics to position SHLAVEX ahead of generational inflection points.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    leadership: [
      {
        name: 'AURA LINDBERG',
        position: 'DIRECTOR OF STRATEGIC RESEARCH',
        slug: 'aura-lindberg',
      },
    ],
    responsibilities: [
      'Long-horizon structural industry research and technology assessments',
      'Cross-border regulatory analysis and geopolitical risk modeling',
      'Strategic partnership evaluation and strategic new initiative validation',
      'Publishing internal institutional monographs and whitepapers',
    ],
    relatedAreas: [
      'Executive Leadership',
      'Trading & Quantitative Research',
      'Marketing & Communications',
    ],
    order: 7,
    featured: false,
  },
  {
    id: 'dept-08',
    slug: 'operations',
    number: '08',
    name: 'OPERATIONS',
    headline: 'Flawless institutional execution, middle-office trade settlement, and logistical excellence.',
    philosophy: 'ZERO-TOLERANCE OPERATIONAL FRICTION.',
    description: 'Operations coordinates the continuous machinery of SHLAVEX across global time zones, overseeing trade reconciliation, venue connectivity verification, vendor governance, and physical facility operations.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
    leadership: [
      {
        name: 'DEVON MONROE',
        position: 'HEAD OF GLOBAL OPERATIONS',
        slug: 'devon-monroe',
      },
    ],
    responsibilities: [
      'Middle-office trade matching, reconciliation, and settlement workflows',
      'Vendor management, critical hardware procurement, and SLA monitoring',
      'Business continuity protocol execution and disaster recovery drills',
      'Global workplace infrastructure and physical security administration',
    ],
    relatedAreas: [
      'Finance & Treasury',
      'Technology & Engineering',
      'Executive Leadership',
    ],
    order: 8,
    featured: false,
  },
  {
    id: 'dept-09',
    slug: 'marketing-communications',
    number: '09',
    name: 'MARKETING & COMMUNICATIONS',
    headline: 'Guarding institutional reputation, curated dialogue, and brand restraint.',
    philosophy: 'PREMIUM BRAND INTEGRITY THROUGH CONFIDENT RESTRAINT.',
    description: 'Marketing & Communications protects and projects the SHLAVEX identity. With an emphasis on editorial clarity rather than promotional noise, the team curates all institutional publications, press relations, and executive presentations.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop',
    leadership: [
      {
        name: 'CAMILLE LAURENT',
        position: 'DIRECTOR OF GLOBAL COMMUNICATIONS',
        slug: 'camille-laurent',
      },
    ],
    responsibilities: [
      'Institutional identity governance and corporate communications',
      'Curated media relations and crisis communication preparedness',
      'Flagship editorial publications and intellectual property presentation',
      'Strategic stakeholder engagement and talent acquisition messaging',
    ],
    relatedAreas: [
      'Creative & Design',
      'Executive Leadership',
      'Research & Strategy',
    ],
    order: 9,
    featured: false,
  },
  {
    id: 'dept-10',
    slug: 'creative-design',
    number: '10',
    name: 'CREATIVE & DESIGN',
    headline: 'Translating institutional rigor into timeless, architectural digital craftsmanship.',
    philosophy: 'FORM FOLLOWS DISCIPLINE. CRAFTSMANSHIP IN EVERY PIXEL.',
    description: 'Creative & Design shapes every visual and tactile touchpoint of SHLAVEX. From bespoke typographic systems and digital flagship experiences to physical spatial design, the team manifests the brand aesthetic of restraint, precision, and confidence.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    leadership: [
      {
        name: 'ADRIAN VOGEL',
        position: 'CREATIVE DIRECTOR',
        slug: 'adrian-vogel',
      },
    ],
    responsibilities: [
      'SHLAVEX design system stewardship and typographic architecture',
      'Flagship web application interaction design and motion guidelines',
      'Editorial art direction and institutional visual assets',
      'Spatial design alignment for executive conference and research suites',
    ],
    relatedAreas: [
      'Marketing & Communications',
      'Technology & Engineering',
      'Executive Leadership',
    ],
    order: 10,
    featured: false,
  },
];

export function getDepartmentBySlug(slug: string): Department | undefined {
  return DEPARTMENTS_DATA.find((dept) => dept.slug === slug);
}

export function getAllDepartmentSlugs(): string[] {
  return DEPARTMENTS_DATA.map((dept) => dept.slug);
}
