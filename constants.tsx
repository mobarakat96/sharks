import { 
  Palette, 
  Video, 
  Mic, 
  TrendingUp, 
  CheckCircle2, 
  XCircle, 
  Smartphone,
  Instagram,
  Facebook,
  Linkedin,
  Pin, // For Pinterest
  Image as ImageIcon
} from 'lucide-react';
import { PricingPackage, ServiceAddon, WorkStep } from './types';

// Contact Info
export const WHATSAPP_NUMBER = "966565052586"; // Pure number for API
export const DISPLAY_NUMBER = "056 505 2586";
export const SOCIAL_HANDLE = "@sharksvision_";

// Helper to generate WhatsApp Link
export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

// Pricing Packages
export const PACKAGES: PricingPackage[] = [
  {
    id: 'trial',
    title: 'باقة التجربة – مرّة واحدة فقط',
    subtitle: 'لتجربة مستوى التصميم والفيديو قبل الاشتراك الشهري',
    price: '650',
    originalPrice: '950',
    period: 'مرة واحدة',
    isPopular: false,
    isTrial: true,
    buttonText: 'جرّب الجودة قبل الاشتراك',
    description: 'باقة مخصّصة للتجربة فقط والاشتراك مرة واحدة لكل عميل.',
    features: [
      { text: '6 صور احترافية للسوشيال ميديا', included: true },
      { text: '1 فيديو Reels (15 ثانية)', included: true, highlight: true },
      { text: 'تعليق صوتي تسويقي احترافي مخصص للسوق السعودي', included: true },
      { text: 'فكرة تسويقية واحدة', included: true },
      { text: 'تعديل واحد', included: true },
      { text: 'غير مخصصة للاستمرارية (للتجربة فقط)', included: false },
    ]
  },
  {
    id: 'growth',
    title: 'باقة Growth',
    subtitle: 'الأكثر اختيارًا ⭐',
    price: '2,200',
    originalPrice: '2,700',
    period: 'شهريًا',
    isPopular: true,
    buttonText: 'اختر الباقة',
    description: 'أفضل توازن بين العدد والتأثير. موصى بها للشركات الصغيرة والمتوسطة.',
    features: [
      { text: '15 صورة احترافية', included: true },
      { text: '5 فيديوهات Reels (15 ثانية)', included: true },
      { text: '2 فيديو بتعليق صوتي تسويقي احترافي مخصص للسوق السعودي', included: true, highlight: true },
      { text: 'أفكار محتوى متنوعة (تعريف – عرض – منتج)', included: true },
      { text: 'كتابة محتوى تسويقي جاهز للنشر', included: true },
    ]
  },
  {
    id: 'premium',
    title: 'باقة Premium',
    subtitle: 'للشركات الكبيرة',
    price: '3,200',
    originalPrice: '3,900',
    period: 'شهريًا',
    isPopular: false,
    buttonText: 'ابدأ بقوة',
    description: 'محتوى أقوى – ظهور أعلى – نتائج أوضح. للشركات التي تبحث عن تأثير حقيقي.',
    features: [
      { text: '20 صورة احترافية', included: true },
      { text: '10 فيديوهات Reels (15 ثانية)', included: true },
      { text: '4 فيديوهات بتعليق صوتي تسويقي احترافي مخصص للسوق السعودي', included: true, highlight: true },
      { text: 'نصوص إعلانية جاهزة للتعليق الصوتي', included: true },
      { text: 'إبراز نقاط القوة والمميزات التنافسية', included: true },
    ]
  }
];

// Add-ons
export const ADDONS: ServiceAddon[] = [
  { title: 'صورة إضافية', price: '70 ريال', icon: ImageIcon },
  { title: 'فيديو Reels إضافي (15 ثانية)', price: '200 ريال', icon: Video },
  { title: 'فيديو مع تعليق صوتي تسويقي', price: '350 ريال', icon: Mic },
];

// Workflow
export const PROCESS_STEPS: WorkStep[] = [
  { number: '1', title: 'تحليل النشاط', description: 'نحلل نشاطك ومنتجاتك لفهم جمهورك.' },
  { number: '2', title: 'تحديد الأسلوب', description: 'نحدد أسلوب المحتوى المناسب لهويتك.' },
  { number: '3', title: 'التصميم والإنتاج', description: 'نصمم صور وفيديوهات احترافية.' },
  { number: '4', title: 'الصوت والنشر', description: 'نضيف تعليق صوتي يعزز الثقة ونساعدك في الظهور.' },
  { number: '5', title: 'النمو', description: 'نساعدك على الظهور والبيع بثبات.' },
];

// Social Links (Added Pinterest)
export const SOCIAL_LINKS = [
  { name: 'Instagram', icon: Instagram, url: `https://instagram.com/${SOCIAL_HANDLE.replace('@', '')}` },
  { name: 'TikTok', icon: Video, url: `https://tiktok.com/${SOCIAL_HANDLE}` },
  { name: 'Pinterest', icon: Pin, url: `https://pinterest.com/${SOCIAL_HANDLE.replace('@', '')}` },
  { name: 'WhatsApp', icon: Smartphone, url: getWhatsAppLink("مرحباً، أود الاستفسار عن خدماتكم") },
];