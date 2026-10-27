import { GigItem, ClientReview, FaqItem, ToolSkill } from '../types/portfolio';

export const HERO_WORKSPACE_IMAGE = '/src/assets/images/hero_freelancer_workspace_1793073534524.jpg';

export const PROFILE_INFO = {
  name: 'Somrat Rana',
  nameBn: 'সম্রাট রানা',
  role: 'Senior Data Entry Specialist & Virtual Assistant',
  roleBn: 'সিনিয়র ডাটা এন্ট্রি স্পেশালিস্ট ও ভার্চুয়াল অ্যাসিস্ট্যান্ট',
  sellerBadge: 'Level 2 Seller · Fiverr Choice',
  sellerBadgeBn: 'লেভেল ২ সেলার · ফাইভার চয়েস',
  rating: 5.0,
  reviewCount: 684,
  ordersCompleted: '1,240+',
  accuracyRate: '99.8%',
  responseTime: '< 1 Hour',
  responseTimeBn: '< ১ ঘণ্টা',
  contactEmail: 'somratrana1977@gmail.com',
  fiverrProfileUrl: 'https://www.fiverr.com',
  location: 'Dhaka, Bangladesh',
  languages: 'English (Fluent), Bengali (Native), Hindi (Conversational)',
  bio: 'Precision-focused Data Entry Specialist with 5+ years of experience delivering high-accuracy data solutions for Fortune 500 companies, e-commerce stores, real estate agencies, and startups. Master of Excel formulas, Power Query data cleaning, web research, and high-volume data migration with zero errors.',
  bioBn: '৫ বছরেরও বেশি অভিজ্ঞতাসম্পন্ন প্রিসিশন ডাটা এন্ট্রি বিশেষজ্ঞ। এক্সেল ফর্মুলা, পাওয়ার কোয়েরি ডাটা ক্লিনিং, বিটুবি লিড জেনারেশন, ই-কমার্স প্রোডাক্ট আপলোড এবং উচ্চমানের ওয়েব রিসার্চে নিখুঁত ও দ্রুত কাজ ডেলিভারি প্রদান করে থাকি।'
};

