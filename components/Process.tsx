import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-shark-900">كيف نعمل؟</h2>
          <p className="mt-4 text-gray-500">رحلة تحويل أفكارك إلى نتائج ملموسة</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg text-center group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto bg-shark-50 text-shark-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-shark-600 group-hover:text-white transition-colors border-4 border-white shadow-sm">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;