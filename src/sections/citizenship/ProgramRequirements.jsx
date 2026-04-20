import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import requirementsBg from '../../assets/images/500M.png';

const ProgramRequirements = ({ program }) => {
  return (
    <section className="w-full py-8 md:py-12 bg-[#012BFF0A] font-sans px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto flex flex-col">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 lg:gap-10 mb-6 md:mb-10 lg:mb-12">
          <div className="max-w-2xl">
            <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-extrabold text-[#111] uppercase tracking-tight leading-[1.1]">
              {`Requirements for ${program.name}`}
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="text-[12px] md:text-sm lg:text-base text-gray-600 lg:max-w-[420px] lg:ml-auto leading-[1.7] line-clamp-3">
              {program.requirementsSummary}
            </p>
          </div>
        </div>

        <div className="relative w-full rounded-[10px] lg:rounded-[20px] overflow-hidden bg-[#0c2b6b]">
          <div className="absolute inset-0 z-0">
            <img
              src={requirementsBg}
              alt="Requirements background"
              className="w-full h-full object-cover object-bottom opacity-100 scale-105"
            />
          </div>
          <div className="absolute inset-0 z-0 bg-[#0c2b6b]/60" />

          <div className="relative z-10 p-6 md:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
            <div className="flex-1">
              <p className="text-white text-[16px] md:text-[18px] lg:text-[22px] leading-[1.6] font-medium max-w-2xl">
                {program.requirementsSummary}
              </p>
            </div>

            <div className="w-full lg:w-[420px] bg-white rounded-[12px] p-5 md:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.15)] border border-white/50">
              <ul className="flex flex-col gap-3 md:gap-5">
                {program.requirementsChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 md:gap-4 text-left">
                    <CheckCircle2 color="#0c40e8" size={20} className="mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-[13px] md:text-[15px] font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mt-5 md:mt-10">
          <div className="bg-white rounded-[10px] md:rounded-[10px] p-4 md:p-10 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <h4 className="text-[17px] md:text-[22px] font-bold text-[#0c2b6b] mb-3 md:mb-6 leading-tight">
              How to Qualify
            </h4>
            <p className="text-gray-500 text-[12px] md:text-base leading-[1.75]">
              {program.qualificationDescription}
            </p>
          </div>

          <div className="bg-white rounded-[10px] md:rounded-[10px] p-4 md:p-10 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <h4 className="text-[17px] md:text-[22px] font-bold text-[#0c2b6b] mb-3 md:mb-6 leading-tight">
              {program.qualificationOptionsTitle || 'Eligible Investment Routes'}
            </h4>
            <ul className="flex flex-col gap-2.5 md:gap-4 list-disc pl-5">
              {program.qualificationOptions.map((option) => (
                <li key={option} className="text-gray-500 text-[12px] md:text-base leading-[1.75]">
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramRequirements;