export const GIGS: GigItem[] = [
  {
    id: 'gig-excel-cleaning',
    title: 'Excel & Google Sheets Data Cleaning, Formulas & Pivot Table Dashboards',
    titleBn: 'এক্সেল ও গুগল শিটস ডাটা ক্লিনিং, অ্যাডভান্সড ফর্মুলা ও পিভট ড্যাশবোর্ড',
    category: 'excel',
    categoryLabel: 'Excel & Sheets',
    categoryLabelBn: 'এক্সেল ও শিটস',
    rating: 5.0,
    reviewCount: 284,
    startingPrice: 15,
    thumbnail: '/src/assets/images/gig_excel_data_cleaning_1793073534498.jpg',
    badge: 'Bestseller',
    badgeBn: 'বেস্টসেলার',
    summary: 'Expert cleaning of messy spreadsheets: duplicate removal, text parsing, XLOOKUP/VLOOKUP formulas, conditional formatting, and executive summary charts.',
    summaryBn: 'অগোছালো স্প্রেডশিট নিখুঁতভাবে পরিষ্কার করা: ডুপ্লিকেট বাদ দেওয়া, টেক্সট পার্সিং, VLOOKUP/XLOOKUP ফর্মুলা প্রয়োগ ও এক্সিকিউটিভ রিপোর্ট তৈরি।',
    packages: {
      basic: {
        name: 'Basic Cleanup',
        nameBn: 'বেসিক ক্লিনআপ',
        price: 15,
        deliveryDays: 1,
        revisions: 'Unlimited',
        revisionsBn: 'আনলিমিটেড',
        description: 'Clean up to 1,000 rows of raw data: remove duplicates, normalize cases, standardize dates and phone numbers.',
        descriptionBn: '১,০০০ রো পর্যন্ত ডাটা ক্লিনিং: ডুপ্লিকেট রিমুভ, টেক্সট কেস ঠিক করা ও ফোন নম্বর স্ট্যান্ডার্ডাইজেশন।',
        features: [
          'Up to 1,000 Rows Processed',
          'Deduplication & Error Fix',
          'Data Formatting & Cleaning',
          'Delivery within 24 Hours'
        ],
        featuresBn: [
          '১,০০০ রো পর্যন্ত প্রসেস',
          'ডুপ্লিকেট ও এরর ফিক্স',
          'ফরম্যাটিং ও ক্লিনআপ',
          '২৪ ঘণ্টার মধ্যে ডেলিভারি'
        ]
      },
      standard: {
        name: 'Standard Pro Suite',
        nameBn: 'স্ট্যান্ডার্ড প্রো স্যুট',
        price: 45,
        deliveryDays: 2,
        revisions: 'Unlimited',
        revisionsBn: 'আনলিমিটেড',
        description: 'Clean up to 5,000 rows + advanced formulas (XLOOKUP, INDEX/MATCH), conditional formatting, and 2 pivot summary tables.',
        descriptionBn: '৫,০০০ রো পর্যন্ত ডাটা ক্লিনআপ + অ্যাডভান্সড ফর্মুলা (XLOOKUP), পিভট টেবিল ও ভিজ্যুয়াল চার্ট।',
        features: [
          'Up to 5,000 Rows Processed',
          'Advanced Lookup & Math Formulas',
          'Interactive Pivot Tables & Charts',
          'Power Query Workflow Included',
          '2 Days Delivery'
        ],
        featuresBn: [
          '৫,০০০ রো পর্যন্ত প্রসেস',
          'অ্যাডভান্সড ফর্মুলা ও ফাংশন',
          'ইন্টারেক্টিভ পিভট টেবিল ও চার্ট',
          'পাওয়ার কোয়েরি অটোমেশন',
          '২ দিনের মধ্যে ডেলিভারি'
        ]
      },
      premium: {
        name: 'Enterprise Master Clean',
        nameBn: 'এন্টারপ্রাইজ মাস্টার ক্লিন',
        price: 95,
        deliveryDays: 3,
        revisions: 'Unlimited',
        revisionsBn: 'আনলিমিটেড',
        description: 'Clean up to 20,000 rows + multi-sheet consolidation, VBA/Macro automation, custom KPI dashboard, and video walkthrough.',
        descriptionBn: '২০,০০০ রো পর্যন্ত ডাটা কনসলিডেশন + ম্যাক্রো/VBA অটোমেশন, ফুল ড্যাশবোর্ড ও ভিডিও গাইড।',
        features: [
          'Up to 20,000 Rows / Multiple Sheets',
          'Complete Custom KPI Dashboard',
          'VBA / Google Apps Script Automation',
          'Data Validation & Dropdown Menus',
          'Loom Video Explanation'
        ],
        featuresBn: [
          '২০,০০০ রো / মাল্টিপল শিটস',
          'সম্পূর্ণ কাস্টম KPI ড্যাশবোর্ড',
          'ম্যাক্রো / অটোমেশন স্ক্রিপ্ট',
          'ডাটা ভ্যালিডেশন সিস্টেম',
          'ভিডিও এক্সপ্ল্যানেশন'
        ]
      }
    },
    sampleStats: [
      { label: 'Avg. Accuracy', labelBn: 'গড় নির্ভুলতা', value: '99.9%' },
      { label: 'Rows Handled', labelBn: 'মোট রো প্রসেসড', value: '350K+' },
      { label: 'Turnaround Time', labelBn: 'ডেলিভারি সময়', value: '24 Hours' }
    ],
    sampleColumns: ['ID', 'Full Name', 'Company', 'Email', 'Phone', 'Revenue', 'Status'],
    sampleRows: [
      ['#1082', 'Sarah Jenkins', 'Aura Tech LLC', 'sarah.j@auratech.com', '+1 (415) 890-2341', '$42,500', 'Active Client'],
      ['#1083', 'Marcus Vance', 'NorthStar Retail', 'm.vance@northstar.io', '+1 (312) 456-7890', '$18,200', 'Active Client'],
      ['#1084', 'Elena Rostova', 'Baltic Trade Co.', 'elena@baltictrade.eu', '+44 20 7946 0912', '$65,000', 'Enterprise'],
      ['#1085', 'David Tanaka', 'Kuroshio Logistics', 'tanaka@kuroshio.jp', '+81 3 5555 0143', '$29,800', 'Pending Verification']
    ],
    clientBenefits: [
      'Eliminate human typos and duplicate entries',
      'Standardize international phone and date formats',
      'Automate repeating calculations with formulas',
      'Ready-to-present spreadsheets for C-level meetings'
    ],
    clientBenefitsBn: [
      'টাইপো এবং ডুপ্লিকেট এন্ট্রি সম্পূর্ণ দূর করা',
      'আন্তর্জাতিক ফোন নম্বর এবং তারিখের ফরম্যাট স্ট্যান্ডার্ড করা',
      'অ্যাডভান্সড ফর্মুলার মাধ্যমে অটোমেটেড হিসাব-নিকাশ',
      'ক্লায়েন্ট ও ম্যানেজমেন্টের কাছে পেশ করার মতো প্রস্তুত শিট'
    ]
  },
  {
    id: 'gig-b2b-leadgen',
    title: 'B2B Lead Generation, LinkedIn Prospect Mining & Verified Email Lists',
    titleBn: 'বিটুবি লিড জেনারেশন, লিঙ্কডইন প্রসপেক্ট মাইনিং ও ভেরিফাইড ইমেইল কালেকশন',
    category: 'leadgen',
    categoryLabel: 'B2B Lead Gen',
    categoryLabelBn: 'বিটুবি লিডস',
    rating: 5.0,
    reviewCount: 215,
    startingPrice: 25,
    thumbnail: '/src/assets/images/gig_b2b_lead_generation_1793073535101.jpg',
    badge: 'High Demand',
    badgeBn: 'হাই ডিমান্ড',
    summary: 'Targeted decision-maker leads (CEOs, Founders, CMOs) with 100% verified emails, direct phone numbers, LinkedIn URLs, and company revenue info.',
    summaryBn: 'টার্গেটেড ডিসিশন মেকার (CEO, ফাউন্ডার, ডিরেক্টর) লিডস সাথে ১০০% ভ্যালিড ইমেইল, লিঙ্কডইন প্রোফাইল ও ফোন নম্বর।',
    packages: {
      basic: {
        name: 'Starter 100 Leads',
        nameBn: 'স্টার্টার ১০০ লিডস',
        price: 25,
        deliveryDays: 1,
        revisions: 'Unlimited',
        revisionsBn: 'আনলিমিটেড',
        description: '100 targeted B2B decision-maker leads with verified email, company name, title, website, and LinkedIn URL.',
        descriptionBn: '১০০ টার্গেটেড বিটুবি লিড: ভেরিফাইড ইমেইল, কোম্পানির নাম, পদবী, ওয়েবসাইট ও লিঙ্কডইন।',
        features: [
          '100 Verified B2B Leads',
          'Zero Email Bounce Guarantee',
          'LinkedIn Profile URLs',
          'CSV / Google Sheet Delivery'
        ],
        featuresBn: [
          '১০০ ভেরিফাইড বিটুবি লিডস',
          '০% বাউন্স গ্যারান্টি',
          'লিঙ্কডইন প্রোফাইল লিংক',
          'CSV বা গুগল শিটে ডেলিভারি'
        ]
      },
      standard: {
        name: 'Growth 500 Leads',
        nameBn: 'গ্রোথ ৫০০ লিডস',
        price: 90,
        deliveryDays: 2,
        revisions: 'Unlimited',
        revisionsBn: 'আনলিমিটেড',
        description: '500 targeted verified leads + phone numbers + company size and industry filtering.',
        descriptionBn: '৫০০ ভেরিফাইড লিড + কোম্পানির ফোন নম্বর + ইন্ডাস্ট্রি ও রেভিনিউ ফিল্টারিং।',
        features: [
          '500 Verified B2B Leads',
          'Valid Work Email + Direct Phone',
          'Industry & Headcount Filters',
          'NeverBounce / ZeroBounce Tested',
          '2 Days Delivery'
        ],
        featuresBn: [
          '৫০০ ভেরিফাইড বিটুবি লিডস',
          'ওয়ার্ক ইমেইল + ফোন নম্বর',
          'ইন্ডাস্ট্রি ও কোম্পানির সাইজ ফিল্টার',
          'নেভারবাউন্স ভেরিফিকেশন রিপোর্ট',
          '২ দিনের ডেলিভারি'
        ]
      },
      premium: {
        name: 'Enterprise 1,500 Leads',
        nameBn: 'এন্টারপ্রাইজ ১,৫০০ লিডস',
        price: 220,
        deliveryDays: 4,
        revisions: 'Unlimited',
        revisionsBn: 'আনলিমিটেড',
        description: '1,500 highly targeted leads with custom ICP criteria + direct CRM import (HubSpot/Salesforce) + cold email sequence advice.',
        descriptionBn: '১,৫০০ টার্গেটেড লিড + সরাসরি CRM এ ইম্পোর্ট (HubSpot/Salesforce) + ডাটা এনরিচমেন্ট।',
        features: [
          '1,500 Premium Verified Leads',
          'Custom ICP Targeting',
          'Direct CRM Mapping & Import',
          'Enriched Technographic Data',
          'Priority VIP Support'
        ],
        featuresBn: [
          '১,৫০০ প্রিমিয়াম ভেরিফাইড লিডস',
          'কাস্টম টার্গেটিং ফিল্টার',
          'সরাসরি CRM এ আপলোড সাপোর্ট',
          'টেকনোগ্রাফিক ডাটা এনরিচমেন্ট',
          'ভিআইপি প্রায়োরিটি সাপোর্ট'
        ]
      }
    },
    sampleStats: [
      { label: 'Bounce Rate', labelBn: 'বাউন্স রেট', value: '< 1%' },
      { label: 'Leads Delivered', labelBn: 'মোট ডেলিভারকৃত লিড', value: '180K+' },
      { label: 'Email Accuracy', labelBn: 'ইমেইল নির্ভুলতা', value: '100%' }
    ],
    sampleColumns: ['First Name', 'Last Name', 'Title', 'Company', 'Work Email', 'Phone', 'Location', 'LinkedIn'],
    sampleRows: [
      ['Alexander', 'Wright', 'Chief Executive Officer', 'Apex Cloud Inc.', 'a.wright@apexcloud.io', '+1 650 492 1109', 'San Francisco, CA', 'linkedin.com/in/alexwright'],
      ['Claire', 'Duval', 'VP of Growth', 'Lumiere Commerce', 'claire@lumiere.co', '+1 212 990 4421', 'New York, NY', 'linkedin.com/in/cduval-growth'],
      ['Henrik', 'Lindqvist', 'Managing Director', 'Nordic Nordic Bio', 'h.lind@nordicbio.se', '+46 8 123 4567', 'Stockholm, Sweden', 'linkedin.com/in/hlindqvist'],
      ['Priya', 'Sharma', 'Head of Procurement', 'Zenith Logistics', 'p.sharma@zenithlog.com', '+1 416 778 9012', 'Toronto, Canada', 'linkedin.com/in/priyasharma']
    ],
    clientBenefits: [
      'Stop wasting money on bounced email campaigns',
      'Reach real decision makers with verified direct emails',
      'Filtered by revenue, employee headcount, and location',
      'Ready to upload directly into Apollo, HubSpot, or Instantly'
    ],
    clientBenefitsBn: [
      'ইমেইল বাউন্সের ঝামেলা থেকে সম্পূর্ণ মুক্তি',
      'সরাসরি সিদ্ধান্ত গ্রহণকারী কর্মকর্তাদের সাথে যোগাযোগের সুযোগ',
      'কোম্পানির সাইজ, দেশ ও ক্যাটাগরি অনুযায়ী ফিল্টার্ড ডাটা',
      'HubSpot, Apollo বা Instantly তে সরাসরি আপলোড উপযোগী'
    ]
  },
  {
    id: 'gig-ecommerce-upload',
    title: 'E-Commerce Product Upload, Bulk CSV & Shopify / Amazon Listing Management',
    titleBn: 'ই-কমার্স প্রোডাক্ট আপলোড, বাল্ক CSV এবং শপিফাই / আমাজন লিস্টিং ম্যানেজমেন্ট',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce Upload',
    categoryLabelBn: 'ই-কমার্স আপলোড',
    rating: 5.0,
    reviewCount: 162,
    startingPrice: 20,
    thumbnail: '/src/assets/images/gig_ecommerce_listing_1793073535862.jpg',
    badge: 'Popular',
    badgeBn: 'পপুলার',
    summary: 'Flawless product catalog upload for Shopify, WooCommerce, Amazon, and Etsy. SKU mapping, variations (color/size), high-res images, and SEO titles.',
    summaryBn: 'শপিফাই, উকমার্স ও আমাজনে প্রোডাক্ট আপলোড: ভেরিয়েশন (রং, সাইজ), SKU ম্যাপিং, হাই রেজোলিউশন ছবি ও SEO ফ্রেন্ডলি ডেসক্রিপশন।',
    packages: {
      basic: {
        name: '50 Simple Products',
        nameBn: '৫০টি সাধারণ প্রোডাক্ট',
        price: 20,
        deliveryDays: 1,
        revisions: 'Unlimited',
        revisionsBn: 'আনলিমিটেড',
        description: 'Upload 50 simple products with title, description, SKU, price, category, and up to 3 images per product.',
        descriptionBn: '৫০টি প্রোডাক্ট আপলোড: টাইটেল, ডেসক্রিপশন, SKU, প্রাইস এবং ৩টি পর্যন্ত ছবি।',
        features: [
          '50 Products Listed',
          'SEO Optimized Titles',
          'Image Resizing & Linking',
          'Category & Tag Assignment'
        ],
        featuresBn: [
          '৫০টি প্রোডাক্ট লিস্টিং',
          'SEO ফ্রেন্ডলি টাইটেল',
          'ইমেজ রিসাইজ ও লিংকিং',
          'ক্যাটাগরি ও ট্যাগ সেটআপ'
        ]
      },
      standard: {
        name: '150 Variable Products',
        nameBn: '১৫০টি ভেরিয়েবল প্রোডাক্ট',
        price: 55,
        deliveryDays: 2,
        revisions: 'Unlimited',
        revisionsBn: 'আনলিমিটেড',
        description: 'Upload 150 complex products with multi-variations (size, color, material), inventory tracking, and meta tags.',
        descriptionBn: '১৫০টি প্রোডাক্ট আপলোড: মাল্টিপল ভেরিয়েশন (সাইজ, কালার), ইনভেন্টরি ট্র্যাকিং ও মেটা ট্যাগ।',
        features: [
          '150 Products with Variations',
          'Custom Attribute Mapping',
          'Barcode / UPC / EAN Codes',
          'Bulk CSV Template Setup',
          '2 Days Delivery'
        ],
        featuresBn: [
          '১৫০টি ভেরিয়েশন সহ প্রোডাক্ট',
          'কাস্টম অ্যাট্রিবিউট ম্যাপিং',
          'বারকোড / UPC / EAN কোড',
          'বাল্ক CSV টেমপ্লেট কনফিগারেশন',
          '২ দিনের ডেলিভারি'
        ]
      },
      premium: {
        name: '500 Catalog Overhaul',
        nameBn: '৫০০ প্রোডাক্ট ক্যাটালগ ওভারহোল',
        price: 140,
        deliveryDays: 4,
        revisions: 'Unlimited',
        revisionsBn: 'আনলিমিটেড',
        description: 'Full store migration or upload of 500 products with deep SEO descriptions, supplier price margin calculations, and inventory audit.',
        descriptionBn: '৫০০ প্রোডাক্ট আপলোড বা মাইগ্রেশন: ফুল এসইও ডেসক্রিপশন, মার্জিন ক্যালকুলেশন ও ইনভেন্টরি অডিট।',
        features: [
          '500 Products Uploaded',
          'Supplier Price Margin Sync',
          'Bulk Image Alt Tags',
          'Inventory Stock Reconciliation',
          'Store Audit Report'
        ],
        featuresBn: [
          '৫০০ প্রোডাক্ট আপলোড',
          'সাপ্লায়ার প্রাইস মার্জিন সিংক',
          'বাল্ক ইমেজ অল্ট ট্যাগ',
          'ইনভেন্টরি স্টক যাচাইকরণ',
          'স্টোর অডিট রিপোর্ট'
        ]
      }
    },
    sampleStats: [
      { label: 'Products Listed', labelBn: 'মোট আপলোডকৃত প্রোডাক্ট', value: '45K+' },
      { label: 'Shopify / Amazon', labelBn: 'প্ল্যাটফর্ম অভিজ্ঞতা', value: '5+ Years' },
      { label: 'SKU Accuracy', labelBn: 'SKU নির্ভুলতা', value: '100%' }
    ],
    sampleColumns: ['Handle', 'Title', 'Category', 'Variant SKU', 'Variant Price', 'Variant Size', 'Variant Color', 'Stock'],
    sampleRows: [
      ['leather-messenger-bag', 'Italian Leather Messenger Bag', 'Bags & Accessories', 'BAG-LTH-01-BRN', '$189.00', 'One Size', 'Vintage Brown', '45 in stock'],
      ['wireless-charging-dock', '3-in-1 Fast Wireless Dock', 'Electronics', 'DOCK-3IN1-BLK', '$49.99', 'Standard', 'Matte Black', '120 in stock'],
      ['organic-cotton-tee', 'Heavyweight Organic Cotton T-Shirt', 'Apparel', 'TEE-OG-L-WHT', '$28.00', 'Large', 'Crisp White', '80 in stock'],
      ['ceramic-coffee-dripper', 'Artisan Pour-Over Ceramic Dripper', 'Kitchenware', 'DRP-CRM-02-GRY', '$34.50', 'Medium', 'Stone Grey', '62 in stock']
    ],
    clientBenefits: [
      'Save dozens of hours of manual copy-pasting',
      'Proper variation hierarchy (no broken option dropdowns)',
      'Clean alt-tags for Google Images shopping SEO',
      'Inventory quantity sync to prevent overselling'
    ],
    clientBenefitsBn: [
      'কপি-পেস্টের পেছনে ঘণ্টার পর ঘণ্টা অপচয় বন্ধ',
      'সঠিক ভেরিয়েশন হায়ারার্কি (সাইজ ও কালার ড্রপডাউন ঠিক রাখা)',
      'গুগল শপিং এসইও-এর জন্য ইমেজ অল্ট ট্যাগ',
      'অতিরিক্ত বিক্রি ঠেকাতে সঠিক ইনভেন্টরি স্টক সিংক'
    ]
  },
  {
    id: 'gig-pdf-conversion',
    title: 'Scanned PDF, Invoices & Handwritten Documents to Clean Excel / Word Conversion',
    titleBn: 'স্ক্যান করা PDF, ইনভয়েস ও হাতে লেখা ডকুমেন্ট থেকে এক্সেল / ওয়ার্ড কনভার্সন',
    category: 'conversion',
    categoryLabel: 'Document Conversion',
    categoryLabelBn: 'ডকুমেন্ট কনভার্সন',
    rating: 5.0,
    reviewCount: 198,
    startingPrice: 10,
    thumbnail: '/src/assets/images/gig_pdf_conversion_1793073535639.jpg',
    badge: 'Fast Turnaround',
    badgeBn: 'ফাস্ট ডেলিভারি',
    summary: '100% human manual transcription with zero OCR garble. Perfect tabular layout preservation, receipts, bank statements, legal transcripts, and scanned contracts.',
    summaryBn: '১০০% নিখুঁত ম্যানুয়াল টাইপিং ও ট্রান্সক্রিপশন। ব্যাংক স্টেটমেন্ট, ইনভয়েস, রসিদ ও আইনি নথিপত্র যথাযথ ফরম্যাটে এক্সেলে রূপান্তর।',
    packages: {
      basic: {
        name: 'Up to 20 Pages',
        nameBn: '২০ পৃষ্ঠা পর্যন্ত',
        price: 10,
        deliveryDays: 1,
        revisions: 'Unlimited',
        revisionsBn: 'আনলিমিটেড',
        description: 'Convert up to 20 pages of scanned PDF or clean invoices into structured Excel sheets with exact column alignments.',
        descriptionBn: '২০ পৃষ্ঠা স্ক্যান করা PDF বা ইনভয়েস নিখুঁত কলাম ও রো বিন্যাসে এক্সেলে কনভার্ট।',
        features: [
          'Up to 20 Pages Converted',
          'Exact Font & Margin Alignment',
          'Calculation Formulas Verified',
          'Fast 24h Turnaround'
        ],
        featuresBn: [
          '২০ পৃষ্ঠা পর্যন্ত কনভার্সন',
          'হুবহু মার্জিন ও লেআউট মিল',
          'টোটাল হিসাবের ফর্মুলা চেক',
          '২৪ ঘণ্টার মধ্যে ডেলিভারি'
        ]
      },
      standard: {
        name: 'Up to 60 Pages',
        nameBn: '৬০ পৃষ্ঠা পর্যন্ত',
        price: 30,
        deliveryDays: 2,
        revisions: 'Unlimited',
        revisionsBn: 'আনলিমিটেড',
        description: 'Convert up to 60 pages + bank statement transaction reconciliation + mathematical sum checks.',
        descriptionBn: '৬০ পৃষ্ঠা পর্যন্ত কনভার্সন + ব্যাংক স্টেটমেন্ট ট্রানজেকশন মেলানো ও যোগফল যাচাই।',
        features: [
          'Up to 60 Pages Processed',
          'Bank Statements Reconciled',
          'Tables Reconstructed from Scratch',
          'Word & Excel Deliverables',
          '2 Days Turnaround'
        ],
        featuresBn: [
          '৬০ পৃষ্ঠা প্রসেসিং',
          'ব্যাংক স্টেটমেন্ট রিকনসিলিয়েশন',
          'টেবিল স্ট্রাকচার রিবিল্ড',
          'ওয়ার্ড ও এক্সেল উভয় ফরম্যাট',
          '২ দিনের ডেলিভারি'
        ]
      },
      premium: {
        name: 'Large Archive 150+ Pages',
        nameBn: 'বড় আর্কাইভ ১৫০+ পৃষ্ঠা',
        price: 75,
        deliveryDays: 3,
        revisions: 'Unlimited',
        revisionsBn: 'আনলিমিটেড',
        description: 'Convert 150+ pages of complex archives, legal deeds, financial disclosures, or handwriting with high-fidelity indexing.',
        descriptionBn: '১৫০+ পৃষ্ঠার জটিল আর্কাইভ, লিগ্যাল ডকুমেন্ট বা অস্পষ্ট হাতের লেখার নিখুঁত ডাটা এন্ট্রি।',
        features: [
          '150+ Pages Transcribed',
          'Double-Pass Proofreading',
          'Master Indexing Table of Contents',
          'Clean PDF/A Archival Copy',
          '3 Days Delivery'
        ],
        featuresBn: [
          '১৫০+ পৃষ্ঠা ট্রান্সক্রাইব',
          'ডাবল চেক ও প্রুফরিডিং',
          'ইনডেক্সিং ও টেবিল অব কনটেন্টস',
          'ক্লিন ডিজিটাল কপি',
          '৩ দিনের ডেলিভারি'
        ]
      }
    },
    sampleStats: [
      { label: 'Pages Transcribed', labelBn: 'মোট রূপান্তরিত পৃষ্ঠা', value: '120K+' },
      { label: 'Typing Speed', labelBn: 'টাইপিং স্পিড', value: '75+ WPM' },
      { label: 'Error Rate', labelBn: 'ভুলের হার', value: '0.0%' }
    ],
    sampleColumns: ['Date', 'Invoice #', 'Vendor Name', 'Tax ID', 'Description', 'Amount USD', 'Status'],
    sampleRows: [
      ['2026-03-12', 'INV-88901', 'Acme Office Supplies', 'TX-990-21', 'A4 Paper reams & ink toners', '$1,475.00', 'Paid in Full'],
      ['2026-03-14', 'INV-88902', 'Cisco Systems Ltd', 'CS-441-09', 'Switch Router Maintenance Fee', '$3,250.00', 'Approved'],
      ['2026-03-15', 'INV-88903', 'Metro Courier Service', 'MC-108-88', 'Overnight client parcel delivery', '$280.50', 'Paid in Full'],
      ['2026-03-18', 'INV-88904', 'CloudFlare Inc', 'CF-330-12', 'Enterprise DNS DDoS Protection', '$2,000.00', 'Due 30 Days']
    ],
    clientBenefits: [
      '100% human-verified so no automated OCR mistakes',
      'Formulas added to check that subtotals match the grand total',
      'Consistent headers ready for financial audits and tax filing',
      'Delivered in clean .xlsx and formatted .docx files'
    ],
    clientBenefitsBn: [
      'অটোমেটেড সফটওয়্যার নয়, ১০০% মানুষের হাতে নিখুঁত যাচাই',
      'যোগফল ও ট্যাক্স মেলানোর জন্য স্বয়ংক্রিয় ফর্মুলা সংযোজন',
      'ট্যাক্স ফাইল ও অডিটের জন্য পরিষ্কার টেবিল স্ট্রাকচার',
      'সুনির্দিষ্ট .xlsx ও .docx ফরম্যাটে প্রস্তুতকৃত ফাইল'
    ]
  },
  {
    id: 'gig-web-scraping',
    title: 'Web Scraping, Market Research & Real Estate Directory Data Mining',
    titleBn: 'ওয়েব স্ক্র্যাপিং, মার্কেট রিসার্চ ও রিয়েল এস্টেট ডিরেক্টরি ডাটা মাইনিং',
    category: 'scraping',
    categoryLabel: 'Web Scraping',
    categoryLabelBn: 'ওয়েব স্ক্র্যাপিং',
    rating: 5.0,
    reviewCount: 147,
    startingPrice: 30,
    thumbnail: '/src/assets/images/gig_b2b_lead_generation_1793073535101.jpg',
    badge: 'Pro Verified',
    badgeBn: 'প্রো ভেরিফাইড',
    summary: 'Extraction of structured data from YellowPages, Yelp, Google Maps, Zillow, Clutch, and custom web directories into clean CSV format.',
    summaryBn: 'বিভিন্ন ডিরেক্টরি (যেমন Google Maps, YellowPages, Yelp, Zillow) থেকে প্রয়োজনীয় সব তথ্য এক্সেলে সুন্দরভাবে স্ক্র্যাপ ও গোছানো।',
    packages: {
      basic: {
        name: '500 Directory Records',
        nameBn: '৫০০ ডিরেক্টরি রেকর্ড',
        price: 30,
        deliveryDays: 1,
        revisions: 'Unlimited',
        revisionsBn: 'আনলিমিটেড',
        description: 'Scrape 500 business listings with company name, address, phone, website, and rating from public directories.',
        descriptionBn: '৫০০টি কোম্পানির তথ্য স্ক্র্যাপ: নাম, ঠিকানা, ফোন নম্বর, ওয়েবসাইট ও রেটিং।',
        features: [
          '500 Verified Listings',
          'Custom Public Directory Source',
          'CSV / Excel Output',
          'Delivery within 24h'
        ],
        featuresBn: [
          '৫০০টি ভেরিফাইড লিস্টিং',
          'যেকোনো পাবলিক ডিরেক্টরি থেকে',
          'CSV / এক্সেল আউটপুট',
          '২৪ ঘণ্টার মধ্যে ডেলিভারি'
        ]
      },
      standard: {
        name: '2,000 Records + Emails',
        nameBn: '২,০০০ রেকর্ড + ইমেইল',
        price: 85,
        deliveryDays: 2,
        revisions: 'Unlimited',
        revisionsBn: 'আনলিমিটেড',
        description: 'Scrape 2,000 listings + crawl company websites to extract contact emails, social links (IG/FB/LinkedIn), and owner names.',
        descriptionBn: '২,০০০ লিস্টিং + তাদের ওয়েবসাইট ভিজিট করে কন্টাক্ট ইমেইল ও সোশ্যাল মিডিয়া লিংক সংগ্রহ।',
        features: [
          '2,000 Detailed Records',
          'Deep Domain Crawl for Emails',
          'Social Media URLs Included',
          'Clean Standardized Output',
          '2 Days Delivery'
        ],
        featuresBn: [
          '২,০০০ বিস্তারিত রেকর্ড',
          'ডোমেইন ক্রলিং করে ইমেইল সংগ্রহ',
          'সোশ্যাল মিডিয়া প্রোফাইল লিংক',
          'পরিমার্জিত স্ট্যান্ডার্ড আউটপুট',
          '২ দিনের মধ্যে ডেলিভারি'
        ]
      },
      premium: {
        name: '10,000 Nationwide Dataset',
        nameBn: '১০,০০০ দেশব্যাপী ডাটাবেস',
        price: 240,
        deliveryDays: 4,
        revisions: 'Unlimited',
        revisionsBn: 'আনলিমিটেড',
        description: 'Multi-state scraping of 10,000+ businesses with deduplication, geo-coordinates (lat/lng), review counts, and daily refresh script.',
        descriptionBn: '১০,০০০+ ডাটাবেস: জিও-লোকেশন (lat/lng), রিভিউ কাউন্ট ও স্বয়ংক্রিয় ডাটাবেস টেমপ্লেট।',
        features: [
          '10,000+ Comprehensive Entries',
          'Geo Coordinates (Lat/Long)',
          'Review Volume & Sentiment Score',
          'Automated Python/Node Script Included',
          '4 Days Turnaround'
        ],
        featuresBn: [
          '১০,০০০+ পূর্ণাঙ্গ এন্ট্রি',
          'জিও লোকেশন কোঅর্ডিনেট',
          'রিভিউ ভলিউম ও স্কোর',
          'স্ক্রিপ্ট সহ সম্পূর্ণ প্যাকেজ',
          '৪ দিনের মধ্যে ডেলিভারি'
        ]
      }
    },
    sampleStats: [
      { label: 'Scraped Sites', labelBn: 'স্ক্র্যাপকৃত ওয়েবসাইট', value: '250+' },
      { label: 'Total Records', labelBn: 'মোট সংগৃহীত ডাটা', value: '1.2M+' },
      { label: 'Data Freshness', labelBn: 'ডাটা ফ্রেশনেস', value: '100% Live' }
    ],
    sampleColumns: ['Business Name', 'Category', 'Address', 'Phone', 'Website', 'Email', 'Google Rating'],
    sampleRows: [
      ['Summit Dental Studio', 'Dentistry', '742 Evergreen Terrace, Austin TX', '(512) 882-9012', 'summitdentalatx.com', 'care@summitdentalatx.com', '4.9 ★ (184 reviews)'],
      ['Lone Star Plumbing Co.', 'Plumbing', '108 Industrial Blvd, Dallas TX', '(214) 773-4501', 'lonestarplumb.net', 'service@lonestarplumb.net', '4.8 ★ (312 reviews)'],
      ['Apex Roof Repairs', 'Roofing', '302 Commerce St, Houston TX', '(713) 991-8840', 'apexroofshouston.com', 'quotes@apexroofshouston.com', '5.0 ★ (94 reviews)'],
      ['Verde Landscaping Pros', 'Landscaping', '55 Canyon Rd, San Antonio TX', '(210) 654-3210', 'verdelandscaping.org', 'contact@verdelandscaping.org', '4.7 ★ (140 reviews)']
    ],
    clientBenefits: [
      'Bypass anti-bot protections and IP blocks legally and ethically',
      'Clean tabular formatting with no broken HTML or messy characters',
      'Comprehensive metadata: ratings, review counts, hours of operation',
      'Direct compatibility with Google Maps API and GIS systems'
    ],
    clientBenefitsBn: [
      'অগোছালো কোড বা ভাঙা ক্যারেক্টার ছাড়া সম্পূর্ণ ফ্রেশ এক্সেল ডাটা',
      'সঠিক ফিল্ড ম্যাপিং: ফোন, ইমেইল, রেটিং ও ঠিকানা আলাদা কলামে',
      'মার্কেট ও কম্পিটিটর অ্যানালিসিসের জন্য আদর্শ ডাটাবেস',
      'গুগল ম্যাপস ও সিআরএম এর সাথে সম্পূর্ণ কম্প্যাটিবল'
    ]
  },
  {
    id: 'gig-crm-entry',
    title: 'CRM Data Entry, Contact Migration & Deduplication (HubSpot, Salesforce, Zoho)',
    titleBn: 'সিআরএম ডাটা এন্ট্রি, কন্টাক্ট মাইগ্রেশন ও ডুপ্লিকেশন রিমুভাল (HubSpot, Salesforce, Zoho)',
    category: 'excel',
    categoryLabel: 'CRM & Database',
    categoryLabelBn: 'সিআরএম ও ডাটাবেস',
    rating: 5.0,
    reviewCount: 118,
    startingPrice: 35,
    thumbnail: '/src/assets/images/gig_excel_data_cleaning_1793073534498.jpg',
    badge: 'Enterprise',
    badgeBn: 'এন্টারপ্রাইজ',
    summary: 'Seamless transfer of contacts, deals, and notes across CRMs. Field mapping, duplicate record merging, and data hygiene audits.',
    summaryBn: 'HubSpot, Salesforce বা Zoho সিআরএম-এ কন্টাক্ট ও ডিল মাইগ্রেশন, ফিল্ড ম্যাপিং এবং ডুপ্লিকেট কন্টাক্ট মার্জিং।',
    packages: {
      basic: {
        name: '500 CRM Contacts',
        nameBn: '৫০০ সিআরএম কন্টাক্টস',
        price: 35,
        deliveryDays: 1,
        revisions: 'Unlimited',
        revisionsBn: 'আনলিমিটেড',
        description: 'Input or migrate 500 contact records with custom property mappings, tags, and lifecycle stages.',
        descriptionBn: '৫০০ কন্টাক্ট রেকর্ড সিআরএমে ইনপুট বা মাইগ্রেশন: কাস্টম ফিল্ড ও লাইফসাইকেল স্টেজ ম্যাপিং।',
        features: [
          '500 Contacts Uploaded',
          'Field Property Mapping',
          'Tagging & Lifecycle Setup',
          'Zero Data Loss Guarantee'
        ],
        featuresBn: [
          '৫০০ কন্টাক্ট আপলোড',
          'ফিল্ড প্রোপার্টি ম্যাপিং',
          'ট্যাগিং ও লাইফসাইকেল স্টেজ',
          'ডাটা লস জিরো গ্যারান্টি'
        ]
      },
      standard: {
        name: '2,500 Contacts + Deals',
        nameBn: '২,৫০০ কন্টাক্ট + ডিলস',
        price: 95,
        deliveryDays: 2,
        revisions: 'Unlimited',
        revisionsBn: 'আনলিমিটেড',
        description: 'Migrate 2,500 contacts, associate with active companies and pipeline deals, and run full deduplication routine.',
        descriptionBn: '২,৫০০ কন্টাক্ট ও কোম্পানি মাইগ্রেশন, সেলস পাইপলাইনে ডিল অ্যাসোসিয়েট ও ডুপ্লিকেট মার্জ।',
        features: [
          '2,500 Contacts & Companies',
          'Deal Pipeline Stage Linking',
          'Duplicate Record Merging',
          'Pre-migration CSV Audit',
          '2 Days Turnaround'
        ],
        featuresBn: [
          '২,৫০০ কন্টাক্ট ও কোম্পানি',
          'সেলস পাইপলাইন ডিল লিংক',
          'ডুপ্লিকেট রেকর্ড মার্জ',
          'মাইগ্রেশনের আগে অডিট',
          '২ দিনের মধ্যে ডেলিভারি'
        ]
      },
      premium: {
        name: 'Full CRM Overhaul 10K',
        nameBn: 'ফুল সিআরএম ওভারহোল ১০K',
        price: 210,
        deliveryDays: 4,
        revisions: 'Unlimited',
        revisionsBn: 'আনলিমিটেড',
        description: 'End-to-end data hygiene overhaul of up to 10,000 records. Custom workflow triggers, historical notes transfer, and team training sheet.',
        descriptionBn: '১০,০০০ রেকর্ড পর্যন্ত সম্পূর্ণ সিআরএম ডাটা ক্লিনআপ, নোটস ও হিস্ট্রি ট্রান্সফার ও হ্যান্ডওভার গাইড।',
        features: [
          'Up to 10,000 Records Overhauled',
          'Past Activity & Notes Intact',
          'Cross-Platform Migration (e.g. Zoho to HubSpot)',
          'Custom Properties Architecture',
          'Post-migration Verification Call'
        ],
        featuresBn: [
          '১০,০০০ রেকর্ড পর্যন্ত ক্লিনআপ',
          'অ্যাক্টিভিটি হিস্ট্রি ও নোটস ট্রান্সফার',
          'ক্রস প্ল্যাটফর্ম মাইগ্রেশন',
          'কাস্টম প্রোপার্টি আর্কিটেকচার',
          'ভেরিফিকেশন সাপোর্ট'
        ]
      }
    },
    sampleStats: [
      { label: 'CRMs Supported', labelBn: 'সিআরএম প্ল্যাটফর্ম', value: 'HubSpot, SF, Zoho' },
      { label: 'Records Cleaned', labelBn: 'ক্লিন করা রেকর্ড', value: '280K+' },
      { label: 'Data Integrity', labelBn: 'ডাটা ইন্টিগ্রিটি', value: '100%' }
    ],
    sampleColumns: ['Contact ID', 'Name', 'Company', 'Associated Deal', 'Stage', 'Owner', 'Last Touchpoint'],
    sampleRows: [
      ['CON-9941', 'Robert H. Gable', 'Vanguard Media Corp', 'Q3 Cloud Expansion ($84,000)', 'Contract Sent', 'Somrat Admin', '2026-03-22 via Email'],
      ['CON-9942', 'Elena Rostova', 'Baltic Trade Co.', 'Logistics Modernization ($45,000)', 'Qualified Inbound', 'Somrat Admin', '2026-03-23 via Call'],
      ['CON-9943', 'David Tanaka', 'Kuroshio Logistics', 'APAC Integration ($112,000)', 'Proposal Review', 'Somrat Admin', '2026-03-24 via Meeting'],
      ['CON-9944', 'Marcus Vance', 'NorthStar Retail', 'Inventory Sync Pilot ($19,500)', 'Closed Won', 'Somrat Admin', '2026-03-25 Signed']
    ],
    clientBenefits: [
      'Stop duplicate leads from confusing your sales reps',
      'Keep your CRM health score in top tier for marketing campaigns',
      'Never lose crucial deal notes during database transitions',
      'Standardized taxonomy across international teams'
    ],
    clientBenefitsBn: [
      'সেলস টিমের ভেতর ডুপ্লিকেট লিডের বিভ্রান্তি চিরতরে বন্ধ',
      'মার্কেটিং ইমেইল ক্যাম্পেইনের জন্য সিআরএম হেলথ স্কোর ১০০% রাখা',
      'ডাটা ট্রান্সফারের সময় জরুরি নোট বা হিস্ট্রি হারানোর ঝুঁকি নেই',
      'আন্তর্জাতিক টিমের জন্য সুনির্দিষ্ট ডাটা ফিল্ড স্ট্যান্ডার্ড'
    ]
  }
];

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: 'rev-1',
    buyerName: 'David K.',
    buyerCountry: 'United States',
    buyerCountryFlag: '🇺🇸',
    gigTitle: 'Excel Data Cleaning & Pivot Dashboards',
    gigTitleBn: 'এক্সেল ডাটা ক্লিনিং ও পিভট ড্যাশবোর্ড',
    rating: 5,
    date: '3 days ago',
    comment: 'Somrat is an absolute Excel wizard! I sent him 14,000 messy customer records with mismatched columns, broken names, and duplicate phone numbers. He cleaned everything, built an automated pivot summary, and delivered hours ahead of the deadline with 0 errors. Will hire again!',
    commentBn: 'সম্রাট সত্যিকার অর্থেই একজন এক্সেল জাদুকর! আমি তাকে ১৪,০০০ এলোমেলো কাস্টমার রেকর্ড পাঠিয়েছিলাম যেখানে ডুপ্লিকেট ফোন নম্বর ও ভুল ফরম্যাট ছিল। সে নির্দিষ্ট সময়ের আগেই সম্পূর্ণ নিখুঁতভাবে সব পরিষ্কার করে ডেলিভারি দিয়েছে। অসাধারণ কাজ!',
    orderValue: '$95'
  },
  {
    id: 'rev-2',
    buyerName: 'Emma Richardson',
    buyerCountry: 'United Kingdom',
    buyerCountryFlag: '🇬🇧',
    gigTitle: 'B2B Lead Generation & LinkedIn Mining',
    gigTitleBn: 'বিটুবি লিড জেনারেশন ও লিঙ্কডইন মাইনিং',
    rating: 5,
    date: '1 week ago',
    comment: 'Delivered 500 verified B2B leads for UK retail founders. We ran them through NeverBounce and literally 0 bounced! Response rate on our outreach has doubled. Extremely polite, fast communication, and top-tier professionalism.',
    commentBn: 'যুক্তরাজ্যের রিটেইল ফাউন্ডারদের ৫০০টি ভেরিফাইড বিটুবি লিড দিয়েছে। আমরা নেভারবাউন্স দিয়ে টেস্ট করে দেখেছি একটি ইমেইলও বাউন্স করেনি! রেসপন্স রেট দ্বিগুণ বেড়েছে। দারুণ প্রফেশনালিজম।',
    orderValue: '$90'
  },
  {
    id: 'rev-3',
    buyerName: 'Jean-Marc Dubois',
    buyerCountry: 'Canada',
    buyerCountryFlag: '🇨🇦',
    gigTitle: 'E-Commerce Product Upload & Shopify Listing',
    gigTitleBn: 'ই-কমার্স প্রোডাক্ট আপলোড ও শপিফাই লিস্টিং',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Uploaded 320 complex apparel items to our Shopify store with color/size variations, SKU codes, and high-res image tags. Saved our marketing team at least 40 hours of manual work. Somrat is our go-to virtual assistant now.',
    commentBn: 'আমাদের শপিফাই স্টোরে ৩২০টি জটিল ফ্যাশন আইটেম বিভিন্ন সাইজ, কালার এবং SKU সহ আপলোড করেছে। আমাদের টিমের অন্তত ৪০ ঘণ্টার পরিশ্রম বাঁচিয়ে দিয়েছে। নিঃসন্দেহে সেরা ভার্চুয়াল অ্যাসিস্ট্যান্ট।',
    orderValue: '$140'
  },
  {
    id: 'rev-4',
    buyerName: 'Sophie Meyer',
    buyerCountry: 'Germany',
    buyerCountryFlag: '🇩🇪',
    gigTitle: 'Scanned PDF & Invoice to Excel Conversion',
    gigTitleBn: 'স্ক্যান করা PDF ও ইনভয়েস থেকে এক্সেল কনভার্সন',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Flawless manual conversion of 65 handwritten German tax forms and financial statements. Every figure was balanced to the exact cent, and he even highlighted discrepancies in the original scans. Exceptional attention to detail.',
    commentBn: '৬৫ পৃষ্ঠার জার্মান ট্যাক্স ফর্ম ও ফাইন্যান্সিয়াল রিপোর্ট নিখুঁতভাবে এক্সেলে কনভার্ট করেছে। প্রতিটি সংখ্যার যোগফল শতভাগ মিলেছে। অত্যন্ত বিশ্বস্ত ও খুঁটিনাটি বিষয়ে সতর্ক কর্মী।',
    orderValue: '$30'
  },
  {
    id: 'rev-5',
    buyerName: 'Liam O’Connor',
    buyerCountry: 'Australia',
    buyerCountryFlag: '🇦🇺',
    gigTitle: 'Web Scraping & Real Estate Directory Mining',
    gigTitleBn: 'ওয়েব স্ক্র্যাপিং ও রিয়েল এস্টেট ডাটা মাইনিং',
    rating: 5,
    date: '1 month ago',
    comment: 'Scraped and verified over 2,500 Sydney commercial real estate property listings including phone numbers and owner entities. Delivered in a clean, color-coded CSV ready for our telemarketing team. Outstanding value.',
    commentBn: 'সিডনির ২,৫০০ বাণিজ্যিক রিয়েল এস্টেট প্রোপার্টির তথ্য ও মালিকের নম্বর সুন্দরভাবে স্ক্র্যাপ ও ফিল্টার করে দিয়েছে। আমাদের সেলস টিমের জন্য তৈরি পরিচ্ছন্ন CSV ফাইল পেয়ে আমরা অত্যন্ত আনন্দিত।',
    orderValue: '$85'
  }
];

