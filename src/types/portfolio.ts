export type Language = 'en' | 'bn';

export type GigCategory = 'all' | 'excel' | 'leadgen' | 'ecommerce' | 'conversion' | 'scraping';

export interface GigPackage {
  name: string;
  nameBn: string;
  price: number;
  deliveryDays: number;
  revisions: string;
  revisionsBn: string;
  features: string[];
  featuresBn: string[];
  description: string;
  descriptionBn: string;
}

export interface GigItem {
  id: string;
  title: string;
  titleBn: string;
  category: GigCategory;
  categoryLabel: string;
  categoryLabelBn: string;
  rating: number;
  reviewCount: number;
  startingPrice: number;
  thumbnail: string;
  badge?: string;
  badgeBn?: string;
  summary: string;
  summaryBn: string;
  packages: {
    basic: GigPackage;
    standard: GigPackage;
    premium: GigPackage;
  };
  sampleStats: {
    label: string;
    labelBn: string;
    value: string;
  }[];
  sampleColumns: string[];
  sampleRows: (string | number)[][];
  clientBenefits: string[];
  clientBenefitsBn: string[];
}

export interface ClientReview {
  id: string;
  buyerName: string;
  buyerCountry: string;
  buyerCountryFlag: string;
  gigTitle: string;
  gigTitleBn: string;
  rating: number;
  date: string;
  comment: string;
  commentBn: string;
  orderValue: string;
}

export interface FaqItem {
  question: string;
  questionBn: string;
  answer: string;
  answerBn: string;
}

export interface ToolSkill {
  name: string;
  category: string;
  categoryBn: string;
  proficiency: number; // percentage 0-100
  experience: string;
  experienceBn: string;
  tags: string[];
}
