import React from 'react';
import { Target, Banknote, Users, Zap, Mic2 } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'محتوى للبيع',
      description: 'نصمم محتوى هدفه الأساسي زيادة المبيعات وليس مجرد النشر.',
      icon: Target,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'تعليق صوتي محترف',
      description: 'تعليق صوتي تسويقي احترافي مخصص للسوق السعودي يعزز الثقة مع عملائك.',
      icon: Mic2,
      color: 'bg-green-100 text-green-600',
    },
    {
      title: 'أسعار منافسة',
      description: 'أسعار مدروسة ومناسبة جداً للسوق السعودي والشركات الناشئة.',
      icon: Banknote,
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      title: 'بديل الفريق',
      description: 'نوفر عليك تكلفة توظيف فريق كامل (مصمم، كاتب، مونتير).',
      icon: Users,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      title: 'تقنيات حديثة',
      description: 'استخدام أحدث التقنيات الإبداعية لسرعة وجودة الإنتاج.',
      icon: Zap,
      color: 'bg-red-100 text-red-600',
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-shark-600 tracking-wide uppercase">لماذا نحن؟</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            لماذا Sharks Vision؟
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            نحن لا نقدم مجرد تصاميم، بل نقدم شريكاً لنجاحك الرقمي.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;