export const TOOL_SKILLS: ToolSkill[] = [
  {
    name: 'Microsoft Excel',
    category: 'Spreadsheets',
    categoryBn: 'স্প্রেডশিট',
    proficiency: 99,
    experience: '5+ Years',
    experienceBn: '৫+ বছর',
    tags: ['XLOOKUP', 'INDEX/MATCH', 'Power Query', 'Pivot Tables', 'Macros/VBA', 'Conditional Formatting']
  },
  {
    name: 'Google Sheets',
    category: 'Spreadsheets',
    categoryBn: 'স্প্রেডশিট',
    proficiency: 98,
    experience: '5+ Years',
    experienceBn: '৫+ বছর',
    tags: ['QUERY()', 'ARRAYFORMULA', 'IMPORTRANGE', 'Google Apps Script', 'Data Validation']
  },
  {
    name: 'LinkedIn Sales Navigator',
    category: 'Lead Generation',
    categoryBn: 'লিড জেনারেশন',
    proficiency: 95,
    experience: '4+ Years',
    experienceBn: '৪+ বছর',
    tags: ['Boolean Search', 'Decision Makers', 'C-Level Filters', 'Headcount Targeting', 'Industry Segments']
  },
  {
    name: 'Apollo.io & ZoomInfo',
    category: 'Lead Generation',
    categoryBn: 'লিড জেনারেশন',
    proficiency: 94,
    experience: '4+ Years',
    experienceBn: '৪+ বছর',
    tags: ['Email Verification', 'Direct Dials', 'Technographic Filters', 'NeverBounce Validation']
  },
  {
    name: 'Shopify Admin',
    category: 'E-Commerce',
    categoryBn: 'ই-কমার্স',
    proficiency: 96,
    experience: '4+ Years',
    experienceBn: '৪+ বছর',
    tags: ['Bulk CSV Upload', 'Variant Matrix', 'Metafields', 'Image Alt SEO', 'Inventory Sync']
  },
  {
    name: 'Amazon Seller Central',
    category: 'E-Commerce',
    categoryBn: 'ই-কমার্স',
    proficiency: 92,
    experience: '3+ Years',
    experienceBn: '৩+ বছর',
    tags: ['Flat File Feeds', 'UPC/ASIN Mapping', 'Parent-Child Listings', 'FBA Preparation']
  },
  {
    name: 'HubSpot & Salesforce',
    category: 'CRM Systems',
    categoryBn: 'সিআরএম সিস্টেম',
    proficiency: 90,
    experience: '3+ Years',
    experienceBn: '৩+ বছর',
    tags: ['Contact Migration', 'Lifecycle Stages', 'Deduplication', 'Deal Pipelines', 'Custom Fields']
  },
  {
    name: 'Web Scraping Tools',
    category: 'Data Mining',
    categoryBn: 'ডাটা মাইনিং',
    proficiency: 93,
    experience: '4+ Years',
    experienceBn: '৪+ বছর',
    tags: ['Instant Data Scraper', 'OctoParse', 'Google Maps Scraping', 'XPath / Regex', 'YellowPages']
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'How do you guarantee 100% data accuracy and zero errors?',
    questionBn: 'আপনি কীভাবে ১০০% ডাটা নির্ভুলতা এবং জিরো এরর নিশ্চিত করেন?',
    answer: 'I follow a rigorous 3-step quality assurance framework: First, automated formula validation (checking sums, regex email formats, and E.164 phone numbers); second, manual double-pass spot checking; and third, running Power Query deduplication scripts before delivering the final file.',
    answerBn: 'আমি তিন স্তরের কোয়ালিটি চেকিং অনুসরণ করি: প্রথমত, স্বয়ংক্রিয় ফর্মুলা ও রেজেক্স ভ্যালিডেশন (যোগফল, ইমেইল ও ফোন ফরম্যাট চেক); দ্বিতীয়ত, ম্যানুয়াল ডাবল-চেক; এবং তৃতীয়ত, পাওয়ার কোয়েরি দিয়ে ডুপ্লিকেট ও এরর বাদ দিয়ে সম্পূর্ণ নিখুঁত ফাইল হস্তান্তর।'
  },
  {
    question: 'Can you provide a free sample test (10-20 rows) before I place an order?',
    questionBn: 'অর্ডার দেওয়ার আগে কি ১০-২০ রো এর একটি ফ্রি স্যাম্পল টেস্ট করে দেবেন?',
    answer: 'Yes, absolutely! I encourage all prospective clients to send a small sample test (10 to 20 rows of your raw data or 1-2 pages of your PDF). I will clean or convert it free of charge so you can verify my quality before confirming any project.',
    answerBn: 'হ্যাঁ, অবশ্যই! যেকোনো ক্লায়েন্টের কাজ নিশ্চিত করার আগে আমি ১০ থেকে ২০ রো এর ডাটা অথবা ১-২ পৃষ্ঠার PDF সম্পূর্ণ বিনামূল্যে স্যাম্পল হিসেবে করে দেখাই, যাতে আপনি কাজের মান দেখে নিশ্চিত হতে পারেন।'
  },
  {
    question: 'How do you handle client confidentiality and NDA agreements?',
    questionBn: 'ক্লায়েন্টের গোপনীয় তথ্য ও NDA চুক্তি কীভাবে রক্ষা করেন?',
    answer: 'Client confidentiality is strictly protected. I am always ready to sign standard Non-Disclosure Agreements (NDAs). Your files are stored in an encrypted local drive and permanently deleted 14 days after project acceptance, and are never shared with any third party.',
    answerBn: 'ক্লায়েন্টের তথ্যের গোপনীয়তা রক্ষা করা আমার সর্বোচ্চ অগ্রাধিকার। আমি যেকোনো NDA চুক্তিতে স্বাক্ষর করতে প্রস্তুত। ক্লায়েন্টের ফাইল সম্পূর্ণ এনক্রিপ্টেড থাকে এবং কাজ শেষ হওয়ার ১৪ দিন পর স্থায়ীভাবে মুছে ফেলা হয়।'
  },
  {
    question: 'What is your maximum capacity and delivery turnaround time?',
    questionBn: 'আপনার কাজের সর্বোচ্চ ক্ষমতা এবং ডেলিভারির গতি কেমন?',
    answer: 'For standard tasks (up to 2,000 rows or 30 pages), I deliver within 24 hours. For larger bulk enterprise datasets (20,000 to 100,000+ rows), I deploy optimized Power Query and Python batch routines to deliver within 2 to 4 business days.',
    answerBn: 'সাধারণ কাজের ক্ষেত্রে (২,০০০ রো বা ৩০ পৃষ্ঠা পর্যন্ত) আমি ২৪ ঘণ্টার মধ্যেই কাজ ডেলিভারি দিই। আর বড় কাজের ক্ষেত্রে (২০,০০০ থেকে ১ লাখ+ ডাটা) অটোমেটেড পাওয়ার কোয়েরি ও পাইথন স্ক্রিপ্ট ব্যবহার করে ২ থেকে ৪ দিনের মধ্যেই নির্ভুল কাজ সম্পন্ন করি।'
  },
  {
    question: 'What file formats can you deliver to me?',
    questionBn: 'আপনি কোন কোন ফরম্যাটে ফাইল ডেলিভারি দিতে পারেন?',
    answer: 'I can deliver in any requested format including Microsoft Excel (.xlsx, .xls, .xlsm with macros), Google Sheets (with live sharing access), CSV (UTF-8, comma or semicolon delimited), JSON, Word (.docx), or direct cloud sync into your CRM/Shopify store.',
    answerBn: 'আপনার চাহিদামতো যেকোনো ফরম্যাটে ফাইল দেওয়া সম্ভব: Microsoft Excel (.xlsx, .xls, .xlsm), Google Sheets (সরাসরি লাইভ লিংক), CSV (UTF-8), JSON, Word (.docx), অথবা সরাসরি আপনার Shopify বা CRM প্ল্যাটফর্মে আপলোড করে দেওয়া।'
  }
];

