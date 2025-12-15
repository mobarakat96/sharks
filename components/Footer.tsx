import React from 'react';
import { SOCIAL_LINKS, SOCIAL_HANDLE, getWhatsAppLink } from '../constants';
import { MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-shark-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-shark-800 pb-12">
          
          {/* Brand */}
          <div className="text-center md:text-right">
            <span className="text-2xl font-extrabold text-white tracking-tighter uppercase block mb-4">
              SHARKS<span className="text-shark-500">VISION</span>
            </span>
            <p className="text-gray-400 mb-6 max-w-xs mx-auto md:mx-0">
              شريكك الاستراتيجي في صناعة المحتوى والتسويق الرقمي. نساعدك في الوصول لجمهورك باحترافية.
            </p>
          </div>

          {/* Quick Contact */}
          <div className="text-center">
            <h4 className="text-lg font-bold mb-6">تواصل معنا</h4>
            <div className="flex flex-col items-center gap-4">
              {/* WhatsApp Direct Button */}
              <a 
                href={getWhatsAppLink("مرحباً، لدي استفسار")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-green-700 transition-colors shadow-lg hover:shadow-green-900/50"
              >
                <MessageCircle size={20} />
                واتساب مباشر
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="text-center md:text-left">
             <h4 className="text-lg font-bold mb-6">تابعنا</h4>
             <p className="text-shark-400 mb-4 font-mono text-lg" dir="ltr">{SOCIAL_HANDLE}</p>
             <div className="flex justify-center md:justify-end gap-4">
               {SOCIAL_LINKS.map((social) => (
                 <a 
                  key={social.name} 
                  href={social.url}
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 bg-shark-800 rounded-full flex items-center justify-center hover:bg-shark-600 transition-colors"
                  aria-label={social.name}
                 >
                   <social.icon size={20} />
                 </a>
               ))}
             </div>
          </div>
        </div>

        <div className="text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Sharks Vision. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;