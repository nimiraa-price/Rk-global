import greeceFlag from '../assets/flags/greece-flag.webp';
import maltaFlag from '../assets/flags/malta-flag.webp';
import portugalFlag from '../assets/flags/portugal-flag.webp';
import spainFlag from '../assets/flags/spain-flag.svg';

import greeceCountryImg from '../assets/country/greece.png';
import maltaCountryImg from '../assets/country/malta.png';
import portugalCountryImg from '../assets/country/_PORTUGAL.png';

import greeceContactImg from '../assets/get-in-touch/GREECE-.png';
import maltaContactImg from '../assets/get-in-touch/MALTA.jpg.jpeg';
import portugalContactImg from '../assets/get-in-touch/_PORTUGAL.png';

const buildProgram = ({
  slug,
  name,
  menuLabel,
  flag,
  heroImage,
  contactImage,
  heroTitle,
  heroDescription,
  stats,
  about,
  benefitsIntro,
  benefits,
  processIntro,
  processSteps,
  requirementsSummary,
  requirementsChecklist,
  qualificationDescription,
  qualificationOptions,
  qualificationOptionsTitle = 'Eligible Dependents',
  investment,
  legalBasis,
  faqs,
}) => ({
  slug,
  name,
  menuLabel,
  flag,
  heroImage,
  contactImage,
  categoryLabel: 'Digital Nomad',
  heroTitle,
  heroDescription,
  stats,
  about,
  benefitsIntro,
  benefits,
  processIntro,
  processSteps,
  requirementsSummary,
  requirementsChecklist,
  qualificationDescription,
  qualificationOptionsTitle,
  qualificationOptions,
  investment,
  legalBasis,
  faqs,
});