// Interactive Spreadsheet Raw vs Clean Dataset for the interactive demo
export interface SpreadsheetRow {
  id: string;
  clientRaw: {
    name: string;
    company: string;
    email: string;
    phone: string;
    revenue: string;
    state: string;
  };
  clientClean: {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    phone: string;
    revenueFormatted: string;
    stateCode: string;
    status: string;
  };
  issueFixed: string;
  issueFixedBn: string;
}

export const DEMO_SPREADSHEET_DATA: SpreadsheetRow[] = [
  {
    id: 'row-1',
    clientRaw: {
      name: '  jOHN  dOE ',
      company: 'acme corp. inc',
      email: 'John.Doe@@GMAIL..com',
      phone: '555.234.1111 ext 4',
      revenue: '45000',
      state: 'california'
    },
    clientClean: {
      firstName: 'John',
      lastName: 'Doe',
      company: 'Acme Corp Inc.',
      email: 'john.doe@gmail.com',
      phone: '+1 (555) 234-1111',
      revenueFormatted: '$45,000.00',
      stateCode: 'CA',
      status: 'Verified Valid'
    },
    issueFixed: 'Stripped trailing spaces, capitalized Proper Case, fixed double @@ in email, standardized US phone to E.164, formatted currency and state code.',
    issueFixedBn: 'অপ্রয়োজনীয় স্পেস দূরীকরণ, প্রপার কেস ফরম্যাটিং, ইমেইলের ডাবল @@ ঠিক করা, আন্তর্জাতিক ফোন ফরম্যাট ও কারেন্সি রূপান্তর।'
  },
  {
    id: 'row-2',
    clientRaw: {
      name: 'SARAH JENKINS',
      company: 'techflow solutions',
      email: 'sarah@techflow',
      phone: '(415)8902341',
      revenue: '$ 128,500.00',
      state: 'New York'
    },
    clientClean: {
      firstName: 'Sarah',
      lastName: 'Jenkins',
      company: 'TechFlow Solutions',
      email: 'sarah@techflow.io',
      phone: '+1 (415) 890-2341',
      revenueFormatted: '$128,500.00',
      stateCode: 'NY',
      status: 'Verified Valid'
    },
    issueFixed: 'Converted all-caps shouting into Title Case, resolved missing top-level domain for email (.io), formatted phone parenthesis and spacing, unified NY abbreviation.',
    issueFixedBn: 'সব বড় হাতের অক্ষরকে টাইটেল কেসে রূপান্তর, ইমেইলে বাদ পড়া ডোমেইন ফিক্স, ফোন নম্বরে ব্র্যাকেট ও স্পেসিং ঠিক করা।'
  },
  {
    id: 'row-3',
    clientRaw: {
      name: 'marcus  vance',
      company: 'NorthStar retail LLC',
      email: 'm.vance@northstar.com',
      phone: '312-456-7890',
      revenue: '85200',
      state: 'illinois'
    },
    clientClean: {
      firstName: 'Marcus',
      lastName: 'Vance',
      company: 'NorthStar Retail LLC',
      email: 'm.vance@northstar.com',
      phone: '+1 (312) 456-7890',
      revenueFormatted: '$85,200.00',
      stateCode: 'IL',
      status: 'Verified Valid'
    },
    issueFixed: 'Separated compound full name into distinct First and Last columns for CRM ingest, added +1 US country prefix, converted currency to numeric accounting format.',
    issueFixedBn: 'সিআরএম-এর জন্য পুরো নামকে ফার্স্ট নেইম ও লাস্ট নেইমে ভাগ করা, কান্ট্রি কোড (+১) যোগ ও কারেন্সি ফরম্যাটিং।'
  },
  {
    id: 'row-4',
    clientRaw: {
      name: 'elena rostova',
      company: 'BALTIC TRADE CO',
      email: 'elena@baltictrade.eu',
      phone: '0044 20 7946 0912',
      revenue: '65000.5',
      state: 'London (UK)'
    },
    clientClean: {
      firstName: 'Elena',
      lastName: 'Rostova',
      company: 'Baltic Trade Co.',
      email: 'elena@baltictrade.eu',
      phone: '+44 20 7946 0912',
      revenueFormatted: '$65,000.50',
      stateCode: 'UK',
      status: 'Verified Valid'
    },
    issueFixed: 'Standardized European international dialing notation from 0044 to +44, normalized acronym casing, rounded currency cents uniformly.',
    issueFixedBn: 'ইউরোপীয় ডায়ালিং কোড (0044 থেকে +44) স্ট্যান্ডার্ডাইজেশন, সেন্ট রাউন্ডিং এবং সুন্দরভাবে টেবিল তৈরি।'
  },
  {
    id: 'row-5',
    clientRaw: {
      name: '  dAvId   TaNaKa  ',
      company: 'kuroshio logistics',
      email: 'tanaka@kuroshio.jp',
      phone: '+81-3-5555-0143',
      revenue: '29800',
      state: 'tokyo'
    },
    clientClean: {
      firstName: 'David',
      lastName: 'Tanaka',
      company: 'Kuroshio Logistics',
      email: 'tanaka@kuroshio.jp',
      phone: '+81 3 5555 0143',
      revenueFormatted: '$29,800.00',
      stateCode: 'TK (JP)',
      status: 'Verified Valid'
    },
    issueFixed: 'Eliminated multi-space irregular indentation, properly formatted APAC regional dialing, formatted revenue as clean accounting figure.',
    issueFixedBn: 'অনিয়মিত স্পেস রিমুভ, এশিয়ান রিজিওনাল কোড ফরম্যাটিং ও রাজস্ব কলামে অ্যাকাউন্টিং স্টাইল প্রয়োগ।'
  }
];
