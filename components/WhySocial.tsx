import React from 'react';
import { AlertCircle, TrendingUp, Users, Smartphone, Video } from 'lucide-react';
import { getWhatsAppLink } from '../constants';

const WhySocial: React.FC = () => {
  return (
    <section className="py-24 bg-shark-950 text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-shark-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            لماذا التواجد على السوشيال ميديا <span className="text-shark-400">أصبح ضرورة؟</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium">
            "اليوم العميل لا يبحث عنك في الشارع، بل يبحث عنك في هاتفه."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: The Problem */}
          <div className="bg-shark-900/50 p-8 rounded-3xl border border-shark-800 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
              <AlertCircle />
              ماذا يحدث عندما لا تكون موجودًا؟
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2.5 bg-red-500 rounded-full"></span>
                <p className="text-lg text-gray-300">العميل يسمع عنك... ولا يجدك.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2.5 bg-red-500 rounded-full"></span>
                <p className="text-lg text-gray-300">يشاهد منافسيك... ولا يشاهدك.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2.5 bg-red-500 rounded-full"></span>
                <p className="text-lg text-gray-300">يتواصل مع من يظهر أمامه أولًا.</p>
              </li>
            </ul>
            <div className="mt-8 p-4 bg-red-900/20 border border-red-900/50 rounded-xl text-center">
              <p className="text-red-200 font-bold">في عالم السرعة، الذي لا يظهر... لا يُختار.</p>
            </div>
          </div>

          {/* Right Column: The Solution */}
          <div>
            <div className="mb-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                إذا لم يجدك العميل، <span className="text-white font-bold decoration-shark-500 underline decoration-2">سيجد منافسًا آخر</span>.
                السوشيال ميديا لم تعد مكانًا للنشر فقط، بل وسيلة لشرح خدماتك، وبناء الثقة، وتحفيز قرار الشراء.
              </p>
              <p className="text-lg text-gray-400">
                الوجود العشوائي لا يكفي، والغياب الكامل يكلّفك عملاء دون أن تشعر.
              </p>
            </div>

            <div className="bg-shark-800/50 p-6 rounded-2xl border border-shark-700">
              <h3 className="text-xl font-bold text-shark-300 mb-4 flex items-center gap-2">
                <TrendingUp className="text-shark-400" />
                كيف نساعدك؟
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-200">
                  <Smartphone className="w-5 h-5 text-shark-400" />
                  <span>صور احترافية تجذب الانتباه.</span>
                </li>
                <li className="flex items-center gap-2 text-gray-200">
                  <Video className="w-5 h-5 text-shark-400" />
                  <span>فيديوهات قصيرة توصل فكرتك بسرعة.</span>
                </li>
                <li className="flex items-center gap-2 text-gray-200">
                  <Users className="w-5 h-5 text-shark-400" />
                  <span>تعليق صوتي تسويقي يشرح، يقنع، ويبني الثقة.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <a 
                href={getWhatsAppLink("مرحباً، أريد أن أسبق المنافسين وأبدأ في تحسين ظهوري.")}
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 text-lg font-bold text-shark-950 bg-white rounded-xl hover:bg-gray-100 hover:scale-105 transition-all shadow-lg shadow-shark-500/20"
              >
                ابدأ الآن قبل أن يسبقك منافسوك
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySocial;