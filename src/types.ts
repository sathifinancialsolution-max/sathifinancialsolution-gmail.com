export type PageView = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'service-detail'
  | 'cibil' 
  | 'documents' 
  | 'eligibility' 
  | 'faqs' 
  | 'contact';

export interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  interestRateRange: string;
  tenureRange: string;
  loanAmountRange: string;
  keyFeatures: string[];
  eligibilityCriteria: {
    minAge: string;
    employmentType: string;
    minIncome: string;
    cibilRequirement: string;
  };
  requiredDocuments: string[];
  processSteps: string[];
  approvalFactors: string[];
  badge?: string;
  iconName: string;
}

export interface DocumentItem {
  category: string;
  title: string;
  items: string[];
  mandatory: boolean;
  notes?: string;
}

export interface EligibilityQuery {
  fullName: string;
  mobile: string;
  employmentType: 'salaried' | 'self-employed' | 'business';
  monthlyIncome: number;
  requiredAmount: number;
  loanType: string;
  existingEmi: number;
  approxCreditScore?: string;
  city: string;
}

export interface EnquirySubmission {
  name: string;
  mobile: string;
  email: string;
  loanType: string;
  requiredAmount: string;
  employmentType: string;
  monthlyIncome: string;
  city: string;
  message?: string;
  consent: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'cibil' | 'documents' | 'eligibility' | 'loans';
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  loanType: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}
