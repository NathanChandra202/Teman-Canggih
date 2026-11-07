import {
  ServiceCapability,
  MethodologyStep,
  IndustrySector,
  PortfolioItem,
  TeamMember,
  PageDefinition,
} from '../types';

export const PAGES: PageDefinition[] = [
  { pageNumber: 1, pageCode: '01', title: 'Cover Page', shortTitle: 'Cover', category: 'Identity' },
  { pageNumber: 2, pageCode: '02', title: 'Opening Statement', shortTitle: 'Opening', category: 'Philosophy' },
  { pageNumber: 3, pageCode: '03', title: 'Company Overview', shortTitle: 'Overview', category: 'Profile' },
  { pageNumber: 4, pageCode: '04', title: 'Who We Are', shortTitle: 'Who We Are', category: 'Profile' },
  { pageNumber: 5, pageCode: '05', title: 'Our Philosophy', shortTitle: 'Philosophy', category: 'Foundations' },
  { pageNumber: 6, pageCode: '06', title: 'Vision, Mission & Values', shortTitle: 'Vision & Mission', category: 'Foundations' },
  { pageNumber: 7, pageCode: '07', title: 'Our Approach', shortTitle: 'Approach', category: 'Thinking' },
  { pageNumber: 8, pageCode: '08', title: 'Our Capabilities Overview', shortTitle: 'Capabilities Map', category: 'Capabilities' },
  { pageNumber: 9, pageCode: '09', title: 'System Development', shortTitle: 'System Dev', category: 'Practice 01' },
  { pageNumber: 10, pageCode: '10', title: 'Branding Development', shortTitle: 'Branding', category: 'Practice 02' },
  { pageNumber: 11, pageCode: '11', title: 'Cyber Analysis', shortTitle: 'Cyber Analysis', category: 'Practice 03' },
  { pageNumber: 12, pageCode: '12', title: 'Factory Consulting', shortTitle: 'Factory Consult', category: 'Practice 04' },
  { pageNumber: 13, pageCode: '13', title: 'Business Analysis', shortTitle: 'Business Analysis', category: 'Practice 05' },
  { pageNumber: 14, pageCode: '14', title: 'Our Methodology', shortTitle: 'Methodology', category: 'Process' },
  { pageNumber: 15, pageCode: '15', title: 'Industries We Serve', shortTitle: 'Industries', category: 'Market' },
  { pageNumber: 16, pageCode: '16', title: 'Why Teman Canggih', shortTitle: 'Why Choose Us', category: 'Value' },
  { pageNumber: 17, pageCode: '17', title: 'Technology & Tools', shortTitle: 'Tech Stack', category: 'Infrastructure' },
  { pageNumber: 18, pageCode: '18', title: 'Our Team & Leadership', shortTitle: 'Our Team', category: 'People' },
  { pageNumber: 19, pageCode: '19', title: 'Collaboration Model', shortTitle: 'Collaboration', category: 'Engagement' },
  { pageNumber: 20, pageCode: '20', title: 'Portfolio & Case Studies', shortTitle: 'Portfolio', category: 'Work' },
  { pageNumber: 21, pageCode: '21', title: 'Partnership & Contact', shortTitle: 'Contact', category: 'Action' },
  { pageNumber: 22, pageCode: '22', title: 'Closing Statement', shortTitle: 'Closing', category: 'Epilogue' },
];

export const COMPANY_INFO = {
  name: 'TEMAN CANGGIH',
  legalSuffix: 'Technology & Business Solutions',
  descriptor: 'Technology & Business Solutions Firm',
  tagline: 'Think Beyond. Build Better.',
  taglineSub: 'Ideas Are Everywhere. Meaningful Solutions Make the Difference.',
  phone: '089508437967',
  whatsappUrl: 'https://wa.me/6289508437967?text=Halo%20Teman%20Canggih%2C%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20solusi%20teknologi%20dan%20bisnis.',
  instagram: '@temancanggih_id',
  instagramUrl: 'https://instagram.com/temancanggih_id',
  email: 'contact@temancanggih.id',
  address: 'Jakarta / Bandung, Indonesia',
  documentCode: 'TC-CORP-PRF-2026',
  documentVersion: 'Version 2.4 — Swiss Editorial Edition',
  teamSize: '7–10 active multidisciplinary members',
};

