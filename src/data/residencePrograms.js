import canadaFlag from '../assets/flags/canada-flag.webp';
import canadaCountryImg from '../assets/country/canada-2.png';
import cyprusCountryImg from '../assets/country/_CYPRUS.png';
import greeceCountryImg from '../assets/country/greece.png';
import hungaryCountryImg from '../assets/country/hungry-.png';
import latviaCountryImg from '../assets/country/_LATVIA-.png';
import maltaCountryImg from '../assets/country/malta.png';
import panamaCountryImg from '../assets/country/_PANAMA.png';
import portugalCountryImg from '../assets/country/_PORTUGAL.png';
import switzerlandCountryImg from '../assets/country/switzerland-.png';
import thailandCountryImg from '../assets/country/thiland.png';
import uaeCountryImg from '../assets/country/_UAE.png';
import ukCountryImg from '../assets/country/uk-.png';
import usaCountryImg from '../assets/country/_USA.png';
import cyprusContactImg from '../assets/get-in-touch/_CYPRUS (1).png';
import greeceContactImg from '../assets/get-in-touch/GREECE-.png';
import hungaryContactImg from '../assets/get-in-touch/HUNGARY-.png';
import portugalContactImg from '../assets/get-in-touch/_PORTUGAL.png';
import switzerlandContactImg from '../assets/get-in-touch/_SWITZERLAND.png';
import canadaContactImg from '../assets/get-in-touch/canada.png';
import ukContactImg from '../assets/get-in-touch/london-eye-.png';
import thailandContactImg from '../assets/get-in-touch/thiland.png';
import maltaContactImg from '../assets/get-in-touch/MALTA.jpg.jpeg';
import panamaContactImg from '../assets/get-in-touch/PANAMA-.jpg.jpeg';
import uaeContactImg from '../assets/get-in-touch/Burj-Khalifa.jpg.jpeg';
import usaContactImg from '../assets/get-in-touch/usa.-.jpg.jpeg';
import cyprusFlag from '../assets/flags/cyprus-flag.jpg';
import greeceFlag from '../assets/flags/greece-flag.webp';
import hungaryFlag from '../assets/flags/hungary-flag.png';
import latviaFlag from '../assets/flags/latvia-flag.webp';
import maltaFlag from '../assets/flags/malta-flag.webp';
import panamaFlag from '../assets/flags/panama-flag.webp';
import portugalFlag from '../assets/flags/portugal-flag.webp';
import switzerlandFlag from '../assets/flags/switzerland-flag.webp';
import thailandFlag from '../assets/flags/thailand-flag.webp';
import uaeFlag from '../assets/flags/uae-flag.webp';
import unitedKingdomFlag from '../assets/flags/united-kingdom-flag.webp';
import usaFlag from '../assets/flags/usa-flag.jpg';

const makeFaqs = (questions, defaultAnswer) =>
  questions.map((question) => ({
    question,
    answer: defaultAnswer,
  }));

