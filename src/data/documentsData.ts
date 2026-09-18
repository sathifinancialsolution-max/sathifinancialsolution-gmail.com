export interface DocumentCategoryGroup {
  id: string;
  serviceTitle: string;
  summary: string;
  groups: {
    title: string;
    description: string;
    items: string[];
    isMandatory: boolean;
  }[];
  expertTips: string[];
}

export const DOCUMENTS_DATA: Record<string, DocumentCategoryGroup> = {
  'personal-loan': {
    id: 'personal-loan',
    serviceTitle: 'Personal Loan',
    summary: 'Minimal documentation for salaried and self-employed individuals with quick electronic verification.',
    groups: [
      {
        title: 'Common KYC Verification',
        description: 'Mandatory identification and residence proof for all applicants',
        isMandatory: true,
        items: [
          'PAN Card (Permanent Account Number - original for verification)',
          'Aadhaar Card (Linked with active mobile for DigiLocker / e-KYC)',
          'Current Address Proof (Electricity bill, Passport, Voter ID, or registered Rent Agreement)',
          '2 Recent Passport-size color photographs'
        ]
      },
      {
        title: 'Salaried Applicant Proofs',
        description: 'Verification of regular employment and salary credit',
        isMandatory: true,
        items: [
          'Latest 3 months salary slips with clear employer stamp or digital sign',
          'Latest 6 months continuous bank statements of the salary account showing salary credits',
          'Form 16 (Part A & B) for the last 1-2 financial years',
          'Official company photo ID card or HR appointment letter'
        ]
      },
      {
        title: 'Self-Employed / Professional Proofs (If Applicable)',
        description: 'For business owners or consultants applying for personal credit',
        isMandatory: false,
        items: [
          'Income Tax Returns (ITR) for the last 2 financial years with computation of income',
          'Current account bank statement for the last 6 months',
          'Trade License, GST Registration, or professional practice certificate'
        ]
      }
    ],
    expertTips: [
      'Ensure your salary is credited directly via NEFT/RTGS/IMPS with narration matching your employer.',
      'Maintain minimal bank account cheque bounces or ECS mandate returns in the past 6 months.',
      'Check that your name matches exactly across PAN, Aadhaar, and salary slips.'
    ]
  },
  'home-loan': {
    id: 'home-loan',
    serviceTitle: 'Home Loan',
    summary: 'Comprehensive dossier covering income assessment, KYC, and full property chain records.',
    groups: [
      {
        title: 'KYC of Applicant & Co-Applicants',
        description: 'Verification for all co-borrowers and property owners',
        isMandatory: true,
        items: [
          'PAN Card & Aadhaar Card of primary borrower and all co-applicants',
          'Current residential address proof',
          'Passport-size photographs of all applicants'
        ]
      },
      {
        title: 'Income Documents (Salaried)',
        description: 'Stable income verification for loan repayment',
        isMandatory: true,
        items: [
          'Latest 3 months detailed salary slips',
          'Latest 6 months salary bank account statement (original PDF with bank seal/e-statement)',
          'Form 16 (Part A & B) for the last 2 years',
          'Employee ID proof'
        ]
      },
      {
        title: 'Income Documents (Self-Employed / Business)',
        description: 'Audited financials and tax history',
        isMandatory: false,
        items: [
          '3 Years Income Tax Returns along with Computation, Profit & Loss, and Balance Sheet certified by CA',
          '12 Months primary business and operative savings account bank statements',
          'GST Returns (GSTR-3B / GSTR-1) for the last 12 months',
          'Business Vintage Proof: GST certificate, Trade license, MSME / Udyam registration'
        ]
      },
      {
        title: 'Property & Title Documents',
        description: 'Crucial for legal search and technical valuation by lender advocate',
        isMandatory: true,
        items: [
          'Allotment Letter / Agreement for Sale / Registered Deed of Conveyance',
          'Previous mother deeds & link deeds tracing unbroken ownership for 30 years',
          'Sanctioned Building Plan and permission letter from Kolkata Municipal Corporation (KMC) / local municipality',
          'Up-to-date Property Tax Paid Receipt and Mutation Certificate / Porcha',
          'Non-Encumbrance Certificate (NEC) and Developer NOC (if purchasing from builder)'
        ]
      }
    ],
    expertTips: [
      'Adding a working spouse or parent as a co-applicant can significantly increase your eligible loan sanction amount.',
      'Ensure the building plan has not violated approved municipal setbacks or floor space limits.',
      'Keep your own contribution (margin money / down payment) transaction trail readily available.'
    ]
  },
  'mortgage-lap': {
    id: 'mortgage-lap',
    serviceTitle: 'Mortgage / Loan Against Property (LAP)',
    summary: 'Rigorous legal documentation for pledged residential, commercial, or industrial premises.',
    groups: [
      {
        title: 'KYC & Ownership Credentials',
        description: 'Mandatory identification for all property title holders',
        isMandatory: true,
        items: [
          'PAN Card and Aadhaar Card for each owner named in the title deed',
          'Photographs of all mortgagors and business partners / directors',
          'Proof of registered business address & residential address'
        ]
      },
      {
        title: 'Property Legal Records',
        description: 'Complete chain of title deeds to ensure marketable, unencumbered status',
        isMandatory: true,
        items: [
          'Original Registered Title Deed in borrower/co-borrower name',
          'Chain of prior Title Deeds (minimum 13 to 30 years unbroken chain)',
          'Approved Building Layout Plan & Completion/Occupancy Certificate (CC/OC)',
          'Latest Municipal Tax receipt showing no outstanding dues',
          'Khata extract / Mutation Certificate in the name of the current owner'
        ]
      },
      {
        title: 'Income & Financial Records',
        description: 'Proof of continuous debt servicing capacity',
        isMandatory: true,
        items: [
          'Last 3 years audited ITR with schedules, Balance Sheet, and Audit Report',
          '12 Months bank statements of all current and overdraft/cash-credit accounts',
          'Sanction letters of all existing loans/liabilities with recent repayment track record'
        ]
      }
    ],
    expertTips: [
      'Disputed properties, agricultural land without conversion, or properties lacking municipal mutation are generally not accepted by top tier banks.',
      'Physical inspection and valuation will be conducted by lender-assigned chartered engineers.'
    ]
  },
  'car-loan': {
    id: 'car-loan',
    serviceTitle: 'Car Loan Assistance',
    summary: 'Straightforward verification for new, used, or commercial vehicle financing.',
    groups: [
      {
        title: 'KYC & Identity',
        description: 'Applicant profile documents',
        isMandatory: true,
        items: [
          'PAN Card & Aadhaar Card',
          'Valid Driving License (helpful for auto loans)',
          'Passport-size photographs',
          'Address proof'
        ]
      },
      {
        title: 'Income & Financials',
        description: 'Proof of capacity to service monthly auto EMI',
        isMandatory: true,
        items: [
          'Salaried: 3 months salary slips + 6 months salary bank statement',
          'Self-Employed: Last 2 years ITR with computation + 6 months bank statement'
        ]
      },
      {
        title: 'Vehicle Documentation',
        description: 'Dealer or seller paperwork',
        isMandatory: true,
        items: [
          'New Car: Proforma Invoice & booking receipt from authorized car showroom',
          'Used Car: Copy of Registration Certificate (RC), existing insurance, and seller NOC',
          'Used Car: Valuation report by lender-approved auto inspector'
        ]
      }
    ],
    expertTips: [
      'Compare ex-showroom funding vs on-road funding (including road tax and insurance) with your SFS advisor.',
      'Zero-depreciation insurance can often be bundled directly within your car loan disbursement.'
    ]
  },
  'business-financing': {
    id: 'business-financing',
    serviceTitle: 'Business Loan & Working Capital',
    summary: 'Documentation for MSME, trade expansion, machinery funding, or working capital credit lines.',
    groups: [
      {
        title: 'Business Entity & KYC',
        description: 'Company identification and promoter KYC',
        isMandatory: true,
        items: [
          'Promoters & Directors PAN, Aadhaar, and passport photos',
          'Certificate of Incorporation / Partnership Deed / Memorandum & Articles of Association (MOA/AOA)',
          'GST Registration Certificate & Udyam / MSME Certificate',
          'Trade License from local civic body'
        ]
      },
      {
        title: 'Financial Statements & Tax Filings',
        description: 'Financial stability proof for credit underwriting',
        isMandatory: true,
        items: [
          'Last 3 years audited Balance Sheet & Profit and Loss Account with CA seal',
          'Last 3 years Income Tax Returns of the firm and individual partners/directors',
          'Last 12 months GST returns (GSTR-3B & GSTR-1)',
          'Last 12 months bank statements of all primary current accounts'
        ]
      },
      {
        title: 'Existing Debt Details',
        description: 'Transparency regarding ongoing loans',
        isMandatory: false,
        items: [
          'Sanction letters of active loans, Term Loans, or Cash Credit (CC) limits',
          'Loan account statements for the last 6-12 months showing timely repayments'
        ]
      }
    ],
    expertTips: [
      'Clean GST turnover that closely matches your bank deposits significantly speeds up underwriting.',
      'Government credit guarantee schemes (CGTMSE) may be explored for collateral-free MSME loans subject to lender criteria.'
    ]
  },
  'credit-card': {
    id: 'credit-card',
    serviceTitle: 'Credit Card Services',
    summary: 'Streamlined profile checks for reward, cashback, and travel cards.',
    groups: [
      {
        title: 'Standard KYC Checklist',
        description: 'Identity & residency confirmation',
        isMandatory: true,
        items: [
          'PAN Card copy (Mandatory for credit limit issuance)',
          'Aadhaar Card (with phone linked for video-KYC confirmation)',
          'Recent passport photo',
          'Proof of current delivery address'
        ]
      },
      {
        title: 'Income Verification',
        description: 'Proof of steady monthly inflow',
        isMandatory: true,
        items: [
          'Salaried: Latest 1-2 months salary slip or recent Form 16',
          'Self-Employed: Latest ITR acknowledgment copy (minimum ₹3-5 Lakhs income)',
          'Card-to-Card Route: Recent statement of existing credit card with limit ≥ ₹50,000'
        ]
      }
    ],
    expertTips: [
      'Applying via Card-to-Card route often avoids salary slip upload if your existing card has a clean 6+ month payment record.',
      'Check your bureau report beforehand to prevent unwanted hard inquiries.'
    ]
  },
  'insurance': {
    id: 'insurance',
    serviceTitle: 'Insurance Solutions',
    summary: 'Essential documents for health, term life, motor, or property protection.',
    groups: [
      {
        title: 'Proposer & Insured KYC',
        description: 'Personal identification and address verification',
        isMandatory: true,
        items: [
          'PAN Card and Aadhaar Card of the proposer/policyholder',
          'Passport-size photographs of insured family members',
          'Nominee details (Aadhaar, age, and relationship proof)'
        ]
      },
      {
        title: 'Health & Medical Records (If Applicable)',
        description: 'For health and high-cover term life policies',
        isMandatory: false,
        items: [
          'Pre-existing disease treatment summaries / discharge cards (if any)',
          'Recent prescription or lab reports for diabetes/hypertension',
          'Income proof (salary slip or ITR) for term insurance cover above ₹50 Lakh'
        ]
      },
      {
        title: 'Motor / Vehicle Insurance',
        description: 'For two-wheeler or four-wheeler policies',
        isMandatory: false,
        items: [
          'Vehicle Registration Certificate (RC) book or smart card',
          'Previous year policy copy (showing No Claim Bonus - NCB status)',
          'PUC (Pollution Under Control) certificate'
        ]
      }
    ],
    expertTips: [
      'Never hide existing medical conditions or tobacco usage; honest disclosure guarantees smooth hospital claim settlements.',
      'Retain your No Claim Bonus (NCB) certificate when switching motor insurance companies to get up to 50% discount.'
    ]
  }
};