export const CORE_VALUES = [
  {
    name: 'Integrity',
    description: 'Acting responsibly, transparently, and ethically in every engagement, ensuring dependable partnerships.',
    metric: '100% Client Transparency',
  },
  {
    name: 'Innovation',
    description: 'Exploring better ways to solve problems by testing new paradigms, technologies, and creative frameworks.',
    metric: 'Forward-Looking Thinking',
  },
  {
    name: 'Collaboration',
    description: 'Combining different perspectives, multidisciplinary talents, and client domain expertise into cohesive power.',
    metric: 'Cross-Disciplinary Synergy',
  },
  {
    name: 'Excellence',
    description: 'Maintaining uncompromising quality, technical precision, and meticulous attention to detail in every deliverable.',
    metric: 'Zero-Compromise Craft',
  },
  {
    name: 'Adaptability',
    description: 'Responding swiftly to changing market needs, client resources, and emerging technological shifts.',
    metric: 'Agile Context Fit',
  },
  {
    name: 'Continuous Learning',
    description: 'Constantly refining knowledge, upgrading technical masteries, and expanding industrial capabilities.',
    metric: 'Ever-Evolving Knowledge',
  },
];

export const CAPABILITIES: ServiceCapability[] = [
  {
    id: 'system-development',
    number: '01',
    title: 'System Development',
    subtitle: 'Technology & Engineering',
    category: 'Engineering & Software',
    tagline: 'Building robust, scalable, and intuitive digital ecosystems tailored for modern operations.',
    overview: 'Developing digital systems, software, applications, and infrastructure to support business operations and digital transformation.',
    detailedScope: [
      'Custom Web & Mobile Application Engineering',
      'Enterprise Resource Planning (ERP) & Internal Tools',
      'API Design, System Integration & Database Architecture',
      'Cloud Infrastructure Setup & DevOps Automation',
      'Automated Workflow & Data Pipeline Development'
    ],
    deliverables: [
      'Production-Ready Scalable Codebases',
      'Comprehensive Technical Architecture Documentation',
      'High-Availability Cloud Deployment & Monitoring',
      'User Acceptance Testing (UAT) & Security Audits'
    ],
    toolsAndTech: ['React / Next.js', 'TypeScript', 'Node.js / Python / Go', 'PostgreSQL / Redis', 'AWS / Cloudflare', 'Docker / CI-CD'],
    businessValue: 'Automates manual operational friction, improves data accuracy, and provides scalable foundations for rapid business expansion.',
    iconName: 'Code2',
    phase2AssetPrompt: 'ARCHITECTURAL SCHEMATIC // FULL-STACK SYSTEM TOPOLOGY & CLOUD INFRASTRUCTURE (16:9)',
  },
  {
    id: 'branding-development',
    number: '02',
    title: 'Branding Development',
    subtitle: 'Creative & Brand Strategy',
    category: 'Creative & Brand Strategy',
    tagline: 'Translating institutional values into cohesive, memorable, and market-commanding identities.',
    overview: 'Building brand identities, positioning, and communication systems that help businesses establish a consistent and recognizable presence.',
    detailedScope: [
      'Strategic Brand Positioning & Market Differentiation',
      'Visual Identity Systems (Logo, Color, Typography, Grid)',
      'Design Guidelines & Multi-Platform Brand Manuals',
      'Corporate Collaterals, Editorial Documents & Pitch Kits',
      'Digital Touchpoint Design & Interactive UI/UX Direction'
    ],
    deliverables: [
      'Comprehensive Brand Guideline Book (Design Tokens & Rules)',
      'Master Vector Identity Assets & Typography Hierarchy',
      'Digital & Print Collateral Templates',
      'Tone of Voice & Messaging Framework Document'
    ],
    toolsAndTech: ['Figma', 'Adobe Creative Suite', 'Typography Systems', 'Design Tokens', 'Motion Graphics', 'Editorial Grids'],
    businessValue: 'Transforms ambiguous offerings into premium, trusted market leaders that command higher client trust and commercial pricing power.',
    iconName: 'Palette',
    phase2AssetPrompt: 'EDITORIAL DESIGN SPREAD // MINIMALIST BRAND IDENTITY SYSTEM & TYPOGRAPHIC POSTERS (16:9)',
  },
  {
    id: 'cyber-analysis',
    number: '03',
    title: 'Cyber Analysis',
    subtitle: 'Cybersecurity & Intelligence',
    category: 'Security & Risk Intelligence',
    tagline: 'Protecting digital assets through rigorous vulnerability assessment and defensive architecture.',
    overview: 'Evaluating digital environments, identifying potential security risks, and providing actionable recommendations to improve organizational security posture.',
    detailedScope: [
      'Vulnerability Assessment & Penetration Testing (VAPT)',
      'Web Application & Network Infrastructure Security Audit',
      'Data Privacy, Threat Modeling & Access Control Reviews',
      'Defensive Hardening & Security Architecture Guidance',
      'Incident Response Protocols & Compliance Preparation'
    ],
    deliverables: [
      'Executive Security Risk Matrix & Vulnerability Scoring',
      'Technical Remediation Playbook with Prioritized Fixes',
      'Network Surface Map & Penetration Test Report',
      'Employee Cybersecurity Awareness Checklist'
    ],
    toolsAndTech: ['Kali Linux', 'Burp Suite Pro', 'Wireshark / Nmap', 'OWASP Top 10 Framework', 'Cloudflare WAF', 'Sentinel SIEM'],
    businessValue: 'Preempts costly data breaches, safeguards institutional reputation, and ensures compliance with enterprise procurement security standards.',
    iconName: 'ShieldCheck',
    phase2AssetPrompt: 'CYBER OPERATIONS MONITORING // THREAT INTELLIGENCE & NETWORK SECURITY MATRIX (16:9)',
  },
  {
    id: 'factory-consulting',
    number: '04',
    title: 'Factory Consulting',
    subtitle: 'Industrial & Operations',
    category: 'Operations & Smart Factory',
    tagline: 'Bridging physical manufacturing floors with real-time digital intelligence and lean methodology.',
    overview: 'Analyzing industrial workflows and operational processes to identify opportunities for efficiency, improvement, and digitalization.',
    detailedScope: [
      'Shop Floor Workflow Auditing & Bottleneck Identification',
      'Lean Manufacturing & 5S Operational Optimization',
      'IoT Sensor Telemetry, Line Automation & OEE Monitoring',
      'Preventive Maintenance Scheduling & Inventory Flow Design',
      'Industrial Digital Transformation Roadmap'
    ],
    deliverables: [
      'Value Stream Map (Current vs Future State)',
      'Operational Efficiency Blueprint & Bottleneck Diagnostic',
      'Factory IoT Telemetry Architecture Plan',
      'Standard Operating Procedure (SOP) Digitalization Package'
    ],
    toolsAndTech: ['Lean Six Sigma', 'OEE Tracking Frameworks', 'Industrial IoT / MQTT', 'SCADA / PLC Interfaces', 'ERP Production Modules'],
    businessValue: 'Reduces scrap rates, minimizes production downtime, maximizes machine yield, and accelerates delivery cycle times.',
    iconName: 'Factory',
    phase2AssetPrompt: 'INDUSTRIAL AUTOMATION FLOOR // PRECISION MACHINERY & PRODUCTION LINE TELEMETRY (16:9)',
  },
  {
    id: 'business-analysis',
    number: '05',
    title: 'Business Analysis',
    subtitle: 'Business & Strategy',
    category: 'Strategy & Commercial Advisory',
    tagline: 'Illuminating strategic pathways with data-driven research, financial feasibility, and commercial models.',
    overview: 'Understanding business requirements, evaluating processes, researching opportunities, and developing strategic recommendations to support informed decisions.',
    detailedScope: [
      'Market Feasibility Studies & Competitive Intelligence',
      'Business Process Re-engineering (BPR)',
      'Financial Modeling, Unit Economics & ROI Projections',
      'Commercial Go-To-Market (GTM) Strategy',
      'Institutional Pitch Deck Structuring & Proposal Modeling'
    ],
    deliverables: [
      'Comprehensive Market & Competitor Intelligence Dossier',
      'Business Architecture & Process Flow Diagrams',
      'Unit Economics & Pro-Forma Financial Projection Sheets',
      'Strategic Decision Matrix for Leadership Stakeholders'
    ],
    toolsAndTech: ['BPMN 2.0', 'Financial Projections Modeling', 'Tableau / PowerBI', 'TAM-SAM-SOM Framework', 'Porter Five Forces'],
    businessValue: 'Eliminates costly guesswork before capital deployment, aligns internal stakeholders, and unlocks sustainable commercial revenue streams.',
    iconName: 'BarChart3',
    phase2AssetPrompt: 'DATA ANALYTICS LAB // STRATEGIC DECISION-MAKING & MARKET FEASIBILITY VISUALIZATIONS (16:9)',
  },
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    number: '01',
    phase: 'Phase 01',
    title: 'Discover',
    description: "Deep immersion into the client's core objectives, organizational context, and existing friction points.",
    activities: [
      'Stakeholder In-Depth Discovery Interviews',
      'Current-State Workflow & Asset Mapping',
      'Pain Point Categorization & Goal Calibration'
    ],
    outputs: ['Discovery Dossier', 'Scope Charter', 'Success Metrics Alignment'],
    estimatedTimeline: 'Week 1 — Alignment',
  },
  {
    number: '02',
    phase: 'Phase 02',
    title: 'Analyze',
    description: 'Rigorous analytical dissection of technical, operational, and commercial conditions.',
    activities: [
      'System Architecture & Codebase Review',
      'Operational Bottleneck & Vulnerability Audits',
      'Market & Competitive Landscape Benchmarking'
    ],
    outputs: ['Gap Analysis Report', 'Technical Risk Matrix', 'Opportunity Register'],
    estimatedTimeline: 'Week 2 — Diagnostic',
  },
  {
    number: '03',
    phase: 'Phase 03',
    title: 'Strategize',
    description: 'Synthesizing insights into an actionable, tailored blueprint and milestone roadmap.',
    activities: [
      'Solution Architecture & Prototype Framing',
      'Implementation Roadmap & Resource Allocation',
      'Risk Mitigation & Change Management Planning'
    ],
    outputs: ['Master Execution Blueprint', 'Sprint Breakdown', 'Technology Selection Matrix'],
    estimatedTimeline: 'Week 3 — Strategic Blueprint',
  },
  {
    number: '04',
    phase: 'Phase 04',
    title: 'Develop',
    description: 'Disciplined technical execution, creative synthesis, and agile development cycles.',
    activities: [
      'Sprint-Based Agile Engineering & Design',
      'Continuous Integration, Review & Refinement',
      'Multi-Disciplinary Quality Assurance'
    ],
    outputs: ['Production Milestones', 'Staging Deployments', 'Bi-Weekly Progress Demos'],
    estimatedTimeline: 'Weeks 4–8+ — Active Sprint Execution',
  },
  {
    number: '05',
    phase: 'Phase 05',
    title: 'Deliver',
    description: 'Meticulous testing, client validation, comprehensive handover, and team enablement.',
    activities: [
      'User Acceptance Testing (UAT) & Stress Testing',
      'Institutional Training & Documentation Handover',
      'Production Go-Live & Infrastructure Cutover'
    ],
    outputs: ['Final Production Assets', 'System Manuals & SOPs', 'Formal Sign-off Protocols'],
    estimatedTimeline: 'Launch Week — Seamless Handover',
  },
  {
    number: '06',
    phase: 'Phase 06',
    title: 'Improve',
    description: 'Post-delivery telemetry, performance monitoring, and continuous optimization cycles.',
    activities: [
      'Post-Launch Telemetry & Performance Audits',
      'User Feedback Collection & Friction Triage',
      'Iterative Feature Enhancements & Scale Strategy'
    ],
    outputs: ['Performance Review Report', 'Maintenance Roadmap', 'Future Phase Scoping'],
    estimatedTimeline: 'Ongoing — Long-term Partnership',
  },
];