const residencePrograms = [
  {
    slug: 'canada',
    name: 'Canada',
    menuLabel: 'Canada',
    suspended: true,
    flag: canadaFlag,
    heroImage: canadaCountryImg,
    contactImage: canadaContactImg,
    categoryLabel: 'Residency by Investment',
    heroTitle: 'CANADA RESIDENCY BY INVESTMENT PROGRAM',
    heroDescription:
      "Build your future in one of the world's most respected and stable nations through the Start-Up Visa Programme.",
    stats: [
      { value: 'CAD 75,000', label: 'Min.\nInvestment' },
      { value: '12-16 Months', label: 'Processing\nTime' },
      { value: 'PR Status', label: 'Pathway\nOutcome' },
      { value: 'G7 Nation', label: 'Country\nStatus' },
    ],
    about: {
      title: 'About Canada',
      subtitle: 'The Land of Opportunity',
      description:
        "Canada is a G7 nation spanning the northern half of North America, celebrated for its extraordinary quality of life, political stability, and inclusive immigration policies. With world-ranked universities, universal healthcare, and consistently high rankings in global liveability indices, Canada attracts entrepreneurs, investors, and families from every continent.",
      secondaryDescription:
        "Canada's Start-Up Visa Programme is uniquely designed for innovative entrepreneurs, requiring a commitment from a designated venture capital fund, angel investor group, or business incubator.",
      highlights: [
        'G7 nation with world-ranked institutions',
        'Universal healthcare and strong social infrastructure',
        'Pathway to permanent residency and citizenship',
        'Welcoming multicultural society',
      ],
    },
    benefitsIntro:
      'Invest to secure residency and access world-class living standards, business access, and global mobility.',
    benefits: [
      {
        title: 'Permanent Residency Pathway',
        description:
          'The Start-Up Visa provides a direct route to Canadian permanent residency for qualifying entrepreneurs and their families.',
      },
      {
        title: 'World-Class Education',
        description:
          'Canada hosts globally ranked universities and public schools, offering exceptional educational opportunities for your children.',
      },
      {
        title: 'Universal Healthcare',
        description:
          "Permanent residents access Canada's publicly funded healthcare system, one of the most comprehensive in the world.",
      },
      {
        title: 'Pathway to Citizenship',
        description:
          'After three years of physical presence as a permanent resident, applicants may apply for full Canadian citizenship.',
      },
      {
        title: 'Family Inclusion',
        description:
          'A spouse and dependent children are included in the permanent residency application at no additional investment cost.',
      },
      {
        title: 'Visa-Free Travel',
        description:
          'Canadian passport holders enjoy visa-free or visa-on-arrival access to 185+ countries, among the strongest globally.',
      },
    ],
    processIntro:
      "This step-by-step process illustrates Canada's Start-Up Visa residency application journey.",
    processSteps: [
      'Initial Consultation',
      'Business Plan Preparation',
      'Designated Organisation Commitment',
      'Application Submission',
      'PR Approval',
      'Landing in Canada',
    ],
    requirementsSummary:
      'Applicants must meet English or French language requirements, present an innovative business concept, and secure a commitment from a designated Canadian organisation.',
    requirementsChecklist: [
      'Language proficiency (CLB 5 minimum)',
      'Designated organisation commitment letter',
      'Proof of sufficient settlement funds',
    ],
    qualificationDescription:
      'To qualify for the Canada Start-Up Visa, applicants must secure support from one of three designated organisation types:',
    qualificationOptions: [
      'Designated venture capital fund (CAD 200,000+)',
      'Designated angel investor group (CAD 75,000+)',
      'Designated business incubator (no investment required)',
    ],
    investment: {
      title: 'Investment Options for Canada Residency',
      description:
        "Canada's Start-Up Visa requires a financial commitment from a designated organisation rather than a direct government investment. Levels vary by organisation type.",
      stats: [
        { value: '75k', label: 'Angel Investor\nMin.' },
        { value: '200k', label: 'VC Fund\nMin.' },
        { value: '3 Years', label: 'PR to\nCitizenship' },
      ],
    },
    legalBasis:
      "Canada's Start-Up Visa Programme is governed by the Immigration and Refugee Protection Act and its associated regulations, administered by Immigration, Refugees and Citizenship Canada (IRCC). RK Global Immigration provides full guidance in compliance with all applicable UAE and Canadian regulatory requirements for every client engagement.",
    faqs: makeFaqs(
      [
        'What is the Canada Start-Up Visa Programme?',
        'How long does the Canadian PR process take?',
        'Can my family be included in the application?',
        'What language requirements apply?',
        'Can I apply for citizenship after permanent residency?',
        'What types of businesses qualify for the Start-Up Visa?',
      ],
      'The Canada Start-Up Visa supports innovative businesses with designated organisation backing; eligibility, timeline, and documentation are confirmed during our advisory assessment.'
    ),
  },
  {
    slug: 'cyprus',
    name: 'Cyprus',
    menuLabel: 'Cyprus',
    flag: cyprusFlag,
    heroImage: cyprusCountryImg,
    contactImage: cyprusContactImg,
    categoryLabel: 'Residency by Investment',
    heroTitle: 'CYPRUS RESIDENCY BY INVESTMENT PROGRAM',
    heroDescription:
      'An EU permanent residency permit from EUR 300,000, with one of the fastest processing timelines in Europe.',
    stats: [
      { value: 'EUR 300,000', label: 'Min.\nInvestment' },
      { value: '2 Months', label: 'Processing\nTime' },
      { value: 'EU Residency', label: 'Permit\nType' },
      { value: 'Lifetime PR', label: 'Permit\nDuration' },
    ],
    about: {
      title: 'About Cyprus',
      subtitle: "Europe's Eastern Mediterranean Gem",
      description:
        'Cyprus is an EU member state located in the northeastern Mediterranean Sea, offering a unique blend of European governance, Middle Eastern proximity, and British legal heritage. With over 340 days of sunshine annually, a highly educated English-speaking workforce, and a competitive corporate tax rate of 12.5%, Cyprus is consistently ranked among Europe\'s most attractive investment destinations.',
      secondaryDescription:
        'Cyprus permanent residency is granted for life, with no obligation to reside in the country, and may be extended to dependents and family members.',
      highlights: [
        'EU member state with 12.5% corporate tax',
        'Permanent residency granted for life',
        'No minimum stay requirement',
        'English widely spoken, British legal system',
      ],
    },
    benefitsIntro:
      'Invest to secure residency and access world-class living standards, business access, and global mobility.',
    benefits: [
      {
        title: 'Fastest EU PR in Europe',
        description:
          'Cyprus processes residency applications in approximately two months, the fastest EU permanent residency timeline available.',
      },
      {
        title: 'Lifetime Permit',
        description:
          'Cyprus permanent residency is granted for life with no renewal requirements, provided the investment is maintained.',
      },
      {
        title: 'EU Access Benefits',
        description:
          'Residency in an EU member state offers stability, legal certainty, and access to the European financial and business ecosystem.',
      },
      {
        title: 'Favourable Tax Regime',
        description:
          'Cyprus offers 12.5% corporate tax, zero dividend tax for non-domiciled residents, and no inheritance or wealth tax.',
      },
      {
        title: 'No Residency Obligation',
        description:
          'There is no minimum stay requirement. Applicants are required to visit Cyprus just once every two years to maintain status.',
      },
      {
        title: 'Family Coverage',
        description:
          'Spouse, children under 25, and parents of both applicant and spouse may be included in a single application.',
      },
    ],
    processIntro:
      "This step-by-step process illustrates Cyprus's permanent residency by investment application journey.",
    processSteps: [
      'Advisory Consultation',
      'Property Selection',
      'Investment Completion',
      'Application Submission',
      'Government Review',
      'Permit Issuance',
    ],
    requirementsSummary:
      'Applicants must be non-EU nationals aged 18 and above, with a clean criminal record and sufficient financial means to support themselves without employment in Cyprus.',
    requirementsChecklist: [
      'Clean criminal record required',
      'Proof of investment funds',
      'Annual income of EUR 30,000+ from abroad',
    ],
    qualificationDescription:
      'Investors may qualify for Cyprus permanent residency through a qualifying real estate investment:',
    qualificationOptions: [
      'Purchase of new residential property EUR 300,000+',
      'Property must be purchased from a developer (VAT-exclusive)',
      'Investment must be maintained for the duration of residency',
    ],
    investment: {
      title: 'Real Estate Investment Options for Cyprus Residency',
      description:
        'Cyprus residency is primarily secured through residential real estate in approved new developments, offering both permit access and strong investment fundamentals.',
      stats: [
        { value: '300k', label: 'Min.\nInvestment' },
        { value: '5%+', label: 'Rental\nYield' },
        { value: 'Lifetime', label: 'Permit\nDuration' },
      ],
    },
    legalBasis:
      "Cyprus's residency by investment programme is governed by Regulation 6(2) of the Aliens and Immigration Law, administered by the Civil Registry and Migration Department. RK Global Immigration ensures full legal compliance across all UAE and Cypriot regulatory requirements, preparing every application to the highest standard of documentary completeness.",
    faqs: makeFaqs(
      [
        'What is the minimum investment for Cyprus residency?',
        'How long does the Cyprus PR process take?',
        'Is there a minimum stay requirement in Cyprus?',
        'Can family members be included?',
        'What are the tax benefits of Cyprus residency?',
        'Can Cyprus residency lead to citizenship?',
      ],
      'Cyprus offers one of the fastest EU permanent residency pathways; exact eligibility, family inclusion, and long-term planning are confirmed during case assessment.'
    ),
  },
  {
    slug: 'greece',
    name: 'Greece',
    menuLabel: 'Greece',
    flag: greeceFlag,
    heroImage: greeceCountryImg,
    contactImage: greeceContactImg,
    categoryLabel: 'Residency by Investment',
    heroTitle: 'GREECE GOLDEN VISA PROGRAM',
    heroDescription:
      "Europe's most popular Golden Visa, from EUR 250,000, granting Schengen Area residency and visa-free travel.",
    stats: [
      { value: 'EUR 250,000', label: 'Min.\nInvestment' },
      { value: '2-3 Months', label: 'Processing\nTime' },
      { value: 'Schengen', label: 'Travel\nAccess' },
      { value: '5 Years', label: 'Renewable\nPermit' },
    ],
    about: {
      title: 'About Greece',
      subtitle: 'The Cradle of Civilisation',
      description:
        "Greece is a southern European EU member state with a rich 3,000-year history, a coastline stretching 13,676 kilometres, and an economy anchored in tourism, shipping, and real estate. As a full Schengen member, Greece provides residency holders with freedom of movement across 27 European countries, making it one of the most strategically valuable residency destinations in the world.",
      secondaryDescription:
        "Greece's property market continues to offer competitive values relative to Western European counterparts, while Schengen access remains its most compelling strategic advantage.",
      highlights: [
        'Full Schengen Area access for all residents',
        'No minimum stay requirement',
        'Path to EU citizenship after 7 years',
        'Thriving real estate market with strong yields',
      ],
    },
    benefitsIntro:
      'Invest to secure residency and access world-class living standards, business access, and global mobility.',
    benefits: [
      {
        title: 'Schengen Area Access',
        description:
          'Live and travel freely across all 27 Schengen countries with a Greece Golden Visa residency permit.',
      },
      {
        title: 'Lowest EU Entry Point',
        description:
          "At EUR 250,000, Greece offers the lowest qualifying investment of any Schengen residency programme in Europe.",
      },
      {
        title: 'No Minimum Stay',
        description:
          'There is no minimum residency requirement. Investors may live anywhere and still maintain their Greek permit.',
      },
      {
        title: '5-Year Renewable Permit',
        description:
          'The Golden Visa is issued for five years and renewable indefinitely, provided the investment is maintained.',
      },
      {
        title: 'Full Family Inclusion',
        description:
          'Spouse, children under 21, and parents of both applicant and spouse are included in a single application.',
      },
      {
        title: 'Path to EU Citizenship',
        description:
          'After seven years of residency, qualifying applicants may apply for full Greek and EU citizenship.',
      },
    ],
    processIntro:
      "This step-by-step process illustrates Greece's Golden Visa residency application journey.",
    processSteps: [
      'Advisory Consultation',
      'Property Selection',
      'Investment Completion',
      'Application Submission',
      'Biometrics Appointment',
      'Permit Issuance',
    ],
    requirementsSummary:
      'Applicants must be non-EU nationals aged 18 and above, with a clean criminal record and a qualifying real estate investment in Greece.',
    requirementsChecklist: [
      'Clean criminal record required',
      'Valid health insurance in Greece',
      'Proof of qualifying investment funds',
    ],
    qualificationDescription:
      "Investors may qualify for Greece's Golden Visa through the following approved investment routes:",
    qualificationOptions: [
      'Real estate investment of EUR 250,000+ (selected zones)',
      'Real estate investment of EUR 800,000 (Athens, Thessaloniki, islands)',
      'Government bonds or business investment alternatives',
    ],
    investment: {
      title: 'Real Estate Investment Options for Greece Golden Visa',
      description:
        "Greece's property market offers exceptional investment value relative to Western Europe, with strong rental yields in Athens, Thessaloniki, and the Greek islands.",
      stats: [
        { value: '250k', label: 'Min.\nInvestment' },
        { value: '4-7%', label: 'Rental\nYield' },
        { value: '5 Years', label: 'Permit\nDuration' },
      ],
    },
    legalBasis:
      "Greece's Golden Visa Programme is governed by Law 4251/2014 and subsequent amendments, administered by the Ministry of Migration and Asylum. RK Global Immigration ensures full compliance with applicable regulatory requirements in the UAE and Greece, with dedicated coordination with licensed Greek legal professionals throughout every client application.",
    faqs: makeFaqs(
      [
        'What is the minimum investment for the Greece Golden Visa?',
        'Does the Greece Golden Visa allow Schengen travel?',
        'Is there a minimum stay requirement in Greece?',
        'Which family members can be included?',
        'Can Greek residency lead to EU citizenship?',
        'What are the new higher investment thresholds?',
      ],
      'Greece Golden Visa criteria depend on location, investment route, and family profile; we confirm current thresholds and filing strategy case-by-case.'
    ),
  },
  {
    slug: 'hungary',
    name: 'Hungary',
    menuLabel: 'Hungary',
    flag: hungaryFlag,
    heroImage: hungaryCountryImg,
    contactImage: hungaryContactImg,
    categoryLabel: 'Residency by Investment',
    heroTitle: 'HUNGARY GUEST INVESTOR VISA PROGRAM',
    heroDescription:
      'A new EU residency pathway from EUR 250,000, offering 10-year renewable residence in the heart of Europe.',
    stats: [
      { value: 'EUR 250,000', label: 'Min.\nInvestment' },
      { value: '3-4 Months', label: 'Processing\nTime' },
      { value: 'Schengen', label: 'Travel\nAccess' },
      { value: '10 Years', label: 'Renewable\nPermit' },
    ],
    about: {
      title: 'About Hungary',
      subtitle: "Central Europe's Rising Investment Destination",
      description:
        "Hungary is a central European EU and Schengen member state with a rich cultural heritage, a rapidly modernising economy, and a low cost of living relative to Western Europe. Budapest, its capital, consistently ranks among Europe's most beautiful and liveable cities. Hungary's favourable tax regime and strategic location at the crossroads of East and West make it an increasingly popular destination for international investors.",
      secondaryDescription:
        "Hungary's Guest Investor Visa, launched in 2024, is one of the newest and most generous residency permits in Europe, offering a 10-year initial permit renewable for further 10-year periods.",
      highlights: [
        'EU and Schengen member state',
        '10-year renewable residency permit',
        'Low cost of living vs Western Europe',
        'Central European business hub',
      ],
    },
    benefitsIntro:
      'Invest to secure residency and access world-class living standards, business access, and global mobility.',
    benefits: [
      {
        title: '10-Year Permit',
        description:
          "Hungary's Guest Investor Visa offers a 10-year renewable permit, one of the longest initial residency terms in Europe.",
      },
      {
        title: 'Schengen Access',
        description:
          'Full freedom of movement across all 27 Schengen countries for permit holders and included family members.',
      },
      {
        title: 'Low Cost of Living',
        description:
          'Hungary offers a high quality of life at significantly lower costs than Western European capitals.',
      },
      {
        title: 'Fund-Based Investment',
        description:
          'Investment is made into a government-approved real estate fund rather than a direct property purchase, simplifying asset management.',
      },
      {
        title: 'Family Inclusion',
        description:
          "Spouse and dependent children may be included under the main applicant's Guest Investor Visa application.",
      },
      {
        title: 'Path to Permanent Residency',
        description:
          'Long-term Guest Investor Visa holders may qualify for permanent residency and eventual citizenship after meeting residency requirements.',
      },
    ],
    processIntro:
      "This step-by-step process illustrates Hungary's Guest Investor Visa application journey.",
    processSteps: [
      'Advisory Consultation',
      'Fund Selection',
      'Investment Completion',
      'Visa Application',
      'Government Review',
      'Permit Issuance',
    ],
    requirementsSummary:
      'Applicants must be non-EU nationals aged 18 and above, hold a clean criminal record, and complete a qualifying investment in an approved Hungarian real estate fund.',
    requirementsChecklist: [
      'Clean criminal record required',
      'Valid health insurance coverage',
      'Proof of qualifying investment funds',
    ],
    qualificationDescription:
      "Investors qualify for Hungary's Guest Investor Visa through one of three approved investment routes:",
    qualificationOptions: [
      'Real estate fund contribution of EUR 250,000+',
      'Residential property purchase of EUR 500,000+',
      'Donation to higher education institution EUR 1,000,000+',
    ],
    investment: {
      title: 'Investment Options for Hungary Guest Investor Visa',
      description:
        "Hungary's fund-based investment route simplifies asset management while providing access to a diversified real estate portfolio underpinned by the growing Budapest property market.",
      stats: [
        { value: '250k', label: 'Min. Fund\nInvestment' },
        { value: '10 Years', label: 'Initial\nPermit' },
        { value: '500k', label: 'Direct Property\nMin.' },
      ],
    },
    legalBasis:
      "Hungary's Guest Investor Visa is governed by Act XC of 2023 on the Entry and Residence of Third-Country Nationals, with investment requirements administered by the Hungarian National Bank and approved fund managers. RK Global Immigration provides full guidance and compliance management for all UAE and Hungarian regulatory requirements.",
    faqs: makeFaqs(
      [
        "When was Hungary's Guest Investor Visa launched?",
        'What is the minimum investment for Hungary residency?',
        'How long is the Hungarian residency permit valid?',
        'Does the Hungary visa give Schengen access?',
        'Can family members be included?',
        'Can Hungary residency lead to EU citizenship?',
      ],
      'Hungary offers multiple qualifying routes with different thresholds and outcomes; final structure depends on your selected pathway and profile.'
    ),
  },
  {
    slug: 'latvia',
    name: 'Latvia',
    menuLabel: 'Latvia',
    flag: latviaFlag,
    heroImage: latviaCountryImg,
    categoryLabel: 'Residency by Investment',
    heroTitle: 'LATVIA RESIDENCY BY INVESTMENT PROGRAM',
    heroDescription:
      'An affordable EU and Schengen residency from EUR 50,000, one of the lowest entry points in Europe.',
    stats: [
      { value: 'EUR 50,000', label: 'Min.\nInvestment' },
      { value: '1-3 Months', label: 'Processing\nTime' },
      { value: 'Schengen', label: 'Travel\nAccess' },
      { value: 'EU Member', label: 'Country\nStatus' },
    ],
    about: {
      title: 'About Latvia',
      subtitle: 'The Baltic Gateway to Europe',
      description:
        "Latvia is a Baltic EU and Schengen member state located on the eastern coast of the Baltic Sea. Known for its medieval old towns, pristine forests, and rapidly growing digital economy, Latvia is an affordable and increasingly attractive European residency destination. Riga, its capital, is one of the largest cities in the Baltic region and a growing hub for technology, finance, and international business.",
      secondaryDescription:
        "Latvia's residency by investment programme offers one of the lowest qualifying thresholds of any EU and Schengen residency programme, making it accessible to a wider range of qualified investors.",
      highlights: [
        'EU and Schengen member since 2004',
        "One of Europe's lowest RBI entry points",
        'Rapidly growing digital and tech economy',
        'Freedom of movement across Schengen Area',
      ],
    },
    benefitsIntro:
      'Invest to secure residency and access world-class living standards, business access, and global mobility.',
    benefits: [
      {
        title: 'Lowest EU RBI Entry',
        description:
          "At EUR 50,000, Latvia offers the lowest qualifying investment of any EU and Schengen residency programme in Europe.",
      },
      {
        title: 'Schengen Area Access',
        description:
          'Full freedom of movement across all 27 Schengen countries for permit holders and their dependents.',
      },
      {
        title: 'Fast Processing',
        description:
          "Latvia's residency applications are typically processed within one to three months of complete submission.",
      },
      {
        title: 'EU Member Benefits',
        description:
          'Residency in a full EU member state provides legal certainty, institutional stability, and European market access.',
      },
      {
        title: 'Affordable Cost of Living',
        description:
          'Latvia offers one of the lowest costs of living in the EU, with Riga providing a high quality of life at accessible prices.',
      },
      {
        title: 'Renewable Permit',
        description:
          'Latvia residency permits are renewable, providing a long-term European residency solution for qualifying investors.',
      },
    ],
    processIntro:
      "This step-by-step process illustrates Latvia's residency by investment application journey.",
    processSteps: [
      'Advisory Consultation',
      'Investment Selection',
      'Investment Completion',
      'Application Submission',
      'Government Review',
      'Permit Issuance',
    ],
    requirementsSummary:
      'Applicants must be non-EU nationals aged 18 and above, hold a clean criminal record, and complete a qualifying investment in an approved Latvian investment category.',
    requirementsChecklist: [
      'Clean criminal record required',
      'Valid health insurance coverage',
      'Proof of qualifying investment funds',
    ],
    qualificationDescription:
      'Investors may qualify for Latvian residency through one of the following approved investment routes:',
    qualificationOptions: [
      'Subordinated capital contribution EUR 50,000+',
      'Real estate investment in eligible regions',
      'Company capital investment with job creation',
    ],
    investment: {
      title: 'Investment Options for Latvia Residency',
      description:
        "Latvia's programme offers multiple investment routes at accessible thresholds, making it Europe's most affordable EU and Schengen residency by investment pathway.",
      stats: [
        { value: '50k', label: 'Min.\nInvestment' },
        { value: '1–3', label: 'Months\nProcessing' },
        { value: 'EU', label: 'Schengen\nAccess' },
      ],
    },
    legalBasis:
      "Latvia's residency by investment programme is governed by the Immigration Law of Latvia and administered by the Office of Citizenship and Migration Affairs. RK Global Immigration ensures full compliance with applicable regulatory requirements across the UAE and Latvia for every client application.",
    faqs: makeFaqs(
      [
        'What is the minimum investment for Latvia residency?',
        'How quickly is Latvia residency processed?',
        'Does Latvia residency grant Schengen Area access?',
        'What investment routes are available?',
        'Is there a minimum stay requirement in Latvia?',
        'Can family members be included in the application?',
      ],
      'Latvia provides a cost-efficient route to EU and Schengen residency through multiple approved investment structures, subject to eligibility checks.'
    ),
  },
  {
    slug: 'malta',
    name: 'Malta',
    menuLabel: 'Malta',
    flag: maltaFlag,
    heroImage: maltaCountryImg,
    contactImage: maltaContactImg,
    categoryLabel: 'Residency by Investment',
    heroTitle: 'MALTA PERMANENT RESIDENCY PROGRAM',
    heroDescription:
      'An EU permanent residency permit from EUR 150,000, offering lifetime status and Schengen Area access.',
    stats: [
      { value: 'EUR 150,000', label: 'Min.\nInvestment' },
      { value: '4-6 Months', label: 'Processing\nTime' },
      { value: 'Schengen', label: 'Travel\nAccess' },
      { value: 'Lifetime PR', label: 'Permit\nDuration' },
    ],
    about: {
      title: 'About Malta',
      subtitle: "Europe's Mediterranean Island Nation",
      description:
        "Malta is a small EU and Schengen island nation in the central Mediterranean Sea, renowned for its exceptional quality of life, English-speaking environment, stable political system, and business-friendly regulatory framework. With a population of 500,000 and a thriving financial services, iGaming, and technology sector, Malta punches significantly above its size as a global business hub.",
      secondaryDescription:
        "Malta's permanent residency permit is issued for life with no renewal requirements, provided the qualifying investment is maintained, making it one of Europe's most stable long-term residency solutions.",
      highlights: [
        'EU and Schengen member state',
        'English-speaking business environment',
        'Lifetime PR with no renewal required',
        'Strategic Mediterranean location',
      ],
    },
    benefitsIntro:
      'Invest to secure residency and access world-class living standards, business access, and global mobility.',
    benefits: [
      {
        title: 'Lifetime PR Status',
        description:
          "Malta's permanent residency is issued for life with no renewal, one of the most stable EU residency outcomes available.",
      },
      {
        title: 'Schengen Area Access',
        description:
          'Full freedom of movement across all 27 Schengen countries for permit holders and included dependents.',
      },
      {
        title: 'English-Speaking EU Nation',
        description:
          'Malta is one of only two official English-speaking EU member states, facilitating seamless business and daily life.',
      },
      {
        title: 'Favourable Tax Regime',
        description:
          "Malta's non-domiciled resident tax framework and flat-rate minimum tax offer significant advantages for internationally mobile investors.",
      },
      {
        title: 'Broad Family Coverage',
        description:
          'Spouse, unmarried children under 29, financially dependent parents, and grandparents may all be included.',
      },
      {
        title: 'Fast Processing',
        description:
          "Malta's MPRP is processed within four to six months by the Residency Malta Agency, one of Europe's most professional programme administrators.",
      },
    ],
    processIntro:
      'This step-by-step process illustrates the Malta Permanent Residence Programme application journey.',
    processSteps: [
      'Advisory Consultation',
      'Eligibility Assessment',
      'Investment Completion',
      'Application Submission',
      'Due Diligence Review',
      'Permit Issuance',
    ],
    requirementsSummary:
      'Applicants must be non-EU nationals aged 18 and above, hold a clean criminal record, and complete the required contribution, property, and insurance obligations.',
    requirementsChecklist: [
      'Clean criminal record required',
      'Health insurance covering EUR 30,000',
      'Minimum annual income of EUR 30,000 from abroad',
    ],
    qualificationDescription:
      'The Malta Permanent Residence Programme requires a combination of a government contribution, property commitment, and a donation:',
    qualificationOptions: [
      'Government contribution of EUR 58,000 (renting) or EUR 28,000 (buying)',
      'Property lease EUR 10,000/yr or purchase EUR 300,000+',
      'Donation of EUR 2,000 to a Malta-registered NGO',
    ],
    investment: {
      title: 'Investment Structure for Malta Permanent Residency',
      description:
        "Malta's programme combines a government contribution with a property requirement. The total minimum qualifying outlay is approximately EUR 150,000, depending on the property route selected.",
      stats: [
        { value: '150k', label: 'Min. Total\nOutlay' },
        { value: '4-6', label: 'Months\nProcessing' },
        { value: 'Lifetime', label: 'Permit\nDuration' },
      ],
    },
    legalBasis:
      'The Malta Permanent Residence Programme is governed by the Malta Permanent Residence Programme Regulations (LN 121 of 2021), administered by the Residency Malta Agency. RK Global Immigration provides full legal and compliance support for all UAE and Maltese regulatory requirements, ensuring every application meets the highest documentary standards.',
    faqs: makeFaqs(
      [
        'What is the minimum investment for Malta permanent residency?',
        'How long is the Malta PR permit valid?',
        'Does Malta PR include Schengen Area access?',
        'Which family members can be included?',
        'What is the difference between renting and buying for Malta MPRP?',
        'Can Malta permanent residency lead to citizenship?',
      ],
      'Malta MPRP has a structured investment framework with renting and buying routes; we advise on the most suitable path based on your profile.'
    ),
  },
  {
    slug: 'panama',
    name: 'Panama',
    menuLabel: 'Panama',
    flag: panamaFlag,
    heroImage: panamaCountryImg,
    contactImage: panamaContactImg,
    categoryLabel: 'Residency by Investment',
    heroTitle: 'PANAMA RESIDENCY BY INVESTMENT PROGRAM',
    heroDescription:
      'A highly accessible residency pathway from USD 300,000, with no minimum stay and a Pensionado programme.',
    stats: [
      { value: 'USD 300,000', label: 'Min.\nInvestment' },
      { value: '3-6 Months', label: 'Processing\nTime' },
      { value: 'Territorial Tax', label: 'Tax\nRegime' },
      { value: 'USD Economy', label: 'Currency' },
    ],
    about: {
      title: 'About Panama',
      subtitle: 'The Crossroads of the Americas',
      description:
        "Panama is a central American republic at the crossroads of North and South America, home to one of the world's most strategic waterways and a thriving international financial centre. With a stable economy anchored to the US dollar, a territorial tax system that exempts foreign income, and consistent GDP growth, Panama is Latin America's most investor-friendly jurisdiction.",
      secondaryDescription:
        "Panama's Pensionado programme is among the world's most generous retiree residency schemes, offering significant discounts across healthcare, entertainment, transport, and utilities.",
      highlights: [
        'US dollar-based economy',
        'Territorial tax, no tax on foreign income',
        'World-renowned Pensionado retiree programme',
        'No minimum stay requirement',
      ],
    },
    benefitsIntro:
      'Invest to secure residency and access world-class living standards, business access, and global mobility.',
    benefits: [
      {
        title: 'Territorial Tax System',
        description:
          'Panama taxes only locally sourced income. Foreign income, capital gains, and worldwide assets are entirely exempt.',
      },
      {
        title: 'USD Economy',
        description:
          "Panama's US dollar-denominated economy provides currency stability and eliminates foreign exchange risk for investors.",
      },
      {
        title: 'No Minimum Stay',
        description:
          "Panama's investor residency programmes do not require physical presence, enabling a fully flexible lifestyle.",
      },
      {
        title: 'Pensionado Benefits',
        description:
          'Retirees accessing the Pensionado programme receive substantial discounts across healthcare, travel, and lifestyle services.',
      },
      {
        title: 'Real Estate Investment',
        description:
          "Panama's property market offers strong investment fundamentals in Panama City and coastal resort areas.",
      },
      {
        title: 'Path to Citizenship',
        description:
          'After five years of residency, qualifying investors may apply for Panamanian citizenship and a passport.',
      },
    ],
    processIntro:
      "This step-by-step process illustrates Panama's residency by investment application journey.",
    processSteps: [
      'Advisory Consultation',
      'Investment Selection',
      'Property Purchase',
      'Application Submission',
      'Government Review',
      'Permit Issuance',
    ],
    requirementsSummary:
      "Applicants must be aged 18 and above, hold a clean criminal record, and complete a qualifying investment under one of Panama's approved residency investment categories.",
    requirementsChecklist: [
      'Clean criminal record required',
      'Proof of qualifying investment funds',
      'Valid passport from country of citizenship',
    ],
    qualificationDescription:
      "Investors may qualify for Panama residency through one of the following approved pathways:",
    qualificationOptions: [
      'Qualifying real estate investment USD 300,000+',
      'Reforestation investment USD 100,000+',
      'Qualified Investor Visa USD 160,000 in securities',
    ],
    investment: {
      title: 'Real Estate Investment Options for Panama Residency',
      description:
        "Panama City's modern skyline, island resorts, and Pacific coast developments offer a diverse range of qualifying real estate investments across lifestyle and income-generating categories.",
      stats: [
        { value: '300k', label: 'Min. RE\nInvestment' },
        { value: '4-6%', label: 'Rental\nYield' },
        { value: '5 Years', label: 'Path to\nCitizenship' },
      ],
    },
    legalBasis:
      "Panama's residency by investment programmes are governed by Executive Decree 320 of 2008 and subsequent amendments, administered by the National Immigration Service. RK Global Immigration ensures full compliance with all applicable UAE and Panamanian regulatory requirements for every client engagement.",
    faqs: makeFaqs(
      [
        'What is the minimum investment for Panama residency?',
        'What is the Pensionado programme?',
        'Is there a minimum stay requirement in Panama?',
        'What tax advantages does Panama offer?',
        'How long does the Panama RBI process take?',
        'Can Panama residency lead to citizenship?',
      ],
      'Panama provides flexible residency routes with tax and lifestyle advantages; programme fit depends on your objectives and eligibility profile.'
    ),
  },
  {
    slug: 'portugal',
    name: 'Portugal',
    menuLabel: 'Portugal',
    flag: portugalFlag,
    heroImage: portugalCountryImg,
    contactImage: portugalContactImg,
    categoryLabel: 'Residency by Investment',
    heroTitle: 'PORTUGAL GOLDEN VISA PROGRAM',
    heroDescription:
      "Europe's most popular Golden Visa, offering permanent residency and a pathway to EU citizenship from EUR 250,000.",
    stats: [
      { value: 'EUR 250,000', label: 'Min.\nInvestment' },
      { value: '6-8 Months', label: 'Processing\nTime' },
      { value: '7 Days/Year', label: 'Min.\nStay' },
      { value: '5 Years', label: 'Path to\nCitizenship' },
    ],
    about: {
      title: 'About Portugal',
      subtitle: "Europe's Atlantic Gateway",
      description:
        "Portugal is a western European EU member state situated at the Atlantic edge of the Iberian Peninsula. Consistently ranked among Europe's most liveable countries, Portugal offers a warm climate, world-class cuisine, low cost of living, and a welcoming, internationally-oriented culture. Its Golden Visa programme has attracted billions in foreign investment since its launch in 2012.",
      secondaryDescription:
        "Portugal's NHR (Non-Habitual Resident) tax regime provides a ten-year tax advantage for qualifying new residents, making it one of Europe's most fiscally attractive residency destinations.",
      highlights: [
        'EU member, pathway to EU citizenship in 5 years',
        'Only 7 days minimum stay per year',
        'NHR tax regime for 10 years',
        'Schengen Area access',
      ],
    },
    benefitsIntro:
      'Invest to secure residency and access world-class living standards, business access, and global mobility.',
    benefits: [
      {
        title: 'EU Citizenship Pathway',
        description:
          'After five years of Golden Visa residency, applicants may apply for full Portuguese and EU citizenship.',
      },
      {
        title: 'Minimal Stay Required',
        description:
          'Just seven days per year of physical presence is required to maintain the Golden Visa, providing maximum flexibility.',
      },
      {
        title: 'Schengen Area Access',
        description:
          'Freedom of movement across all 27 Schengen countries for Golden Visa holders and included family members.',
      },
      {
        title: 'NHR Tax Advantage',
        description:
          'Non-Habitual Resident status provides a 10-year tax benefit for qualifying new residents on eligible income streams.',
      },
      {
        title: 'Full Family Inclusion',
        description:
          'Spouse, children under 26, dependent parents, and siblings under 18 may all be included under one application.',
      },
      {
        title: 'Strong Property Market',
        description:
          'Lisbon, Porto, and the Algarve continue to offer strong investment fundamentals and long-term capital appreciation.',
      },
    ],
    processIntro:
      "This step-by-step process illustrates Portugal's Golden Visa residency application journey.",
    processSteps: [
      'Advisory Consultation',
      'Investment Selection',
      'Investment Completion',
      'AIMA Application',
      'Biometrics Appointment',
      'Permit Issuance',
    ],
    requirementsSummary:
      'Applicants must be non-EU nationals aged 18 and above, with a clean criminal record, and complete a qualifying investment under one of the approved Golden Visa categories.',
    requirementsChecklist: [
      'Clean criminal record required',
      'Valid NIF (Portuguese tax number)',
      'Proof of qualifying investment funds',
    ],
    qualificationDescription:
      "Investors may qualify for Portugal's Golden Visa through the following approved investment routes:",
    qualificationOptions: [
      'Investment fund contribution EUR 500,000+',
      'Job creation (10+ full-time jobs)',
      'Capital transfer EUR 1,500,000+',
    ],
    investment: {
      title: 'Investment Options for Portugal Golden Visa',
      description:
        "Following Portugal's 2023 Golden Visa reform, eligible investment routes now focus on fund contributions, capital transfers, and job creation rather than direct real estate purchases.",
      stats: [
        { value: '500k', label: 'Min. Fund\nInvestment' },
        { value: '7 Days', label: 'Min. Annual\nStay' },
        { value: '5 Years', label: 'Path to\nCitizenship' },
      ],
    },
    legalBasis:
      "Portugal's Golden Visa Programme is governed by Law 23/2007 and subsequent amendments, administered by AIMA (Agency for Integration, Migration and Asylum). RK Global Immigration ensures full compliance with all applicable UAE and Portuguese regulatory requirements, coordinating with authorised Portuguese legal professionals for every client engagement.",
    faqs: makeFaqs(
      [
        "What investment routes are available for Portugal's Golden Visa?",
        'How long do I need to stay in Portugal each year?',
        'When can I apply for Portuguese citizenship?',
        'Can my family be included in the application?',
        "What is Portugal's NHR tax regime?",
        "Has Portugal's Golden Visa programme changed recently?",
      ],
      'Portugal route eligibility depends on latest legal framework and applicant profile; we advise on the current compliant path for each case.'
    ),
  },
  {
    slug: 'switzerland',
    name: 'Switzerland',
    menuLabel: 'Switzerland',
    flag: switzerlandFlag,
    heroImage: switzerlandCountryImg,
    contactImage: switzerlandContactImg,
    categoryLabel: 'Residency by Investment',
    heroTitle: 'SWITZERLAND RESIDENCY BY INVESTMENT PROGRAM',
    heroDescription:
      'A prestigious Swiss residency permit through lump-sum taxation, available from CHF 250,000 annually.',
    stats: [
      { value: 'CHF 250,000', label: 'Min. Annual\nTax' },
      { value: '3-6 Months', label: 'Processing\nTime' },
      { value: 'Lump-Sum Tax', label: 'Tax\nRegime' },
      { value: 'B Permit', label: 'Residency\nType' },
    ],
    about: {
      title: 'About Switzerland',
      subtitle: 'Prestige, Privacy, and Stability',
      description:
        "Switzerland is a landlocked central European nation renowned globally for its political neutrality, banking privacy, exceptional quality of life, and extraordinary natural landscape. Home to international institutions, world-class medical facilities, and elite educational institutions, Switzerland consistently ranks at the top of global quality of life and competitiveness indices.",
      secondaryDescription:
        "Switzerland is not an EU member, but maintains bilateral agreements with the EU and the Schengen Area, providing residents with considerable mobility and access across Europe.",
      highlights: [
        "World's most stable political and financial system",
        'Lump-sum taxation for qualifying foreign residents',
        'Schengen Area access via bilateral agreements',
        'Top-ranked healthcare, education, and infrastructure',
      ],
    },
    benefitsIntro:
      'Invest to secure residency and access world-class living standards, business access, and global mobility.',
    benefits: [
      {
        title: 'Lump-Sum Taxation',
        description:
          "Switzerland's forfait fiscal regime allows qualifying residents to pay a fixed annual tax based on living expenses, not worldwide income.",
      },
      {
        title: 'World-Class Privacy',
        description:
          "Switzerland's legal framework offers exceptional financial privacy and asset protection for internationally mobile residents.",
      },
      {
        title: 'Schengen Mobility',
        description:
          "Switzerland's bilateral agreements provide residents with freedom of movement across Schengen Europe.",
      },
      {
        title: 'Political Neutrality',
        description:
          "Switzerland's consistent political neutrality and institutional stability make it one of the world's most secure long-term residency bases.",
      },
      {
        title: 'Elite Education',
        description:
          'Home to ETH Zurich, EPFL, and a network of world-ranked schools and universities for residents and their families.',
      },
      {
        title: 'Healthcare Excellence',
        description:
          "Switzerland's healthcare system is consistently ranked among the world's finest, accessible to all registered residents.",
      },
    ],
    processIntro:
      "This step-by-step process illustrates Switzerland's lump-sum residency application journey.",
    processSteps: [
      'Advisory Consultation',
      'Canton Selection',
      'Tax Negotiation',
      'Application Submission',
      'Government Review',
      'Permit Issuance',
    ],
    requirementsSummary:
      'Applicants must be non-Swiss non-EU nationals who are not gainfully employed in Switzerland, and must agree to a lump-sum tax arrangement with their chosen canton.',
    requirementsChecklist: [
      'No employment in Switzerland permitted',
      'Minimum annual lump-sum tax negotiated with canton',
      'Proof of financial means to support residency',
    ],
    qualificationDescription:
      'Qualifying for Swiss lump-sum residency involves negotiating a fixed annual tax arrangement with the relevant cantonal tax authority:',
    qualificationOptions: [
      'Annual lump-sum tax of CHF 250,000+ (federal minimum)',
      'Cantonal requirements vary, typically higher in premium cantons',
      'No Swiss employment or business income permitted',
    ],
    investment: {
      title: 'Swiss Lump-Sum Tax Residency Investment Structure',
      description:
        "Unlike other residency programmes, Switzerland's lump-sum regime involves an ongoing annual tax commitment rather than a one-time capital investment. Premium cantons such as Geneva and Zurich require significantly higher annual amounts.",
      stats: [
        { value: '250k', label: 'Min. Annual\nTax (CHF)' },
        { value: '3-6', label: 'Months\nProcessing' },
        { value: 'B Permit', label: 'Residency\nType' },
      ],
    },
    legalBasis:
      "Switzerland's lump-sum taxation residency is governed by the Federal Tax Harmonisation Act and individual cantonal tax laws. Arrangements are negotiated with and administered by the relevant cantonal tax authority. RK Global Immigration provides full advisory services in compliance with applicable UAE and Swiss regulatory requirements.",
    faqs: makeFaqs(
      [
        "What is Switzerland's lump-sum taxation regime?",
        'What is the minimum annual tax for Swiss residency?',
        'Can I work in Switzerland on a lump-sum residency?',
        'Which Swiss cantons offer lump-sum taxation?',
        'Does Swiss residency include Schengen access?',
        'Can family members be included in the application?',
      ],
      'Swiss lump-sum residency is a premium route with canton-specific terms; eligibility and annual tax obligations are assessed individually.'
    ),
  },
  {
    slug: 'thailand',
    name: 'Thailand',
    menuLabel: 'Thailand',
    flag: thailandFlag,
    heroImage: thailandCountryImg,
    contactImage: thailandContactImg,
    categoryLabel: 'Residency by Investment',
    heroTitle: 'THAILAND LONG-TERM RESIDENT VISA PROGRAM',
    heroDescription:
      "A 10-year renewable residency permit in Southeast Asia's most vibrant destination, from USD 250,000.",
    stats: [
      { value: 'USD 250,000', label: 'Min.\nInvestment' },
      { value: '1-3 Months', label: 'Processing\nTime' },
      { value: '10 Years', label: 'Renewable\nPermit' },
      { value: 'Tax Incentives', label: 'Key\nBenefit' },
    ],
    about: {
      title: 'About Thailand',
      subtitle: 'The Land of Smiles',
      description:
        "Thailand is a Southeast Asian nation of 70 million people, celebrated globally for its exceptional cuisine, cultural richness, warm hospitality, world-class medical facilities, and consistently low cost of living. Bangkok consistently ranks among Asia's top destinations for expatriates, digital nomads, and retirees, offering a metropolitan lifestyle at a fraction of Western costs.",
      secondaryDescription:
        "Thailand's LTR Visa, launched in 2022, is specifically designed to attract wealthy global citizens, retirees, and remote workers by offering long-term stability and meaningful tax advantages.",
      highlights: [
        '10-year renewable residency permit',
        'Tax exemption on foreign-sourced income',
        'World-class medical facilities and wellness',
        'Low cost of living with high quality of life',
      ],
    },
    benefitsIntro:
      'Invest to secure residency and access world-class living standards, business access, and global mobility.',
    benefits: [
      {
        title: '10-Year Renewable Permit',
        description:
          "Thailand's LTR Visa is issued for ten years and renewable, one of Asia's most stable long-term residency solutions.",
      },
      {
        title: 'Foreign Income Tax Exemption',
        description:
          'LTR Visa holders are exempt from Thai personal income tax on foreign-sourced income remitted to Thailand.',
      },
      {
        title: 'World-Class Healthcare',
        description:
          "Thailand's private medical facilities are internationally accredited and consistently ranked among Asia's finest.",
      },
      {
        title: 'Low Cost of Living',
        description:
          'Thailand offers an exceptional quality of life at a significantly lower cost than comparable Western or Gulf destinations.',
      },
      {
        title: 'Family Inclusion',
        description:
          'A spouse and up to four dependents may be included under the main LTR Visa holder\'s application.',
      },
      {
        title: 'Fast Processing',
        description:
          'LTR Visa applications are typically processed within one to three months through the Board of Investment.',
      },
    ],
    processIntro:
      "This step-by-step process illustrates Thailand's Long-Term Resident Visa application journey.",
    processSteps: [
      'Advisory Consultation',
      'Eligibility Review',
      'Investment Completion',
      'BOI Application',
      'Government Review',
      'Visa Issuance',
    ],
    requirementsSummary:
      'Applicants must meet minimum income, investment, or asset thresholds depending on the LTR Visa category applied for. Four distinct categories are available.',
    requirementsChecklist: [
      'Clean criminal record required',
      'Valid health insurance (USD 40,000 coverage min.)',
      'Proof of qualifying income or investment',
    ],
    qualificationDescription:
      "Thailand's LTR Visa has four qualifying categories, each with distinct requirements:",
    qualificationOptions: [
      'Wealthy Global Citizen: USD 1M assets + USD 250K investment',
      'Wealthy Pensioner: USD 80K annual income or USD 250K deposit',
      'Remote Worker: USD 80K annual income from abroad',
    ],
    investment: {
      title: 'Investment Options for Thailand LTR Visa',
      description:
        "Thailand's Wealthy Global Citizen LTR route requires a qualifying investment in Thai government bonds, BOI-promoted companies, or Thai real estate, providing both residency and investment returns.",
      stats: [
        { value: '250k', label: 'Min.\nInvestment' },
        { value: '10 Years', label: 'Permit\nDuration' },
        { value: '80k', label: 'Min. Annual\nIncome' },
      ],
    },
    legalBasis:
      "Thailand's Long-Term Resident Visa programme is governed by the Royal Decree on Long-Term Resident Visa (2022) and administered by the Board of Investment of Thailand. RK Global Immigration provides full advisory and compliance services for all UAE and Thai regulatory requirements applicable to each LTR Visa category.",
    faqs: makeFaqs(
      [
        "What is Thailand's Long-Term Resident Visa?",
        'What is the minimum investment for the LTR Visa?',
        'What are the tax benefits of the Thailand LTR Visa?',
        'How long is the Thailand LTR Visa valid?',
        'Can family members be included?',
        'What are the different LTR Visa categories?',
      ],
      'Thailand LTR eligibility depends on category-specific income, asset, and investment criteria; we structure the right route based on your profile.'
    ),
  },
  {
    slug: 'uae',
    name: 'UAE',
    menuLabel: 'UAE Golden Visa',
    flag: uaeFlag,
    heroImage: uaeCountryImg,
    contactImage: uaeContactImg,
    categoryLabel: 'Residency by Investment',
    heroTitle: 'UAE GOLDEN VISA PROGRAM',
    heroDescription:
      "A 10-year renewable residency permit in the world's most dynamic business and lifestyle hub, from AED 2,000,000.",
    stats: [
      { value: 'AED 2,000,000', label: 'Min. Property\nValue' },
      { value: '2-4 Weeks', label: 'Processing\nTime' },
      { value: '10 Years', label: 'Renewable\nPermit' },
      { value: '0% Income Tax', label: 'Tax\nRegime' },
    ],
    about: {
      title: 'About the UAE',
      subtitle: "The World's Premier Business Hub",
      description:
        "The United Arab Emirates is a federation of seven emirates situated at the crossroads of Europe, Asia, and Africa. With a zero personal income tax environment, world-class infrastructure, a thriving international business community, and an unrivalled lifestyle offering, the UAE is consistently ranked among the world's top destinations for high-net-worth individuals, entrepreneurs, and global families.",
      secondaryDescription:
        "As the home of RK Global Immigration, we offer unmatched local expertise on the UAE Golden Visa, supporting clients across every emirate and every qualifying investor category.",
      highlights: [
        'Zero personal income tax',
        '10-year renewable residency permit',
        'World-class infrastructure and connectivity',
        'Strategic hub between Europe, Asia, and Africa',
      ],
    },
    benefitsIntro:
      'Invest to secure residency and access world-class living standards, business access, and global mobility.',
    benefits: [
      {
        title: '10-Year Renewable Permit',
        description:
          'The UAE Golden Visa is issued for ten years and renewable indefinitely, providing the most stable long-term residency in the Gulf.',
      },
      {
        title: 'Zero Income Tax',
        description:
          'The UAE imposes no personal income tax, capital gains tax, or wealth tax, delivering exceptional financial advantages.',
      },
      {
        title: 'Global Connectivity',
        description:
          'Dubai and Abu Dhabi offer among the world\'s best-connected airports, with direct routes to every major global city.',
      },
      {
        title: 'Business Hub Access',
        description:
          'Free zones, business-friendly regulations, and a growing startup ecosystem make the UAE a premier global business base.',
      },
      {
        title: 'Full Family Coverage',
        description:
          "Spouse, children, and domestic staff may be sponsored under the Golden Visa holder's permit at no additional investment.",
      },
      {
        title: 'RK Global Expertise',
        description:
          'As a Dubai-based firm, RK Global Immigration provides unmatched on-the-ground UAE Golden Visa expertise and advisory support.',
      },
    ],
    processIntro:
      'This step-by-step process illustrates the UAE Golden Visa residency application journey.',
    processSteps: [
      'Initial Consultation',
      'Eligibility Assessment',
      'Document Preparation',
      'Application Submission',
      'Emirates ID Issuance',
      'Visa Stamping',
    ],
    requirementsSummary:
      'UAE Golden Visa applicants must meet one of several qualifying criteria, including property ownership, business investment, or professional classification under approved government categories.',
    requirementsChecklist: [
      'Property valued at AED 2,000,000+ (or mortgage equivalent)',
      'Clean criminal record and valid medical fitness',
      'Valid passport and proof of qualifying status',
    ],
    qualificationDescription:
      'The UAE Golden Visa is available through multiple qualifying investor and professional categories:',
    qualificationOptions: [
      'Real estate ownership AED 2,000,000+',
      'Business investor or entrepreneur route',
      'Outstanding talent or specialist professional',
    ],
    investment: {
      title: 'Real Estate and Investment Options for UAE Golden Visa',
      description:
        "Dubai and Abu Dhabi's real estate markets offer a broad range of Golden Visa-qualifying properties across residential, commercial, and luxury categories with strong rental yields.",
      stats: [
        { value: '2M AED', label: 'Min. Property\nValue' },
        { value: '5-8%', label: 'Rental\nYield' },
        { value: '10 Years', label: 'Permit\nDuration' },
      ],
    },
    legalBasis:
      "The UAE Golden Visa is governed by Federal Decree-Law No. 6 of 2018 on Foreign Ownership of Investment, as amended, and administered by the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP). RK Global Immigration operates from Dubai with full regulatory compliance and deep institutional knowledge of the UAE Golden Visa framework.",
    faqs: makeFaqs(
      [
        'What is the minimum investment for the UAE Golden Visa?',
        'How long does UAE Golden Visa processing take?',
        'Can family members be included in the UAE Golden Visa?',
        'What are the tax advantages of the UAE Golden Visa?',
        'What property types qualify for the UAE Golden Visa?',
        'Can I hold a business and a UAE Golden Visa simultaneously?',
      ],
      'UAE Golden Visa eligibility depends on category and supporting documentation; our team confirms the fastest compliant route for your case.'
    ),
  },
  {
    slug: 'united-kingdom',
    name: 'United Kingdom',
    menuLabel: 'United Kingdom',
    flag: unitedKingdomFlag,
    heroImage: ukCountryImg,
    contactImage: ukContactImg,
    categoryLabel: 'Residency by Investment',
    heroTitle: 'UNITED KINGDOM INNOVATOR FOUNDER VISA PROGRAM',
    heroDescription:
      "Build an innovative UK business and secure residency in one of the world's most influential global economies.",
    stats: [
      { value: 'No Min.', label: 'Investment\nThreshold' },
      { value: '3-6 Months', label: 'Processing\nTime' },
      { value: '3 Years', label: 'Path to\nILR' },
      { value: 'Top 5 Economy', label: 'Country\nStatus' },
    ],
    about: {
      title: 'About the United Kingdom',
      subtitle: 'Global Finance, Law, and Culture',
      description:
        "The United Kingdom is one of the world's five largest economies, a permanent UN Security Council member, and a global centre for finance, law, education, and culture. Home to world-ranked universities, the City of London financial district, and a legal system that underpins much of the world's commercial law, the UK remains one of the most strategically valuable residency destinations globally.",
      secondaryDescription:
        "Following Brexit, UK residency no longer provides automatic EU access, but the British passport remains among the world's strongest, with visa-free access to 186+ countries.",
      highlights: [
        'Top 5 global economy',
        'Path to ILR and citizenship in 3-5 years',
        'World-ranked universities and schools',
        'Global financial and legal hub',
      ],
    },
    benefitsIntro:
      'Invest to secure residency and access world-class living standards, business access, and global mobility.',
    benefits: [
      {
        title: 'No Minimum Investment',
        description:
          'The Innovator Founder Visa has no minimum capital requirement, making it accessible to a wide range of entrepreneurs.',
      },
      {
        title: '3-Year Path to ILR',
        description:
          'Successful applicants may apply for Indefinite Leave to Remain after just three years, among the fastest routes in Europe.',
      },
      {
        title: 'World-Ranked Education',
        description:
          "Access to the UK's outstanding university and school system for residents and their dependent children.",
      },
      {
        title: 'Global Business Hub',
        description:
          "London's financial district and startup ecosystem provide unrivalled access to capital, talent, and international markets.",
      },
      {
        title: 'Family Inclusion',
        description:
          'A spouse and dependent children may be included in the Innovator Founder Visa application without a separate financial requirement.',
      },
      {
        title: 'Pathway to British Citizenship',
        description:
          'After six years of residency, qualifying applicants may apply for full British citizenship and a highly respected global passport.',
      },
    ],
    processIntro:
      "This step-by-step process illustrates the UK Innovator Founder Visa residency application journey.",
    processSteps: [
      'Advisory Consultation',
      'Business Plan Development',
      'Endorsing Body Application',
      'Home Office Application',
      'Biometrics',
      'Visa Issuance',
    ],
    requirementsSummary:
      'Applicants must have an innovative, viable, and scalable business idea endorsed by a UK Home Office-approved endorsing body, along with sufficient funds to support themselves.',
    requirementsChecklist: [
      'Endorsing body approval required',
      'GBP 945 maintenance funds minimum',
      'English language proficiency (B2 level)',
    ],
    qualificationDescription:
      'To qualify for the UK Innovator Founder Visa, applicants must meet the following core requirements:',
    qualificationOptions: [
      'Approval from a UK Home Office-endorsed body',
      'Innovative, viable, and scalable business concept',
      'English language at B2 level or above',
    ],
    investment: {
      title: 'Investment and Business Options for UK Residency',
      description:
        'The UK Innovator Founder Visa does not require a minimum capital investment. The primary qualifying factor is the quality, scalability, and innovation of the proposed business concept.',
      stats: [
        { value: 'No Min.', label: 'Investment\nRequired' },
        { value: '3 Years', label: 'Path to\nILR' },
        { value: '186+', label: 'Visa-Free\nCountries' },
      ],
    },
    legalBasis:
      'The UK Innovator Founder Visa is governed by the Immigration Rules, Part 5, administered by the UK Home Office. RK Global Immigration provides comprehensive advisory support in full compliance with applicable UAE and UK regulatory requirements, including coordination with UK-based legal professionals and endorsing body liaisons.',
    faqs: makeFaqs(
      [
        'What is the UK Innovator Founder Visa?',
        'Is there a minimum investment requirement for the UK visa?',
        'What is Indefinite Leave to Remain?',
        'How do I get an endorsing body approval?',
        'Can my family be included in the UK application?',
        'How long until I can apply for British citizenship?',
      ],
      'UK founder residency is endorsement-led and business-quality focused; we support strategy, endorsing body preparation, and full filing workflow.'
    ),
  },
  {
    slug: 'usa',
    name: 'USA',
    menuLabel: 'USA EB-5',
    flag: usaFlag,
    heroImage: usaCountryImg,
    contactImage: usaContactImg,
    categoryLabel: 'Residency by Investment',
    heroTitle: 'USA EB-5 INVESTOR VISA PROGRAM',
    heroDescription:
      'A direct path to US permanent residency through a job-creating investment from USD 800,000.',
    stats: [
      { value: 'USD 800,000', label: 'Min. TEA\nInvestment' },
      { value: 'USD 1,050,000', label: 'Standard\nInvestment' },
      { value: '18-24 Months', label: 'Processing\nTime' },
      { value: 'Green Card', label: 'Outcome' },
    ],
    about: {
      title: 'About the United States of America',
      subtitle: "The World's Largest Economy",
      description:
        "The United States is the world's largest economy, a permanent UN Security Council member, and home to the most influential capital markets, technology companies, and educational institutions globally. A US Green Card provides permanent residency with full rights to live, work, and study anywhere in the country, and is widely regarded as one of the world's most valuable residency documents.",
      secondaryDescription:
        "The EB-5 programme is administered by USCIS and has been the primary investment-based Green Card pathway for international investors since its establishment in 1990.",
      highlights: [
        "World's largest economy",
        'Green Card allows work anywhere in the US',
        'Pathway to US citizenship after 5 years',
        'Access to world-ranked universities and schools',
      ],
    },
    benefitsIntro:
      'Invest to secure residency and access world-class living standards, business access, and global mobility.',
    benefits: [
      {
        title: 'Permanent Green Card',
        description:
          'The EB-5 programme delivers US permanent residency, granting full rights to live, work, and study in the United States.',
      },
      {
        title: 'Path to US Citizenship',
        description:
          'After five years of permanent residency, EB-5 investors may apply for full US citizenship and a highly valued passport.',
      },
      {
        title: 'World-Class Education',
        description:
          "Green Card holders access the US's world-ranked university system at domestic tuition rates for themselves and their children.",
      },
      {
        title: 'Family Coverage',
        description:
          'Spouse and unmarried children under 21 are automatically included in the EB-5 petition at no additional investment cost.',
      },
      {
        title: 'Regional Centre Route',
        description:
          'The Regional Centre Programme allows passive investment, removing the need for direct business involvement or management.',
      },
      {
        title: 'Visa-Free US Passport',
        description:
          'After citizenship, holders receive one of the world\'s most powerful passports with visa-free access to 186+ countries.',
      },
    ],
    processIntro:
      'This step-by-step process illustrates the US EB-5 investor visa and Green Card application journey.',
    processSteps: [
      'Advisory Consultation',
      'Project Selection',
      'Capital Investment',
      'I-526 Petition Filing',
      'Consular Processing',
      'Green Card Issuance',
    ],
    requirementsSummary:
      'EB-5 applicants must make a qualifying capital investment, demonstrate a lawful source of funds, and ensure the investment creates at least ten full-time US jobs.',
    requirementsChecklist: [
      'Minimum USD 800,000 (TEA) or USD 1,050,000 investment',
      'Documented lawful source of funds required',
      'Creation of 10 full-time US jobs per investor',
    ],
    qualificationDescription:
      'Investors may participate in the EB-5 programme through one of two routes:',
    qualificationOptions: [
      'Regional Centre Programme (passive investment route)',
      'Direct investment in a new commercial enterprise',
      'TEA designation reduces minimum to USD 800,000',
    ],
    investment: {
      title: 'Investment Options for US EB-5 Green Card',
      description:
        'The EB-5 Regional Centre Programme allows investors to place capital passively in USCIS-approved projects, eliminating the need to manage a business directly while fulfilling job creation requirements.',
      stats: [
        { value: '800k', label: 'Min. TEA\nInvestment' },
        { value: '10 Jobs', label: 'Required Job\nCreation' },
        { value: '5 Years', label: 'Path to\nCitizenship' },
      ],
    },
    legalBasis:
      'The EB-5 Immigrant Investor Programme is governed by the Immigration and Nationality Act Section 203(b)(5) and administered by US Citizenship and Immigration Services (USCIS). The EB-5 Reform and Integrity Act of 2022 introduced significant programme updates. RK Global Immigration provides full advisory compliance for all UAE and US regulatory requirements applicable to EB-5 investors.',
    faqs: makeFaqs(
      [
        'What is the minimum investment for the US EB-5 visa?',
        'What is the difference between a TEA and non-TEA investment?',
        'How long does the EB-5 Green Card process take?',
        'Can my family be included in the EB-5 petition?',
        'What is a Regional Centre and how does it work?',
        'When can I apply for US citizenship after receiving a Green Card?',
      ],
      'EB-5 strategy depends on project type, TEA status, source-of-funds profile, and family goals; we provide end-to-end structuring and filing guidance.'
    ),
  },
];

export const residenceProgramMap = Object.fromEntries(
  residencePrograms.map((program) => [program.slug, program])
);

export const defaultResidenceSlug = residencePrograms[0]?.slug || 'canada';

export default residencePrograms;