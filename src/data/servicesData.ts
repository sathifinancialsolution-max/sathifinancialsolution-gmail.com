import { ServiceDetail } from '../types';

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'personal-loan',
    title: 'Personal Loan Assistance',
    category: 'Unsecured Loans',
    tagline: 'Multi-purpose immediate financial assistance for medical, wedding, travel, or debt consolidation.',
    description: 'We assist salaried and self-employed professionals in Ajoynagar and Kolkata in exploring personal loan offers across leading banks and NBFC partners. Enjoy guidance on optimal documentation, transparent tenure choices, and competitive rate comparisons without upfront broker fees.',
    interestRateRange: 'From 10.50% p.a.* (Lender dependent)',
    tenureRange: '12 Months to 60 Months',
    loanAmountRange: '₹50,000 to ₹40,00,000*',
    badge: 'Popular Choice',
    iconName: 'Banknote',
    keyFeatures: [
      'No collateral or security required',
      'Minimal paperwork with digital assistance',
      'Flexible repayment tenure up to 5 years',
      'Assistance for salaried & self-employed'
    ],
    eligibilityCriteria: {
      minAge: '21 to 58 years',
      employmentType: 'Salaried (MNC, Pvt Ltd, Govt) or Self-Employed Professional',
      minIncome: '₹20,000/month (Salaried in Kolkata)',
      cibilRequirement: '680+ preferred by most lenders'
    },
    requiredDocuments: [
      'PAN Card & Aadhaar Card (KYC)',
      'Latest 3 months salary slips',
      'Latest 6 months salary account bank statement',
      'Current employment ID / appointment letter',
      'Address proof (Electricity bill, rental agreement, or Passport)'
    ],
    processSteps: [
      'Share requirement & basic profile details with SFS advisor',
      'Evaluate eligible lender policies matching your income',
      'Complete documentation checklist review',
      'Application submission to preferred partner lender',
      'Lender credit assessment, sanction, and disbursal directly to your account'
    ],
    approvalFactors: [
      'Monthly net in-hand income stability',
      'Credit score and past clean repayment track record',
      'Fixed Obligation to Income Ratio (FOIR under 50%)',
      'Employer category & work vintage'
    ]
  },
  {
    id: 'home-loan',
    title: 'Home Loan Guidance',
    category: 'Secured Loans',
    tagline: 'Step into your dream home with structured property documentation and interest rate guidance.',
    description: 'Buying a flat in Kolkata or constructing a house in West Bengal? SFS provides comprehensive guidance through property search verification, legal vetting requirements, balance transfer options, and government PMAY subsidies where applicable.',
    interestRateRange: 'From 8.40% p.a.* (Lender dependent)',
    tenureRange: 'Up to 30 Years (360 Months)',
    loanAmountRange: '₹10 Lakh to ₹10 Crore*',
    badge: 'Low Interest',
    iconName: 'Home',
    keyFeatures: [
      'Attractive floating and fixed interest options',
      'Extended repayment period up to 30 years',
      'Tax benefits under Section 80C & Section 24',
      'Complete property chain document checklist support'
    ],
    eligibilityCriteria: {
      minAge: '21 to 65 years at loan maturity',
      employmentType: 'Salaried, Self-Employed Business or Professional',
      minIncome: '₹25,000/month (Individual or Combined with Co-applicant)',
      cibilRequirement: '700+ recommended for best rates'
    },
    requiredDocuments: [
      'PAN & Aadhaar of all applicants & co-applicants',
      'Last 6 months bank statements of all active accounts',
      'Salaried: 3 months salary slips & Form 16 (2 years)',
      'Self-Employed: 3 years ITR with Balance Sheet & P&L',
      'Property: Agreement to Sale, Title Deed, Mutation, Approved Building Plan'
    ],
    processSteps: [
      'Initial loan eligibility & down-payment assessment',
      'Pre-sanction / In-principle sanction guidance',
      'Legal & Technical evaluation of the property by lender',
      'Final sanction letter issuance with EMI terms',
      'Signing loan agreement & stage-wise disbursal'
    ],
    approvalFactors: [
      'Property title clarity and municipality approvals',
      'Applicant credit repayment history',
      'Combined family disposable monthly income',
      'Loan-to-Value (LTV) ratio compliance (up to 75%-90%)'
    ]
  },
  {
    id: 'mortgage-lap',
    title: 'Mortgage / Loan Against Property (LAP)',
    category: 'Secured Loans',
    tagline: 'Unlock the hidden equity in your residential or commercial property for high-ticket capital.',
    description: 'Whether expanding your business, funding higher education, or consolidating existing liabilities, a Loan Against Property provides high loan values with comfortable long tenures and significantly lower interest rates than unsecured loans.',
    interestRateRange: 'From 9.00% p.a.* (Lender dependent)',
    tenureRange: 'Up to 15 to 20 Years',
    loanAmountRange: '₹15 Lakh to ₹15 Crore*',
    badge: 'High Value',
    iconName: 'Building2',
    keyFeatures: [
      'Significantly lower interest rate compared to personal loans',
      'Property remains in your continuous possession & usage',
      'High sanction amount based on verified market valuation',
      'Flexible end-use for personal or business growth'
    ],
    eligibilityCriteria: {
      minAge: '25 to 65 years',
      employmentType: 'Business Owners, Traders, Professionals & Salaried',
      minIncome: 'Established business cash flows or salaried income',
      cibilRequirement: '680+ required'
    },
    requiredDocuments: [
      'KYC documents of all property owners & co-borrowers',
      'Original title deed, chain deeds (30 years search trace)',
      'Recent property tax paid receipt & Khata/Mutation certificate',
      'Income proof: 3 years audited ITR, GST returns (12 months)',
      '12 months banking of operative accounts'
    ],
    processSteps: [
      'Property preliminary check & requirement discussion',
      'Property valuation by lender-empanelled architect/engineer',
      'Legal title clearance by bank advocate',
      'Financial assessment & loan sanction',
      'Equitable mortgage registration & disbursal'
    ],
    approvalFactors: [
      'Clear, marketable legal title without disputes',
      'Property market value and structural stability',
      'Proven repayment capacity from business or income',
      'CIBIL score and past loan repayment track'
    ]
  },
  {
    id: 'car-loan',
    title: 'Car Loan Assistance',
    category: 'Auto Loans',
    tagline: 'Drive your dream car with swift dealer coordination and competitive automotive financing.',
    description: 'Assistance for financing new personal vehicles, commercial vehicles, and certified pre-owned cars across Kolkata and Greater Bengal. We help you navigate on-road funding, processing fee waivers, and hassle-free hypothecation paperwork.',
    interestRateRange: 'From 8.75% p.a.* (Lender dependent)',
    tenureRange: '1 to 7 Years (New) / up to 5 Years (Used)',
    loanAmountRange: 'Up to 90%–100% of On-Road Price*',
    badge: 'Fast Processing',
    iconName: 'Car',
    keyFeatures: [
      'Funding available for new and certified pre-owned cars',
      'Up to 100% ex-showroom or on-road financing by select lenders',
      'Foreclosure and part-payment options',
      'Quick dealer invoice coordination'
    ],
    eligibilityCriteria: {
      minAge: '21 to 65 years',
      employmentType: 'Salaried, Self-employed, Partnership, or Pvt Ltd',
      minIncome: '₹20,000/month',
      cibilRequirement: '700+ preferred'
    },
    requiredDocuments: [
      'KYC (Aadhaar, PAN Card, Photo)',
      'Bank statement (last 6 months)',
      'Latest 3 months salary slips or last 2 years ITR',
      'Vehicle proforma invoice from authorized car dealer'
    ],
    processSteps: [
      'Select vehicle & obtain proforma invoice from dealership',
      'SFS evaluates competitive car loan schemes',
      'Submit digital/physical documentation for verification',
      'Lender issues Delivery Order (DO) directly to dealer',
      'Take delivery of your vehicle'
    ],
    approvalFactors: [
      'Stable monthly income and debt ratio',
      'Clear vehicle valuation report (in case of used car)',
      'Clean credit score with zero active defaults'
    ]
  },
  {
    id: 'instant-loan',
    title: 'Instant Loan Assistance',
    category: 'Urgent Short-Term',
    tagline: 'Swift guidance for urgent capital requirements with digital verification support.',
    description: 'When unforeseen emergencies arise, time is paramount. SFS helps eligible individuals connect with digital lending partners offering rapid pre-approved underwriting and paperless processing. We provide transparent advice on turnaround expectations.',
    interestRateRange: 'From 12.00% to 24.00% p.a.* (Risk-based)',
    tenureRange: '3 Months to 36 Months',
    loanAmountRange: '₹15,000 to ₹5,00,000*',
    badge: 'Quick Guidance',
    iconName: 'Zap',
    keyFeatures: [
      'Paperless e-KYC and net-banking verification assistance',
      'Guidance for short-term emergency funding needs',
      'No hidden broker deductions or upfront fees from SFS',
      'Direct account crediting by authorized RBI-registered lenders'
    ],
    eligibilityCriteria: {
      minAge: '21 to 55 years',
      employmentType: 'Active salaried individuals with regular bank direct deposits',
      minIncome: '₹18,000/month net bank credit',
      cibilRequirement: '650+ (subject to lender risk policy)'
    },
    requiredDocuments: [
      'PAN Card & Aadhaar linked to active mobile for OTP',
      'Net banking access or 6 months e-statement (PDF)',
      'Cheque leaf or bank account verification proof'
    ],
    processSteps: [
      'Check digital criteria with SFS advisor',
      'Authorized e-KYC and digital income verification',
      'Lender automated underwriting review',
      'E-sign loan agreement via Aadhaar OTP',
      'Lender disbursal via IMPS/NEFT directly to bank'
    ],
    approvalFactors: [
      'Consistency of salary deposit dates in bank statement',
      'Absence of cheque bounces or recent unpaid defaults',
      'Verification of digital KYC credentials'
    ]
  },
  {
    id: 'credit-cards',
    title: 'Credit Card Services',
    category: 'Cards & Credit Lines',
    tagline: 'Discover suitable credit cards tailored to your lifestyle, rewards, fuel, and travel goals.',
    description: 'Choosing the right credit card can be overwhelming. SFS analyzes your spending patterns, airport lounge preferences, fuel savings, and reward preferences to assist you in applying for top-tier cards from partnered banks with high approval feasibility.',
    interestRateRange: 'Card dependent (Interest-free 45-50 days grace)',
    tenureRange: 'Revolving Credit Line',
    loanAmountRange: 'Limits from ₹30,000 to ₹10,00,000+*',
    badge: 'Reward Perks',
    iconName: 'CreditCard',
    keyFeatures: [
      'Guidance on Lifetime Free (LTF) and premium reward cards',
      'Airport lounge access, cinema discounts & fuel surcharge waivers',
      'Convert purchases into convenient low-interest EMIs',
      'Builds & strengthens your CIBIL score when paid punctually'
    ],
    eligibilityCriteria: {
      minAge: '21 to 65 years',
      employmentType: 'Salaried, Self-Employed or Card-to-Card basis',
      minIncome: '₹25,000/month for entry/mid-tier cards',
      cibilRequirement: '720+ recommended'
    },
    requiredDocuments: [
      'PAN Card & Aadhaar Card',
      'Latest salary slip or Form 16 / ITR copy',
      'Existing credit card statement (if applying via card-to-card route)',
      'Recent passport size photo'
    ],
    processSteps: [
      'Analyze your spend category (Shopping, Travel, Fuel, Dining)',
      'Match with best-fit banking partner criteria',
      'Submit application through authorized partner channel',
      'Address verification and biometric/video KYC',
      'Card dispatched to your registered address'
    ],
    approvalFactors: [
      'Clean credit utilization ratio (ideally under 30%)',
      'Credit bureau history vintage',
      'Employer profile and geographical location check'
    ]
  },
  {
    id: 'insurance-solutions',
    title: 'Insurance Solutions',
    category: 'Protection & Advisory',
    tagline: 'Comprehensive financial protection for life, health, motor, and property assets.',
    description: 'Safeguard your family and valuable assets against unexpected crises. SFS assists Kolkata residents in evaluating comprehensive term life plans, family floater health insurance with cashless hospital networks, and motor insurance renewals from licensed insurers.',
    interestRateRange: 'Annual / Multi-Year Premium',
    tenureRange: '1 Year to 40 Years (Term Coverage)',
    loanAmountRange: 'Coverage from ₹5 Lakh to ₹5 Crore*',
    badge: 'Life & Health',
    iconName: 'ShieldCheck',
    keyFeatures: [
      'Cashless hospitalization guidance across leading Kolkata hospitals',
      'High-cover pure term life insurance with critical illness riders',
      'Instant motor (car/bike) insurance renewals and claim advice',
      'Tax savings under Section 80D (Health) & Section 80C (Life)'
    ],
    eligibilityCriteria: {
      minAge: '18 to 65 years',
      employmentType: 'Open to all Indian citizens & residents',
      minIncome: 'Subject to sum assured guidelines',
      cibilRequirement: 'Not applicable for general insurance'
    },
    requiredDocuments: [
      'Identity Proof (Aadhaar, Voter ID, Passport, PAN)',
      'Address proof',
      'Medical history declaration (if required for health/term)',
      'Vehicle RC copy for motor insurance'
    ],
    processSteps: [
      'Review existing health or life risk exposure',
      'Compare policy features, waiting periods, and room rent caps',
      'Choose suitable sum insured and add-on riders',
      'Complete online medical declaration or Tele-MER if needed',
      'Direct policy issuance by registered insurance company'
    ],
    approvalFactors: [
      'Pre-existing disease disclosure transparency',
      'Age and lifestyle health metrics',
      'Sum insured vs annual family income ratio'
    ]
  }
];
