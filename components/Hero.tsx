import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { getWhatsAppLink } from '../constants';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-shark-950">
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-shark-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-shark-800/50 border border-shark-700 text-shark-100 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          Digital Content • Design • Video • Voice Over
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
          نحن نساعد الشركات <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-shark-400 to-white">
             على الظهور باحتراف
          </span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 leading-relaxed">
          تصميم محتوى بصري قوي يحوّل المتابع إلى عميل. 
          <br />
          <span className="text-shark-400 font-semibold">تصميم صور – ريلز – تعليق صوتي تسويقي – محتوى ذكي</span>
          <br />
          كل ذلك في باقات شهرية واضحة وموفرة.
        </p>

        <div className="mt-8 flex justify-center gap-2 text-sm md:text-base text-gray-400">
           <span className="bg-shark-900/80 px-3 py-1 rounded-md border border-shark-800">مناسب لأي نشاط تجاري</span>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={getWhatsAppLink("مرحباً، أود البدء في تحسين ظهور شركتي.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-shark-900 bg-white hover:bg-gray-100 md:text-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            تواصل معنا الآن عبر واتساب
            <ArrowLeft className="mr-2 h-6 w-6" />
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleScroll(e, '#pricing')}
            className="inline-flex items-center justify-center px-8 py-4 border border-shark-700 text-lg font-medium rounded-xl text-white hover:bg-shark-900 transition-all cursor-pointer"
          >
            عرض الباقات
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;