const digitalNomadPrograms = [
  buildProgram({
    slug: 'greece-fip-visa',
    name: 'Greece FIP Visa',
    menuLabel: 'Greece FIP Visa',
    flag: greeceFlag,
    heroImage: greeceCountryImg,
    contactImage: greeceContactImg,
    heroTitle: 'GREECE FINANCIALLY INDEPENDENT PERSON (FIP) VISA',
    heroDescription:
      'Greece offers non-EU nationals a straightforward residency pathway based purely on financial independence, with no investment or property purchase required.',
    stats: [
      { value: '€3,500', label: 'Minimum Monthly\nIncome' },
      { value: '4 to 6 Months', label: 'Time to\nProcess' },
      { value: 'EU Resident', label: 'Residency\nStatus' },
      { value: '29 Countries', label: 'Visa-Free\nNations' },
    ],
    about: {
      title: 'About Greece',
      subtitle: 'Where History Meets the Modern European Lifestyle',
      description:
        'Greece is one of Europe\'s most captivating destinations, combining thousands of years of history with a vibrant modern culture, a Mediterranean climate, and an exceptionally high quality of life.',
      secondaryDescription:
        'As a member of the European Union and the Schengen Area, Greece offers residents the freedom to travel across 29 countries without additional visa requirements. For individuals who earn a stable income from sources outside Greece, whether through pensions, investments, or remote income, the Financially Independent Person Visa provides a clean, legally structured route to long-term European residency.',
      highlights: [],
    },
    benefitsIntro:
      'Residency in Greece places you at the heart of the European Union, with access to Schengen travel and a clear pathway to permanent residence.',
    benefits: [
      { title: 'Schengen Freedom of Movement', description: 'Greek residency allows visa-free travel throughout all 29 Schengen Area countries for short stays, giving you genuine freedom of movement across continental Europe without the need for additional visas.' },
      { title: 'Eligibility for Greek Citizenship', description: 'After seven years of continuous legal residence in Greece, you may qualify to apply for Greek citizenship, subject to meeting integration and residency requirements under Greek immigration law.' },
      { title: 'No Investment or Property Purchase Required', description: 'Unlike many European residency programs, the Greece FIP Visa requires no property purchase and no capital investment. Qualification is based entirely on demonstrating a sufficient, legally obtained passive income.' },
      { title: 'Family Inclusion', description: 'Your spouse and dependent children under 18 years of age can be included in the same application. All family members receive residence permits with the same validity period as the main applicant.' },
      { title: 'Path to Permanent Residence', description: 'After five years of continuous legal residence in Greece, you may become eligible to apply for permanent residency, provided all financial and legal conditions continue to be satisfied.' },
      { title: 'Stable, Three-Year Renewable Permit', description: 'The initial residence permit is granted for three years and is renewable, giving you long-term stability without the burden of annual renewals, provided your qualifying income continues to be demonstrated.' },
    ],
    processIntro: 'RK Global Immigration manages every stage from your initial eligibility assessment through to the issuance of your Greek residence permit card.',
    processSteps: [
      'Eligibility Assessment',
      'Document Preparation',
      'National D Visa Application',
      'D Visa Approval and Entry',
      'Residence Permit Application',
      'Residence Permit Card Issued',
    ],
    requirementsSummary:
      'The Greece Financially Independent Person Visa is designed for non-EU and non-EEA nationals who have a stable, legally obtained passive income and wish to reside in Greece without engaging in local employment or business activity. The program suits retirees, investors with offshore income, remote earners, and individuals with significant savings. RK Global Immigration manages the complete application process from eligibility assessment through to residence permit issuance.',
    requirementsChecklist: [
      '18 years of age or older',
      'Good health with no serious medical conditions',
      'Hold a valid passport',
      'No criminal record',
      'Passive income of at least €3,500 per month from sources outside Greece',
      'Private health insurance valid in Greece',
      'Proof of accommodation arranged in Greece',
      'No engagement in employment or independent economic activity in Greece',
    ],
    qualificationDescription: 'Eligible Dependents:',
    qualificationOptions: [
      'Spouse of the main applicant',
      'Biological or adopted children under 18 years of age',
    ],
    investment: {
      title: 'Financial Details for the Greece FIP Visa',
      description: 'Core financial requirements based on the program.',
      stats: [
        { value: '€3,500', label: 'Min. Monthly\nIncome' },
        { value: '€1,016', label: 'Permit Fee\n(Main Applicant)' },
        { value: '3 Years', label: 'Initial Permit\nValidity' },
      ],
    },
    legalBasis:
      'The Greece Financially Independent Person residence permit is established under the Greek Immigration and Social Integration Code (Law 4251/2014), which regulates the entry and residence of third-country nationals in Greece. Under this framework, non-EU nationals who can demonstrate sufficient financial means of legal origin and who do not engage in employment or independent economic activity in Greece are eligible to obtain a renewable residence permit. The permit is initially issued for three years and may be renewed, provided the financial and legal conditions continue to be met. The program is government-regulated, legally structured, and administered through official Greek immigration authorities.',
    faqs: [
      { question: 'What is the Greece Financially Independent Person Visa?', answer: 'The Greece FIP Visa is a long-term residence permit for non-EU and non-EEA nationals who have a stable, legally obtained passive income and wish to reside in Greece without working locally. It is designed for retirees, investors, and income earners who want to enjoy the Greek lifestyle while maintaining their existing financial arrangements abroad.' },
      { question: 'How long does the Greece FIP Visa process take?', answer: 'The application process typically takes between four and six months from initial preparation to the issuance of the residence permit card. Processing timelines can vary depending on consular appointment availability and government processing volumes.' },
      { question: 'What income qualifies for the Greece FIP Visa?', answer: 'Applicants must demonstrate a stable passive income of at least €3,500 per month from sources outside Greece. Qualifying income may include pension payments, investment returns, rental income from abroad, dividends, or bank statements evidencing sufficient savings. RK Global Immigration advises on the appropriate documentation for your specific income profile.' },
      { question: 'Can my family join me in Greece?', answer: 'Yes. Your spouse and dependent children under 18 years of age may be included in your application. Each family member receives a residence permit with the same validity period as the main applicant. Additional income requirements apply for dependents.' },
      { question: 'Does the FIP Visa lead to permanent residency or citizenship?', answer: 'Yes. After five years of continuous legal residence, you may apply for permanent residency in Greece. After seven years of continuous residence, you may become eligible to apply for Greek citizenship, subject to meeting integration and language requirements under Greek law.' },
    ],
  }),
  buildProgram({
    slug: 'spain-digital-nomad-visa',
    name: 'Spain Digital Nomad Visa',
    menuLabel: 'Spain Digital Nomad Visa',
    flag: spainFlag,
    heroImage: portugalCountryImg,
    contactImage: portugalContactImg,
    heroTitle: 'SPAIN DIGITAL NOMAD VISA',
    heroDescription:
      'Spain combines an unrivalled quality of life with a progressive immigration framework purpose-built for the modern remote workforce.',
    stats: [
      { value: '€2,849', label: 'Minimum Monthly\nIncome' },
      { value: '1 to 4 Months', label: 'Time to\nProcess' },
      { value: 'EU Resident', label: 'Residency\nStatus' },
      { value: '29 Countries', label: 'Visa-Free\nNations' },
    ],
    about: {
      title: 'About Spain',
      subtitle: 'Europe\'s Most Dynamic Destination for Remote Workers',
      description:
        'Spain is one of the most popular countries in the world for both tourism and long-term relocation, and it is easy to understand why. From the cosmopolitan energy of Barcelona and Madrid to the sun-drenched coastlines of Andalusia and the Canary Islands, Spain offers an extraordinary range of lifestyles within a single country.',
      secondaryDescription:
        'With the introduction of its Digital Nomad Visa under the Startup Act of 2023, Spain became one of the first major European economies to formally welcome remote workers and freelancers, offering a fast and structured route to residency for those who earn their income from clients or employers outside Spain.',
      highlights: [],
    },
    benefitsIntro:
      'Spain\'s Digital Nomad Visa combines European residency, tax advantages, and an exceptional lifestyle in one accessible package.',
    benefits: [
      { title: 'Schengen Freedom of Movement', description: 'The Spain Digital Nomad Visa grants you entry into Spain and visa-free access to all 29 Schengen Area countries, making it straightforward to travel across Europe for both personal and professional purposes.' },
      { title: 'Fast and Efficient Process', description: 'The application is designed to be manageable and transparent, with an estimated processing time of one to four months, provided all documentation is prepared diligently. RK Global Immigration handles the entire process on your behalf.' },
      { title: 'Attractive Tax Regime', description: 'Qualifying digital nomads may benefit from Spain\'s special Beckham Law tax regime, which caps personal income tax at a flat rate of 24% on earnings up to €600,000, offering a significant reduction compared to standard Spanish income tax rates.' },
      { title: 'Pathway to Permanent Residence and Citizenship', description: 'After five years of continuous legal residence in Spain, you qualify for permanent residency. Full citizenship typically requires 10 years of legal residence, though nationals of certain countries with historical ties to Spain may qualify in as little as two years.' },
      { title: 'Dual Citizenship for Qualifying Nationals', description: 'Nationals of countries with special historical ties to Spain, including many Latin American countries and the Philippines, can obtain dual citizenship and hold both Spanish and their original nationality simultaneously.' },
      { title: 'Residence Permits for the Whole Family', description: 'Your spouse or partner, dependent children, and dependent parents and grandparents also qualify for Spanish residency under a single application, ensuring your entire family can join you in Spain.' },
    ],
    processIntro: 'RK Global Immigration guides you from initial screening through to your Spanish residency card, managing every stage of the process.',
    processSteps: [
      'Initial Screening',
      'Document Preparation',
      'NIE and Spanish Bank Account',
      'Consulate Application',
      'Visa Approval and Entry',
      'Residency Card Collection',
    ],
    requirementsSummary:
      'The Spain Digital Nomad Visa is established under Spain\'s Startup Act and is designed for non-EU and non-EEA remote workers who wish to live in Spain while working for employers or clients primarily based outside Spain. Applicants must demonstrate a minimum monthly income, proof of a remote work arrangement, and health insurance coverage. RK Global Immigration manages every stage of the process from initial screening to residency card collection.',
    requirementsChecklist: [
      '18 years of age or older',
      'Valid health insurance covering Spain',
      'No criminal record',
      'Educational or professional qualifications relevant to your work',
      'Proof of a remote work arrangement (employment contract or freelance client evidence)',
      'Financial stability demonstrated by bank statements or payslips',
      'Tax compliance in your country of residence',
      'Minimum monthly income of €2,849',
    ],
    qualificationDescription: 'Eligible Dependents:',
    qualificationOptions: [
      'Spouse or partner of the main applicant',
      'Children under 18 years of age or adult dependent children (with proof of dependence)',
      'Dependent parents and grandparents',
    ],
    investment: {
      title: 'Financial Details for the Spain Digital Nomad Visa',
      description: 'Core financial requirements based on the program.',
      stats: [
        { value: '€2,849', label: 'Min. Monthly\nIncome' },
        { value: '€10', label: 'Residence\nPermit Fee' },
        { value: '5 Years', label: 'To Permanent\nResidency' },
      ],
    },
    legalBasis:
      'The Spain Digital Nomad Visa is grounded in Spain\'s Startup Act (Ley de Startups), which came into force in January 2023. This legislation was introduced to attract international talent, foster innovation, and encourage entrepreneurship, thereby strengthening Spain\'s position as a major digital and technological hub in Europe. Under this framework, qualifying remote workers and freelancers from outside the EU and EEA are entitled to reside in Spain while carrying out their professional activities for employers or clients primarily based abroad.',
    faqs: [
      { question: 'What is the Spain Digital Nomad Visa?', answer: 'The Spain Digital Nomad Visa is a residence permit introduced under Spain\'s Startup Act of 2023, designed for non-EU remote workers and freelancers who wish to live in Spain while working for employers or clients primarily based outside the country. It provides a structured and legally backed route to Spanish residency for the growing global remote workforce.' },
      { question: 'How long does the Spain Digital Nomad Visa process take?', answer: 'The application process typically takes between one and four months from initial preparation to visa approval. RK Global Immigration ensures all documentation is prepared correctly and submitted on time to minimise delays.' },
      { question: 'What income do I need to qualify?', answer: 'Applicants must demonstrate a minimum monthly income of €2,849 through bank statements or payslips from the previous three months. Additional income requirements apply for a spouse or partner and each dependent child, parent, or grandparent included in the application.' },
      { question: 'Can my family join me in Spain?', answer: 'Yes. Your spouse or partner, dependent children, and dependent parents and grandparents may all be included in a single application. After one year of residency, your school-aged children are entitled to access free public primary and secondary education in Spain.' },
      { question: 'What are the tax benefits of the Spain Digital Nomad Visa?', answer: 'Qualifying applicants may benefit from Spain\'s Beckham Law special tax regime, which caps personal income tax at a flat rate of 24% on income up to €600,000 per year. This represents a substantial saving compared to Spain\'s standard progressive income tax rates and applies for the first six years of residence.' },
    ],
  }),
  buildProgram({
    slug: 'malta-nomad-residence-permit',
    name: 'Malta Nomad Residence Permit',
    menuLabel: 'Malta Nomad Permit',
    flag: maltaFlag,
    heroImage: maltaCountryImg,
    contactImage: maltaContactImg,
    heroTitle: 'MALTA DIGITAL NOMAD VISA (NOMAD RESIDENCE PERMIT)',
    heroDescription:
      'Malta combines a strategic location at the heart of the Mediterranean with one of the EU\'s most welcoming frameworks for remote workers and digital professionals.',
    stats: [
      { value: '€3,500', label: 'Minimum Monthly\nIncome' },
      { value: '2+ Months', label: 'Time to\nProcess' },
      { value: '1 Year\n(Renewable)', label: 'Permit\nValidity' },
      { value: '29 Countries', label: 'Visa-Free\nNations' },
    ],
    about: {
      title: 'About Malta',
      subtitle: 'The Mediterranean\'s Most Connected Island Hub',
      description:
        'Malta is a small but extraordinarily well-connected island nation in the heart of the Mediterranean Sea. As a full member of the European Union and the Schengen Area, Malta offers residents access to 29 countries without additional visa requirements.',
      secondaryDescription:
        'English is an official language, the legal and financial systems are internationally recognised, and the island\'s compact size makes daily life remarkably convenient. For remote workers, freelancers, and location-independent entrepreneurs, Malta\'s Nomad Residence Permit provides a clean and practical route to Mediterranean living with genuine European residency benefits.',
      highlights: [],
    },
    benefitsIntro:
      'Malta\'s Nomad Residence Permit gives remote workers a legally recognised base within the European Union, with attractive tax treatment and an enviable Mediterranean lifestyle.',
    benefits: [
      { title: 'Schengen Freedom of Movement', description: 'As a Maltese resident, you enjoy free movement within the European Union and visa-free access to all 29 countries in the Schengen Area, making travel across Europe seamless for both personal and professional purposes.' },
      { title: 'Fast Processing', description: 'The application process is efficient, with approvals typically granted within two months, provided all documentation is complete and in order. RK Global Immigration manages the full submission process on your behalf.' },
      { title: 'Flexible and Renewable Permit', description: 'The Nomad Residence Permit is issued for one year initially and can be renewed up to three times, allowing you to enjoy Mediterranean living for up to four full years. Should you wish to stay longer, alternative residency pathways are available.' },
      { title: 'Highly Competitive Tax Treatment', description: 'Malta offers a full tax exemption on nomad income for the first 12 months of residence. After this period, a flat rate of 10% applies to income derived from authorised work, compared to progressive rates of up to 35% for standard Maltese residents.' },
      { title: 'Access to World-Class Healthcare', description: 'With your Nomad Residence Permit, you gain access to medical treatment at Maltese clinics and facilities recognised among the best in the world. Malta\'s healthcare system is consistently rated highly across European rankings.' },
      { title: 'Family Inclusion', description: 'Your spouse and unmarried dependent children may be included in your application and will receive their own Nomad Residence Permits, allowing the whole family to enjoy Malta together.' },
    ],
    processIntro: 'RK Global Immigration manages the entire application from initial screening through to physical permit collection, ensuring a smooth and timely process.',
    processSteps: [
      'Initial Screening and Engagement',
      'Document Preparation',
      'Application Submission',
      'Approval in Principle and Travel',
      'Nomad Residence Permit Issued',
      'Renewals and Long-Term Options',
    ],
    requirementsSummary:
      'The Malta Digital Nomad Visa, officially known as the Nomad Residence Permit, allows non-EU and non-EEA remote workers, freelancers, and location-independent entrepreneurs to legally reside in Malta while maintaining foreign employment or business operations. Applicants must demonstrate a minimum monthly income of €3,500, proof of a remote work arrangement, and hold a valid annual health insurance policy. RK Global Immigration handles the complete application on your behalf.',
    requirementsChecklist: [
      '18 years of age or older',
      'Good health with no serious medical conditions',
      'No criminal record',
      'Proof of remote work arrangement (employment contract or evidence of freelance clients)',
      'Financial stability demonstrated by bank statements or payslips',
      'Tax compliance in your country of residence',
      'Confirmed accommodation in Malta',
      'Valid annual health insurance policy with coverage of at least €30,000',
    ],
    qualificationDescription: 'Eligible Dependents:',
    qualificationOptions: [
      'Spouse of the main applicant',
      'Unmarried biological or adopted dependent children',
    ],
    investment: {
      title: 'Financial Details for the Malta Digital Nomad Visa',
      description: 'Core financial requirements based on the program.',
      stats: [
        { value: '€3,500', label: 'Min. Monthly\nIncome' },
        { value: '€300', label: 'Application\nFee' },
        { value: '1 Year', label: 'Initial Permit\nValidity' },
      ],
    },
    legalBasis:
      'Malta\'s Nomad Residence Permit is governed by regulations set forth by Residency Malta, the government agency responsible for administering Malta\'s residency programs. This initiative was introduced to attract global digital talent and stimulate economic activity in the country. By establishing a clear legal framework for remote workers, Malta continues its longstanding tradition as an internationally recognised business and residency hub at the heart of the Mediterranean and the European Union.',
    faqs: [
      { question: 'What is the Malta Digital Nomad Visa?', answer: 'The Malta Digital Nomad Visa, officially known as the Nomad Residence Permit, is a legal residency program that allows non-EU remote workers, freelancers, and location-independent entrepreneurs to live in Malta while working for employers or clients based outside the country. It is administered by Residency Malta and offers a straightforward route to Mediterranean residency with EU access.' },
      { question: 'How long does the Malta Digital Nomad Visa process take?', answer: 'The application process typically takes a minimum of two months from submission to approval, provided all documentation is complete and accurate. RK Global Immigration prepares and submits every application with care to ensure the process is as efficient as possible.' },
      { question: 'What income do I need to qualify?', answer: 'Applicants must demonstrate a guaranteed monthly income of at least €3,500 for a minimum of five months. This should be evidenced through bank statements, payslips, or client invoices confirming the regular and reliable nature of the income.' },
      { question: 'Can my family join me in Malta?', answer: 'Yes. Your spouse and unmarried dependent children may be included in your application and will each receive a Nomad Residence Permit valid for the same period as the main applicant. This allows your family to live, work, and enjoy Malta alongside you.' },
      { question: 'Does the Malta Digital Nomad Visa lead to permanent residency or citizenship?', answer: 'The Nomad Residence Permit does not directly lead to Maltese citizenship. However, it can be renewed up to three times, allowing a total stay of up to four years. If you wish to remain in Malta beyond this period or pursue permanent residency, RK Global Immigration can advise on separate Maltese residency and citizenship programs that may be suitable for your circumstances.' },
    ],
  }),
  buildProgram({
    slug: 'portugal-digital-nomad-visa',
    name: 'Portugal Digital Nomad Visa',
    menuLabel: 'Portugal Digital Nomad',
    flag: portugalFlag,
    heroImage: portugalCountryImg,
    contactImage: portugalContactImg,
    heroTitle: 'PORTUGAL DIGITAL NOMAD VISA',
    heroDescription:
      'Portugal has established itself as the leading European destination for digital nomads, combining an affordable cost of living with a top-ranked passport and a clear route to citizenship.',
    stats: [
      { value: '€3,680', label: 'Minimum Monthly\nIncome' },
      { value: '6 to 8 Months', label: 'Time to\nProcess' },
      { value: 'EU Resident', label: 'Residency\nStatus' },
      { value: '29 Countries', label: 'Visa-Free\nNations' },
    ],
    about: {
      title: 'About Portugal',
      subtitle: 'Europe\'s Favourite Destination for the Global Remote Workforce',
      description:
        'Portugal has long been recognised as one of the most welcoming and liveable countries in Europe, and in recent years it has cemented its reputation as the premier destination for the global remote working community.',
      secondaryDescription:
        'With a mild climate, stunning coastline, vibrant cities, and a cost of living significantly lower than most of Western Europe, Portugal offers an outstanding quality of life for those who work remotely. The Portuguese Digital Nomad Visa provides a clear, government-backed pathway to legal residency for non-EU remote workers and freelancers, with a route to one of the world\'s most powerful passports after just five years.',
      highlights: [],
    },
    benefitsIntro:
      'Portugal\'s Digital Nomad Visa unlocks Schengen access, world-class public services, and a realistic pathway to one of Europe\'s most valued passports.',
    benefits: [
      { title: 'World-Class Health and Education', description: 'You and your family gain access to Portugal\'s nationally funded healthcare system and a wide network of high-quality schools and universities throughout the country.' },
      { title: 'Schengen Freedom of Movement', description: 'The Portugal Digital Nomad Visa allows you to reside in Portugal and travel visa-free across all 29 countries of the Schengen Area, providing exceptional mobility throughout Europe.' },
      { title: 'Clear and Structured Process', description: 'The application process is transparent and well-defined, with RK Global Immigration managing every stage from NIF registration and banking setup through to your final residency card.' },
      { title: 'Pathway to Citizenship', description: 'After five years of residency and meeting the language and integration requirements, you may apply for full Portuguese citizenship and gain access to one of the world\'s top five most powerful passports.' },
      { title: 'Dual Citizenship Permitted', description: 'Portugal permits dual citizenship, meaning you can obtain a Portuguese passport without surrendering your current nationality. Your home country is not notified of your new status.' },
      { title: 'Top-Ranked Passport', description: 'The Portuguese passport provides visa-free or visa-on-arrival access to over 180 countries and territories worldwide, including the United States, the United Kingdom, and all EU member states.' },
    ],
    processIntro: 'RK Global Immigration handles every stage from your initial screening and NIF registration through to your Portuguese residency card.',
    processSteps: [
      'Initial Screening',
      'Engagement Agreement',
      'NIF Registration and Bank Account',
      'Visa Application Submission',
      'Travel to Portugal and AIMA Appointment',
      'Residency Card Issuance and Renewal',
    ],
    requirementsSummary:
      'The Portugal Digital Nomad Visa is designed for non-EU remote workers who wish to live in Portugal while working for an employer or freelancing for clients based outside Portugal. Applicants must demonstrate a minimum monthly income, hold a Portuguese Tax Identification Number (NIF), open a Portuguese bank account, and secure registered long-term accommodation in Portugal. RK Global Immigration guides you through every step of this process.',
    requirementsChecklist: [
      '18 years of age or older',
      'Good health with no serious medical conditions',
      'No criminal record',
      'Portuguese Tax Identification Number (NIF) and a Portuguese bank account',
      'Proof of long-term accommodation in Portugal (12-month rental registered with the tax authority)',
      'Employment contract from an employer based outside Portugal, or evidence of freelance clients',
      'Bank statements and payslips or invoices confirming monthly income of at least €3,680',
    ],
    qualificationDescription: 'Eligible Dependents:',
    qualificationOptions: [
      'Spouse or partner of the main applicant',
      'Dependent children (biological or adopted) under 27 years of age',
      'Dependent parents over 55 years of age',
    ],
    investment: {
      title: 'Financial Details for the Portugal Digital Nomad Visa',
      description: 'Core financial requirements based on the program.',
      stats: [
        { value: '€3,680', label: 'Min. Monthly\nIncome' },
        { value: '€189', label: 'Residence\nPermit Fee' },
        { value: '5 Years', label: 'To\nCitizenship' },
      ],
    },
    legalBasis:
      'The Portugal Digital Nomad Visa is established under Portuguese immigration law, which allows non-EU nationals to obtain legal residency through proof of sufficient income and a documented remote work arrangement. The program is administered by the Portuguese immigration authority (AIMA) and is governed by the same legal framework that underlies Portugal\'s broader visa and residency regime. Applicants who maintain their residency for five consecutive years may become eligible for permanent residency and subsequently Portuguese citizenship, subject to meeting language and integration requirements.',
    faqs: [
      { question: 'What is the Portugal Digital Nomad Visa?', answer: 'The Portugal Digital Nomad Visa is a legal residency program for non-EU remote workers and freelancers who wish to live in Portugal while working for employers or clients primarily based outside the country. It provides a structured, government-backed pathway to Portuguese residency and, after five years, a route to one of the world\'s most powerful passports.' },
      { question: 'How long does the Portugal Digital Nomad Visa process take?', answer: 'The application process typically takes between six and eight months from initial preparation to the issuance of your Portuguese residency card. Processing timelines can vary based on embassy and government scheduling. RK Global Immigration manages every stage to ensure the fastest possible outcome.' },
      { question: 'What income do I need to qualify?', answer: 'Applicants must demonstrate a minimum monthly income of €3,680, equivalent to four times the Portuguese minimum wage. This must be evidenced through bank statements and payslips or invoices from the previous three months. Additional income requirements apply for a spouse or adult dependent, and for each dependent minor child.' },
      { question: 'Can my family join me in Portugal?', answer: 'Yes. Your spouse or partner, dependent children under 27 years of age, and dependent parents over 55 years of age may all be included in your application. All qualifying dependents receive their own Portuguese residency permits.' },
      { question: 'What are the physical residency requirements to maintain the visa?', answer: 'To maintain your residency status and remain on track for permanent residency and citizenship, you must reside in Portugal for at least six consecutive months per year, or eight non-consecutive months per year. Maintaining genuine physical presence is essential to satisfying the conditions for renewal and for eventual citizenship eligibility.' },
    ],
  }),
];

export const digitalNomadProgramMap = Object.fromEntries(
  digitalNomadPrograms.map((program) => [program.slug, program])
);

export const defaultDigitalNomadSlug =
  digitalNomadPrograms[0]?.slug || 'greece-fip-visa';

export default digitalNomadPrograms;