export const INDUSTRIES: IndustrySector[] = [
  {
    id: 'sme',
    name: 'Small & Medium Enterprises',
    code: 'IND-01',
    description: 'Growing commercial businesses needing scalable systems, distinct branding, and automated digital backbones.',
    keyChallenges: ['Resource constraints', 'Manual repetitive operations', 'Weak brand differentiation in saturated markets'],
    tcSolutions: ['Rapid custom CRM/ERP integration', 'High-impact identity systems', 'Cost-effective automation workflows'],
    sampleUseCases: 'Custom POS/order management system with synchronized inventory across 5 branches.',
    icon: 'Store',
  },
  {
    id: 'corporate',
    name: 'Corporate & Commercial',
    code: 'IND-02',
    description: 'Established enterprises requiring robust governance, multi-tier system development, and cyber risk auditing.',
    keyChallenges: ['Legacy infrastructure friction', 'Compliance & security vulnerabilities', 'Complex stakeholder coordination'],
    tcSolutions: ['Enterprise microservice modernization', 'Penetration testing & SecOps hardening', 'B2B strategic positioning'],
    sampleUseCases: 'Comprehensive web portal redesign + OWASP Top 10 security audit for financial services firm.',
    icon: 'Building2',
  },
  {
    id: 'education',
    name: 'Education & Institutions',
    code: 'IND-03',
    description: 'Schools, universities, and public institutions seeking modern digital portals and structured operational workflows.',
    keyChallenges: ['Fragmented student/faculty data', 'Outdated public-facing websites', 'Lack of unified institutional communication'],
    tcSolutions: ['Integrated academic information systems', 'Modern institutional portals', 'Digital governance consulting'],
    sampleUseCases: 'Unified student admissions portal with real-time payment gateway and institutional dashboard.',
    icon: 'GraduationCap',
  },
  {
    id: 'industrial',
    name: 'Manufacturing & Industrial',
    code: 'IND-04',
    description: 'Production facilities, fabrication plants, and logistics operators striving for lean operations and shop-floor IoT.',
    keyChallenges: ['Unplanned machine downtime', 'Paper-based shop floor tracking', 'Opaque inventory and yield leaks'],
    tcSolutions: ['Shop floor telemetry & OEE tracking', 'Lean 5S workflow consulting', 'Industrial IoT integration'],
    sampleUseCases: 'Real-time production cycle monitoring system cutting machine downtime by 24%.',
    icon: 'Cpu',
  },
  {
    id: 'technology',
    name: 'Technology & Digital Ventures',
    code: 'IND-05',
    description: 'Digital startups, software companies, and venture initiatives scaling their product engineering and market strategy.',
    keyChallenges: ['Slow engineering velocity', 'Product-market fit calibration', 'Security compliance before funding rounds'],
    tcSolutions: ['Fractional CTO & technical architecture', 'Full-stack MVP development', 'Strategic business analysis'],
    sampleUseCases: 'Full-stack SaaS platform architecture build-out and technical investor deck preparation.',
    icon: 'Globe',
  },
  {
    id: 'specialized',
    name: 'Institutional Partnerships',
    code: 'IND-06',
    description: 'Foundations, government agencies, and research consortia driving impactful regional and community programs.',
    keyChallenges: ['Multi-stakeholder alignment', 'Public transparency needs', 'High documentation and audit standards'],
    tcSolutions: ['Interactive public reporting portals', 'Impact measurement frameworks', 'Secure research data platforms'],
    sampleUseCases: 'Bilingual community initiative portal with live data visualization of field milestones.',
    icon: 'Network',
  },
];

