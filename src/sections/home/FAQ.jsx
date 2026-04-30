import React, { useState } from 'react';
import part1 from '../../assets/images/part1.png';
import part2 from '../../assets/images/part2.png';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: 'Why should I choose RK Global Immigration?',
    answer: 'RK Global Immigration offers personalized, end-to-end immigration solutions tailored to your profile, goals, and budget. With years of industry experience and a strong track record, we focus on transparency, accurate documentation, and strategic guidance to maximize your chances of visa success. From consultation to post-landing support, our team stays with you at every step.'
  },
  {
    id: 2,
    question: 'Do you provide a free consultation?',
    answer: 'Yes, we offer an initial consultation where our experts assess your profile, understand your goals, and suggest the most suitable immigration options. This helps you get clarity before starting the process and ensures you choose the right pathway.'
  },
  {
    id: 3,
    question: 'Which countries do you specialize in?',
    answer: 'We assist with immigration to countries like Canada, Australia, Germany, Portugal, Poland, and New Zealand. Each country has different visa pathways, and we guide you based on your eligibility, career goals, and long-term plans.'
  },
  {
    id: 4,
    question: 'What types of visas do you handle?',
    answer: 'We provide complete assistance for study visas, work permits, PR (permanent residency), and business/investor visas. Our team ensures that your application is aligned with the latest immigration policies and requirements.'
  },
  {
    id: 5,
    question: 'How do I know which visa is best for me?',
    answer: 'Choosing the right visa depends on multiple factors like your education, work experience, age, financials, and future goals. Our experts conduct a detailed profile evaluation and recommend the most suitable and realistic options for your case.'
  },
  {
    id: 6,
    question: 'How long does the immigration process take?',
    answer: 'Processing time varies based on the country, visa type, and your profile. Some applications may take a few months, while others can take longer depending on government processing timelines and documentation.'
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-8 md:py-12 bg-white font-sans">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-[88px] items-start">
          <div className="w-full lg:max-w-[470px] flex flex-col">
            <h2 className="text-[30px] md:text-[34px] lg:text-[38px] font-extrabold text-black uppercase tracking-[-0.04em] leading-[1.08] mb-8 text-center md:text-left">
              Frequently Asked Questions
            </h2>

            <div className="w-full max-w-[520px] mx-auto md:mx-0 flex flex-col gap-1.5">
              <img
                src={part1}
                alt="Passport and Plane"
                className="w-full h-[330px] md:h-[360px] object-cover rounded-[10px] block"
              />
              <img
                src={part2}
                alt="Passport on desk"
                className="w-full h-[120px] md:h-[135px] object-cover rounded-[10px] block"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-4 mt-12 lg:mt-0 w-full">
            {faqData.map((item) => {
              const isOpen = openId === item.id;
              const Icon = isOpen ? ChevronUp : ChevronDown;

              return (
                <div
                  key={item.id}
                  className="border border-[#e7e7e7] bg-white overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex items-start justify-between gap-5 px-5 py-6 md:px-6 md:py-7 text-left cursor-pointer"
                  >
                    <span className="font-bold text-[18px] md:text-[20px] leading-[1.35] text-[#111] pr-4">
                      {item.question}
                    </span>
                    <div className="flex-shrink-0 text-[#111] pt-0.5">
                      <Icon size={26} strokeWidth={2.2} />
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[320px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t border-[#efefef] px-5 py-6 md:px-6 md:py-7 text-[#7a7a7a] text-[16px] md:text-[18px] leading-[2.1] font-semibold">
                      <div className="max-w-[92%]">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
