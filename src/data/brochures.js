export const brochureMap = {
  // Citizenship Programs
  'grenada': '/Brochure/CITIZENSHIP BY INVESTMENT/grenada.pdf',
  'turkey': '/Brochure/CITIZENSHIP BY INVESTMENT/TURKEY.pdf',
  'sao-tome-and-principe': '/Brochure/CITIZENSHIP BY INVESTMENT/SÃO TOMÉ & PRÍNCIPE.pdf',
  'antigua-and-barbuda': '/Brochure/CITIZENSHIP BY INVESTMENT/ANTIGUA & BARBUDA.pdf',
  'dominica': '/Brochure/CITIZENSHIP BY INVESTMENT/DOMINICA.pdf',
  'st-kitts-and-nevis': '/Brochure/CITIZENSHIP BY INVESTMENT/ST. KITTS & NEVIS broucher .pdf',
  'st-lucia': '/Brochure/CITIZENSHIP BY INVESTMENT/ST. LUCIA.pdf.pdf',
  'vanuatu': '/Brochure/CITIZENSHIP BY INVESTMENT/VANUATU.pdf',

  // Residence Programs
  'uae': '/Brochure/RESIDENCE BY INVESTMENT/UAE.pdf',
  'hungary': '/Brochure/RESIDENCE BY INVESTMENT/HUNGARY.pdf',
  'malta': '/Brochure/RESIDENCE BY INVESTMENT/MALTA .pdf',
  'switzerland': '/Brochure/RESIDENCE BY INVESTMENT/SWITZERLAND 0.pdf',
  'greece': '/Brochure/RESIDENCE BY INVESTMENT/GREECE.pdf',
  'panama': '/Brochure/RESIDENCE BY INVESTMENT/PANAMA.pdf',
  'cyprus': '/Brochure/RESIDENCE BY INVESTMENT/CYPRUS.pdf',
  'latvia': '/Brochure/RESIDENCE BY INVESTMENT/LATVIA.pdf',
  'portugal': '/Brochure/RESIDENCE BY INVESTMENT/portugal.pdf.pdf',
  'thailand': '/Brochure/RESIDENCE BY INVESTMENT/THAILAND BROUCHER .pdf',
  'canada': '/Brochure/BUSINESS MIGRATION/CANADA BROUCHER .pdf',
  'united-kingdom': '/Brochure/BUSINESS MIGRATION/UNITED KINGDOM .pdf',
  'usa': '/Brochure/RESIDENCE BY INVESTMENT/USA EB5 RESIDENCY.pdf',

  // Business Migration Programs
  'uk-innovator-founder-visa': '/Brochure/BUSINESS MIGRATION/UK BROCHUER.pdf',
  'usa-e2-investor-visa': '/Brochure/BUSINESS MIGRATION/usa e2 .pdf',
  'canada-ict-visa': '/Brochure/BUSINESS MIGRATION/CANADA BROUCHER .pdf',
  'portugal-d2-entrepreneur-visa': '/Brochure/BUSINESS MIGRATION/PORTUGAL D2.pdf',
  'portugal-d7-passive-income-visa': '/Brochure/BUSINESS MIGRATION/PORTUGAL D7.pdf',
  'uk-expansion-worker-visa': '/Brochure/BUSINESS MIGRATION/UK SPONSOR.pdf',
  'france-talent-passport': '/Brochure/BUSINESS MIGRATION/FRANCE .pdf',

  // Digital Nomad Programs
  'greece-fip-visa': '/Brochure/DIGITAL NOMAD/GREECE DIGITAL .pdf',
  'spain-digital-nomad-visa': '/Brochure/DIGITAL NOMAD/SPAIN.pdf',
  'malta-nomad-residence-permit': '/Brochure/DIGITAL NOMAD/MALATA DIGITAL NOMAD VISA .pdf',
  'portugal-digital-nomad-visa': '/Brochure/DIGITAL NOMAD/PORTUGAL DIGITAL NOMAD VISA .pdf',
};

export const getBrochurePath = (slug) => {
  return brochureMap[slug] || '/contact';
};