export const WHY_TEMAN_CANGGIH = [
  {
    number: '01',
    title: 'A Multidisciplinary Perspective',
    tagline: 'Breaking Down Silos',
    summary: 'We connect different areas of expertise to approach challenges from multiple perspectives.',
    description: 'Unlike pure software houses that neglect brand resonance, or creative agencies that ignore infrastructure security, Teman Canggih unites engineering, design, cyber defense, industrial ops, and business strategy under one disciplined roof.',
    highlightBadge: '5 Integrated Disciplines',
  },
  {
    number: '02',
    title: 'Problem-Oriented Thinking',
    tagline: 'Understanding Precedes Building',
    summary: 'We prioritize understanding the underlying problem before determining the solution.',
    description: 'We reject the urge to sell pre-packaged toolkits. Our team investigates root causes, operational bottlenecks, and true unit economics before recommending a single line of code or design layout.',
    highlightBadge: 'Root-Cause First',
  },
  {
    number: '03',
    title: 'Collaborative Execution',
    tagline: 'High-Touch Transparency',
    summary: 'We encourage communication and collaboration throughout project development.',
    description: 'Clients are never kept in the dark behind opaque milestone walls. We operate as an extension of your internal team with bi-weekly sprint demos, shared tracking dashboards, and proactive check-ins.',
    highlightBadge: 'No Black-Box Delivery',
  },
  {
    number: '04',
    title: 'Adaptive Solutions',
    tagline: 'Contextual Pragmatism',
    summary: 'We recognize that every organization has different needs, resources, and objectives.',
    description: 'Whether you are an ambitious SME requiring a lean MVP or an established corporate needing enterprise-grade compliance, we calibrate architecture, timelines, and budgets precisely to your commercial reality.',
    highlightBadge: 'Right-Sized Architecture',
  },
];

