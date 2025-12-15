import React from 'react';
import { CheckCircle2, XCircle, Star, Plus, Info } from 'lucide-react';
import { PACKAGES, ADDONS, getWhatsAppLink } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-shark-600 tracking-wide uppercase">الباقات الشهرية</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-5xl">
            اختر الخطة المناسبة لنموك
          </p>
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4 inline-block max-w-2xl">
            <p className="text-yellow-800 font-medium flex items-center justify-center gap-2">
              <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              ملاحظة: الباقات التي تحتوي على فيديو وتعليق صوتي هي الأكثر تأثيرًا في زيادة الطلبات.
            </p>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative rounded-3xl overflow-hidden transition-all duration-300 flex flex-col h-full ${
                pkg.isPopular 
                  ? 'bg-white border-2 border-shark-500 shadow-2xl scale-100 lg:-mt-4 lg:mb-4 z-10' 
                  : 'bg-white border border-gray-200 shadow-lg'
              }`}
            >
              {pkg.isPopular && (
                <div className="bg-shark-500 text-white text-center py-2 text-sm font-bold uppercase tracking-wider">
                  الأكثر طلباً
                </div>
              )}
              {pkg.isTrial && (
                <div className="bg-gray-800 text-white text-center py-2 text-sm font-bold uppercase tracking-wider">
                  للمرة الأولى فقط
                </div>
              )}

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900">{pkg.title}</h3>
                {pkg.subtitle && <p className="text-shark-600 text-sm font-medium mt-1">{pkg.subtitle}</p>}
                
                <div className="mt-6">
                  {pkg.originalPrice && (
                     <div className="text-gray-400 text-sm line-through font-medium mb-1">
                       بدل {pkg.originalPrice} ريال
                     </div>
                  )}
                  <div className="flex items-baseline">
                    <span className="text-5xl font-extrabold text-gray-900">{pkg.price}</span>
                    <span className="mr-2 text-xl font-medium text-gray-500">ريال</span>
                    <span className="mr-2 text-gray-400">/ {pkg.period}</span>
                  </div>
                </div>
                
                <p className="mt-4 text-gray-600 text-sm">{pkg.description}</p>

                <ul className="mt-8 space-y-4 mb-8 flex-1">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      {feature.included ? (
                        <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${feature.highlight ? 'text-shark-600' : 'text-green-500'}`} />
                      ) : (
                        <XCircle className="w-5 h-5 mt-0.5 text-gray-300 flex-shrink-0" />
                      )}
                      <span className={`mr-3 text-base ${feature.included ? 'text-gray-700' : 'text-gray-400 line-through'} ${feature.highlight ? 'font-bold text-shark-900' : ''}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a
                    href={getWhatsAppLink(`مرحباً، أود الاشتراك في ${pkg.title}`)}
                    target="_blank"
                    rel="noreferrer"
                    className={`block w-full py-4 px-6 rounded-xl text-center font-bold text-lg transition-all ${
                      pkg.isPopular
                        ? 'bg-shark-600 text-white hover:bg-shark-700 shadow-lg hover:shadow-shark-500/30'
                        : pkg.isTrial 
                            ? 'bg-gray-800 text-white hover:bg-gray-900'
                            : 'bg-white text-shark-600 border-2 border-shark-600 hover:bg-shark-50'
                    }`}
                  >
                    {pkg.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8 flex items-center justify-center gap-2">
            <Plus className="text-shark-500" />
            إضافات اختيارية
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ADDONS.map((addon, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-shark-300 transition-colors text-center">
                <div className="mx-auto w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-shark-600">
                  <addon.icon size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{addon.title}</h4>
                <p className="text-shark-600 font-extrabold text-lg">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 max-w-3xl mx-auto">
           <div className="bg-red-50 border border-red-100 rounded-xl p-6 flex items-start gap-4">
              <Info className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-red-800 font-bold mb-1">ملاحظة مهمة 🔒</h4>
                <p className="text-red-700">
                  الأسعار تشمل الإنتاج والتجهيز فقط، ولا تشمل ميزانية الإعلانات الممولة.
                </p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;