export const TECH_STACK = {
  softwareEngineering: [
    { name: 'React / Next.js', role: 'Modern Frontend & SSR' },
    { name: 'TypeScript', role: 'Type-Safe Architecture' },
    { name: 'Node.js & Go', role: 'High-Concurrency Backends' },
    { name: 'Python', role: 'Data Pipelines & Automation' },
    { name: 'PostgreSQL & Redis', role: 'Relational DB & Caching' },
    { name: 'Docker & Kubernetes', role: 'Container Orchestration' },
  ],
  cyberDefense: [
    { name: 'Kali Linux Suite', role: 'Penetration Testing Environment' },
    { name: 'Burp Suite Professional', role: 'Web Security & API Auditing' },
    { name: 'Wireshark & Nmap', role: 'Packet Analysis & Network Scanning' },
    { name: 'Cloudflare Zero Trust', role: 'Edge Defense & WAF Protection' },
    { name: 'OWASP ZAP', role: 'Automated Vulnerability Probing' },
  ],
  industrialAndOperations: [
    { name: 'Lean Six Sigma Framework', role: 'Waste Minimization & Yield' },
    { name: 'MQTT & OPC-UA', role: 'Industrial IoT Protocol Gateways' },
    { name: 'OEE Telemetry Engines', role: 'Real-Time Line Efficiency' },
    { name: 'BPMN 2.0 Process Tooling', role: 'Standardized Workflow Modeling' },
  ],
  designAndStrategy: [
    { name: 'Figma & FigJam', role: 'Collaborative Design Systems' },
    { name: 'Adobe Creative Cloud', role: 'Master Vector & Motion Assets' },
    { name: 'Tableau & PowerBI', role: 'Executive Intelligence Dashboards' },
    { name: 'Swiss Modular Grid', role: 'Harmonic Visual Typography' },
  ],
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Muhammad Syafiq',
    role: 'CEO & Founder',
    department: 'Executive Leadership & Strategy',
    bio: 'Leads the overarching strategic vision, client partnerships, and multidisciplinary alignment across all Teman Canggih engagements.',
    responsibilities: [
      'Strategic vision and organizational governance',
      'High-level client advisory and institutional partnerships',
      'Resource orchestration across all practice areas'
    ],
    specialties: ['Business Strategy', 'Executive Advisory', 'Multidisciplinary Leadership'],
    phase2AssetPrompt: 'EXECUTIVE PORTRAIT // MUHAMMAD SYAFIQ — ARCHITECTURAL BLACK & WHITE MINIMALIST LIGHTING',
  },
  {
    name: 'Nathan Chandra',
    role: 'Co-Founder, COO & Project Manager',
    department: 'Operations & Project Governance',
    bio: 'Oversees operational rigor, sprint management, quality assurance, and seamless delivery timelines across all client projects.',
    responsibilities: [
      'Operational roadmap and sprint delivery governance',
      'Client relationship and stakeholder communication',
      'Cross-functional team alignment and project execution'
    ],
    specialties: ['Agile Project Governance', 'Operations Management', 'Client Engagement'],
    phase2AssetPrompt: 'EXECUTIVE PORTRAIT // NATHAN CHANDRA — ARCHITECTURAL STUDIO PORTRAIT',
  },
  {
    name: 'Daffa Taufiq',
    role: 'CTO',
    department: 'Technology & System Architecture',
    bio: 'Directs technical architecture, software engineering standards, cloud infrastructure, and cybersecurity posture.',
    responsibilities: [
      'System design, cloud infrastructure, and technical oversight',
      'Engineering quality control and code review standards',
      'R&D on emerging technologies and security frameworks'
    ],
    specialties: ['Cloud Infrastructure', 'System Architecture', 'Full-Stack Engineering'],
    phase2AssetPrompt: 'EXECUTIVE PORTRAIT // DAFFA TAUFIQ — MINIMALIST ARCHITECTURAL PORTRAIT',
  },
  {
    name: 'Multidisciplinary Core Pool',
    role: 'Specialist Engineers, Designers & Analysts',
    department: 'Execution & Domain Specialists',
    bio: 'Our team includes 7–10 active members with specialized domain expertise spanning UI/UX design, cyber penetration testing, industrial IoT, and financial modeling.',
    responsibilities: [
      'Frontend and backend sprint engineering',
      'Penetration testing and vulnerability auditing',
      'Visual identity creation and brand asset production',
      'Operational workflow modeling and financial feasibility'
    ],
    specialties: ['Full-Stack Dev', 'Cyber Intelligence', 'Brand Design', 'Industrial Ops', 'Business Analysis'],
    phase2AssetPrompt: 'TEAM IN ACTION // MULTIDISCIPLINARY WORKSHOP & CODE REVIEW SESSION (16:9)',
  },
];

export const COLLABORATION_MODELS = [
  {
    id: 'project-based',
    code: 'MODEL-01',
    name: 'Project-Based Engagement',
    badge: 'Fixed Scope & Deliverable',
    summary: 'Best for well-defined initiatives with clear milestones and defined end-state deliverables.',
    features: [
      'Precise milestone timeline and delivery budget',
      'Dedicated project manager and sprint cadence',
      'Fixed deliverables with comprehensive documentation',
      'Formal UAT warranty and post-launch handover'
    ],
    recommendedFor: 'Custom application builds, complete brand identity overhauls, or comprehensive cyber audits.',
  },
  {
    id: 'consulting-advisory',
    code: 'MODEL-02',
    name: 'Consultation & Diagnostic',
    badge: 'Strategic & Analytical',
    summary: 'Best for organizations seeking expert evaluation, diagnostic audits, and strategic roadmaps.',
    features: [
      'Deep-dive institutional audits and gap analysis',
      'Executive findings presentation and risk register',
      'Actionable step-by-step remediation blueprints',
      'Flexible hourly or retainer advisory sessions'
    ],
    recommendedFor: 'Factory floor workflow evaluations, cybersecurity posture assessments, and market feasibility studies.',
  },
  {
    id: 'strategic-retainer',
    code: 'MODEL-03',
    name: 'Strategic Retainer / Tech Partner',
    badge: 'Long-Term Collaboration',
    summary: 'Best for companies requiring ongoing multidisciplinary support without hiring full internal teams.',
    features: [
      'Guaranteed monthly dedicated engineering/design hours',
      'Priority sprint queue and rapid incident response',
      'Continuous feature development and security monitoring',
      'Quarterly strategic reviews with leadership'
    ],
    recommendedFor: 'Growing SMEs, funded digital startups, or organizations undergoing multi-stage digitalization.',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'case-01',
    title: 'Enterprise Internal Logistics & Inventory ERP',
    clientCategory: 'Corporate & Distribution',
    serviceId: 'system-development',
    tagline: 'Modernizing multi-warehouse inventory tracking with real-time sync.',
    background: 'A growing distribution company struggled with paper-based warehouse logging, causing stock discrepancies and order delays.',
    challenge: 'High latency between physical stock movement and ERP records, leading to a 12% order fulfillment error rate.',
    solution: 'Designed and deployed a responsive cloud ERP application with barcode scanning, automated re-order triggers, and multi-warehouse role-based access.',
    results: [
      'Eliminated 94% of inventory discrepancies within 60 days',
      'Reduced average order packing time from 35 mins to 11 mins',
      'Full real-time visibility across 3 regional distribution hubs'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
    phase2AssetPrompt: 'CASE STUDY SCREENSHOT // ENTERPRISE ERP DASHBOARD & BARCODE SCANNER INTERFACE (16:9)',
  },
  {
    id: 'case-02',
    title: 'Comprehensive B2B Identity & Pitch Architecture',
    clientCategory: 'Commercial & Services',
    serviceId: 'branding-development',
    tagline: 'Transforming an engineering supplier into a high-trust institutional partner.',
    background: 'An established industrial engineering supplier sought to expand from sub-contracting into direct Tier-1 corporate procurement contracts.',
    challenge: 'Their existing visual collateral was outdated, fragmented, and failed to communicate their technical caliber to corporate procurement committees.',
    solution: 'Developed a comprehensive Swiss-inspired visual identity system, pitch deck framework, bilingual company profile, and modular stationery toolkit.',
    results: [
      'Successfully passed vendor onboarding audits for 4 major corporate clients',
      'Shortened presentation pitch cycle by 40% with clear modular capability sheets',
      'Established unified brand voice across digital and print collateral'
    ],
    technologies: ['Figma', 'Adobe InDesign', 'Custom Typography System', 'Design Tokens'],
    phase2AssetPrompt: 'BRAND SHOWCASE // MODULAR IDENTITY BOOK, STATIONERY SYSTEM & TYPOGRAPHIC COLLATERAL (16:9)',
  },
  {
    id: 'case-03',
    title: 'Infrastructure Vulnerability Assessment & Hardening',
    clientCategory: 'Technology & SaaS',
    serviceId: 'cyber-analysis',
    tagline: 'Proactive vulnerability discovery and defense posture remediation.',
    background: 'A digital platform handling customer transactions needed to pass rigorous third-party security audits before signing an enterprise banking partner.',
    challenge: 'Unknown attack surface across legacy API endpoints and outdated server configuration without centralized audit logging.',
    solution: 'Conducted black-box and grey-box penetration testing, OWASP Top 10 web application security audit, and assisted the internal engineering team with code-level remediation.',
    results: [
      'Identified and remediated 3 critical and 7 medium vulnerabilities prior to public audit',
      'Configured Cloudflare Zero Trust and strict WAF rate limiting',
      'Achieved 100% compliance pass on external enterprise security audit'
    ],
    technologies: ['Kali Linux', 'Burp Suite Pro', 'Nmap', 'Cloudflare WAF', 'OWASP Standards'],
    phase2AssetPrompt: 'SECURITY REPORT // VULNERABILITY MATRIX & CLOUDFLARE WAF DEFENSE TOPOLOGY (16:9)',
  },
  {
    id: 'case-04',
    title: 'Industrial Assembly Line Bottleneck & OEE Diagnostic',
    clientCategory: 'Manufacturing & Industrial',
    serviceId: 'factory-consulting',
    tagline: 'Unlocking hidden production capacity through lean auditing.',
    background: 'A regional plastic component manufacturer was operating at high overtime costs while failing to meet monthly production quotas.',
    challenge: 'Lack of timestamped machine telemetry made it difficult to determine whether delays were caused by material starvation, operator fatigue, or mechanical micro-stops.',
    solution: 'Performed on-site Value Stream Mapping, installed temporary telemetry sensors at critical line stations, and reorganized tooling layout based on 5S principles.',
    results: [
      'Boosted Overall Equipment Effectiveness (OEE) by 18.5%',
      'Reduced operator transit waste by 32% via ergonomic tooling reorganization',
      'Saved approximately $4,200/month in avoidable overtime expenses'
    ],
    technologies: ['Lean Six Sigma', 'Value Stream Mapping', 'OEE Framework', 'BPMN 2.0'],
    phase2AssetPrompt: 'INDUSTRIAL DIAGNOSTIC // VALUE STREAM MAP & FACTORY FLOOR HEATMAP VISUALIZATION (16:9)',
  },
  {
    id: 'case-05',
    title: 'Commercial Feasibility & Go-To-Market Modeling',
    clientCategory: 'Business & Strategy',
    serviceId: 'business-analysis',
    tagline: 'Data-driven viability analysis for a new regional B2B logistics venture.',
    background: 'Founders sought external analytical validation and financial modeling before committing seed capital to a temperature-controlled logistics venture.',
    challenge: 'Unclear price elasticity among prospective cold-chain clients and ambiguous capital expenditure payoff horizons.',
    solution: 'Conducted exhaustive market demand research across 40+ prospective B2B clients, built dynamic unit economics sensitivity models, and drafted institutional investor materials.',
    results: [
      'Determined optimal pricing tiers based on fleet utilization break-even models',
      'Identified high-margin pharmaceutical niche overlooked by competitors',
      'Secured seed capital commitment supported by institutional-grade financial forecasts'
    ],
    technologies: ['Financial Projections Modeling', 'Sensitivity Analysis', 'TAM-SAM-SOM Framework'],
    phase2AssetPrompt: 'FINANCIAL MODELING // SENSITIVITY MATRIX & STRATEGIC ROADMAP CHARTS (16:9)',
  },
];

