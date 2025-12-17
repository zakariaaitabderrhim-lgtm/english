
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import FAQ from './components/FAQ';
import WhatsAppWidget from './components/WhatsAppWidget';
import ScrollToTop from './components/ScrollToTop';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-xl z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <span className="text-xl md:text-2xl font-extrabold tracking-tight">
              <span className="text-primary">Zakaria</span> English
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8 space-x-reverse">
            <a href="#about" className="text-gray-600 font-medium hover:text-primary transition-colors">من الأستاذ زكرياء؟</a>
            <a href="#programs" className="text-gray-600 font-medium hover:text-primary transition-colors">البرامج</a>
            <a href="#features" className="text-gray-600 font-medium hover:text-primary transition-colors">لماذا نحن؟</a>
            <a
              href="https://wa.me/212675548699?text=مرحباً، أريد حجز حصة تجريبية مجانية"
              className="bg-primary text-white px-6 py-2.5 rounded-full font-bold hover-bg-primary-dark transition-all transform hover:scale-105 shadow-primary-soft"
            >
              احجز حصتك المجانية
            </a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
              aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="navigation"
        aria-label="القائمة الرئيسية"
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-12">
            <span className="text-2xl font-black"><span className="text-primary">Zakaria</span> English</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
              aria-label="إغلاق القائمة"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="space-y-6 text-right">
            <a href="#about" onClick={() => setIsOpen(false)} className="block text-2xl font-black text-gray-800 hover:text-primary transition-colors">من هو الأستاذ؟</a>
            <a href="#programs" onClick={() => setIsOpen(false)} className="block text-2xl font-black text-gray-800 hover:text-primary transition-colors">البرامج التعليمية</a>
            <a href="#features" onClick={() => setIsOpen(false)} className="block text-2xl font-black text-gray-800 hover:text-primary transition-colors">لماذا زكرياء؟</a>
          </div>
          <div className="mt-auto pb-10">
            <a
              href="https://wa.me/212675548699?text=مرحباً، أريد حجز حصة تجريبية مجانية"
              className="block w-full bg-primary text-white py-5 rounded-2xl font-black text-xl shadow-2xl shadow-primary/30 hover:bg-primary-600 transition-all text-center"
            >
              احجز حصتك المجانية
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-right order-2 lg:order-1">
            <div className="inline-block px-4 py-1 bg-orange-50 text-primary rounded-full text-xs md:text-sm font-black mb-6 animate-fade-in uppercase tracking-wider">
              المستقبل يبدأ من هنا 🚀
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-[1.15] mb-6 md:mb-8">
              استثمر في فرصك المستقبلية بالإنجليزية: <span className="text-primary block mt-2">تعلم عن بعد مع الأستاذ زكرياء أيت عبد الرحيم</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              لست مجرد رقم في منصة! استمتع بحصص حية، متابعة يومية عبر الواتساب، ومنهج تعليمي مُصمم خصيصاً ليناسب أهدافك المهنية والدراسية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/212675548699?text=مرحباً، أريد حجز حصة تجريبية مجانية"
                className="bg-primary text-white px-8 md:px-10 py-4 md:py-6 rounded-2xl text-lg md:text-xl font-black shadow-2xl shadow-primary/30 hover:scale-105 transition-all active:scale-95 text-center"
              >
                احجز حصتك التجريبية المجانية الآن
              </a>
            </div>
          </div>
          <div className="flex-1 relative w-full lg:w-auto order-1 lg:order-2">
            <div className="relative z-10 shadow-2xl group">
              <video
                ref={videoRef}
                src="/session demo.mp4"
                className="w-full md:h-[500px] object-contain cursor-pointer"
                autoPlay
                muted={isMuted}
                loop
                playsInline
                onClick={toggleMute}
                aria-label="جلسة تعليمية تجريبية مع الأستاذ زكرياء"
              />

              {isMuted && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-opacity hover:bg-black/40"
                  onClick={toggleMute}
                >
                  <div className="bg-white/90 backdrop-blur text-gray-900 px-6 py-3 rounded-full font-black flex items-center gap-3 shadow-2xl animate-bounce">
                    <span className="text-2xl">🔊</span>
                    <span>اضغط لتشغيل الصوت</span>
                  </div>
                </div>
              )}
            </div>
            <div className="absolute -top-10 -left-10 w-24 h-24 md:w-40 md:h-40 bg-orange-200/40 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="relative min-h-screen flex items-center py-20 bg-gray-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="relative group max-w-md mx-auto lg:max-w-none">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-orange-400/20 rounded-[3rem] blur-2xl opacity-50"></div>
          <div className="relative bg-white p-2 md:p-4 rounded-[2.5rem] shadow-2xl">
            <img
              src="/public/image.jpg"
              alt="الأستاذ زكرياء أيت عبد الرحيم - أستاذ اللغة الإنجليزية"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-[2rem]"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-10 bg-white p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl max-w-[220px] md:max-w-[320px] border border-gray-100">
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
              <span className="font-bold text-gray-800 text-sm md:text-base">خبرة ميدانية حقيقية</span>
            </div>
            <p className="text-gray-600 font-medium leading-relaxed text-sm md:text-lg">أكثر من 5 سنوات في التعليم التفاعلي عن بعد والتوجيه التربوي الرقمي.</p>
          </div>
        </div>

        <div className="lg:pr-10 text-center lg:text-right">
          <div className="inline-block px-4 py-1.5 bg-orange-100 text-primary rounded-full text-sm font-black mb-6">بطاقة تعريفية</div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
            من هو الأستاذ <span className="text-primary">زكرياء؟</span>
          </h2>
          <div className="space-y-6 md:space-y-8 text-lg md:text-2xl text-gray-700 leading-relaxed font-medium">
            <p>
              أنا <span className="font-bold text-gray-900 underline decoration-primary/30 decoration-4">زكرياء أيت عبد الرحيم</span>، أستاذ لغة إنجليزية و <span className="text-primary font-bold">مختص تربوي</span> أعمل في قلب الميدان التعليمي منذ عام 2019.
            </p>
            <p>
              ساعدت أكثر من <span className="text-primary font-black">+100 طالب</span> في المغرب على امتلاك اللغة الإنجليزية، كسر حاجز الخوف، التفوق الدراسي، والحصول على فرص مهنية عالمية.
            </p>
            <div className="bg-white p-6 md:p-10 rounded-3xl border-r-8 border-primary shadow-xl italic text-gray-800 leading-loose text-base md:text-xl">
              "تعلم اللغة الإنجليزية لم يعد مجرد رفاهية بل ضرورة يفرضها الواقع من أجل مواكبة التطور واستثمار الفرص."
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Programs = () => {
  const plans = [
    {
      title: "Business English",
      subtitle: "للمهنيين وأصحاب المشاريع",
      target: "للموظفين، الأطر، وأصحاب مشاريع الخدمات الرقمية (Web Services).",
      content: "حصص عن بعد تركز على لغة الاجتماعات، المراسلات الرسمية، وتقنيات الإقناع.",
      feature: "ثقة مطلقة في التواصل الدولي وزيادة فرص الترقية أو نجاح مشروعك.",
      duration: "90 دقيقة/حصة • حصتين أسبوعياً • 3 أشهر",
      price: "600",
      priceLabel: "درهم (برنامج 3 أشهر)",
      icon: "💼"
    },
    {
      title: "Exam Preparation",
      subtitle: "للتفوق الدراسي والوطني",
      target: "لتلاميذ البكالوريا والطلبة الراغبين في التفوق الأكاديمي.",
      content: "مراجعة حية للمنهج الوطني، تبسيط القواعد، وتدريبات مكثفة على نماذج الامتحانات.",
      feature: "نضمن لك الجاهزية التامة لتحقيق أعلى النقاط وبناء مسار جامعي ناجح.",
      duration: "90 دقيقة/حصة • حصتين أسبوعياً • 3 أشهر",
      price: "ابتداءاً من 300",
      priceLabel: "درهم (برنامج 3 أشهر)",
      popular: true,
      icon: "📝"
    },
    {
      title: "General English",
      subtitle: "الإنجليزية العامة",
      target: "للكبار والصغار الراغبين في إتقان أساسيات التواصل اليومي.",
      content: "حصص تفاعلية تركز على المحادثة، تحسين النطق، واكتساب مفردات جديدة.",
      feature: "تعلم بمرونة واستمتاع، وافتح لنفسك آفاقاً ثقافية وعالمية جديدة تماماً.",
      duration: "90 دقيقة/حصة • حصتين أسبوعياً • 3 أشهر",
      pricingOptions: [
        { label: "Standard", price: "400", description: "حصص تفاعلية فقط" },
        { label: "VIP", price: "600", description: "+ متابعة يومية + تمارين مخصصة" }
      ],
      priceLabel: "درهم (برنامج 3 أشهر)",
      icon: "🌍"
    }
  ];

  return (
    <section id="programs" className="relative min-h-screen flex items-center py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">برامجنا المتميزة</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium">باقات تعليمية صُممت بدقة لتناسب كل احتياجاتك.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-[2.5rem] p-8 md:p-10 border transition-all duration-500 hover:shadow-2xl flex flex-col ${plan.popular ? 'border-primary shadow-xl' : 'border-gray-100 shadow-lg'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 right-1/2 translate-x-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                  الأكثر طلباً
                </div>
              )}

              <div className="text-5xl md:text-6xl mb-6">{plan.icon}</div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">{plan.title}</h3>
              <p className="text-primary font-bold text-sm md:text-base mb-8 uppercase tracking-wide">{plan.subtitle}</p>

              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-[10px] font-black text-gray-400 mb-1 uppercase tracking-widest">الفئة المستهدفة</p>
                  <p className="text-gray-700 font-medium text-sm md:text-base">{plan.target}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 mb-1 uppercase tracking-widest">محتوى البرنامج</p>
                  <p className="text-gray-700 font-medium text-sm md:text-base">{plan.content}</p>
                </div>

                {/* Pricing & Duration Section */}
                {plan.duration && (
                  <div className="bg-gradient-to-br from-primary/10 to-orange-50 p-6 rounded-2xl border-2 border-primary/20">
                    <p className="text-xs font-black text-gray-600 mb-3 text-center">التفاصيل والأسعار</p>

                    {/* Multiple Pricing Options (for General English) */}
                    {plan.pricingOptions ? (
                      <div className="space-y-3 mb-4">
                        {plan.pricingOptions.map((option: any, idx: number) => (
                          <div key={idx} className="bg-white p-4 rounded-xl border border-primary/20">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-black text-primary text-lg">{option.label}</span>
                              <span className="font-black text-gray-900 text-2xl">{option.price} <span className="text-sm text-gray-600">DH</span></span>
                            </div>
                            <p className="text-xs text-gray-600 font-medium">{option.description}</p>
                          </div>
                        ))}
                        <p className="text-xs font-bold text-gray-600 text-center mt-2">{plan.priceLabel}</p>
                      </div>
                    ) : (
                      /* Single Pricing Option (for other programs) */
                      <div className="text-center mb-4">
                        <p className="text-4xl font-black text-primary mb-1">{plan.price}</p>
                        <p className="text-sm font-bold text-gray-600">{plan.priceLabel}</p>
                      </div>
                    )}

                    <div className="pt-4 border-t border-primary/20">
                      <p className="text-gray-700 font-bold text-sm text-center leading-relaxed">{plan.duration}</p>
                    </div>
                  </div>
                )}

                <div className="bg-orange-50 p-4 md:p-6 rounded-2xl border border-orange-100">
                  <p className="text-xs font-black text-primary mb-1">النتيجة المتوقعة ✨</p>
                  <p className="text-gray-800 font-black text-sm md:text-base">{plan.feature}</p>
                </div>
              </div>

              <a
                href={`https://wa.me/212675548699?text=أريد الاستفسار عن برنامج ${plan.title}`}
                className={`mt-10 block text-center py-4 rounded-2xl font-black text-lg transition-all ${plan.popular ? 'bg-primary text-white hover:bg-orange-600 shadow-xl shadow-primary/20' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                تواصل للاشتراك
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const usps = [
    { title: "حصص حية عن بعد", desc: "تفاعل حقيقي وتصحيح فوري، بعيداً عن الفيديوهات المسجلة المملة.", icon: "🎥" },
    { title: "متابعة WhatsApp", desc: "الأستاذ معك يومياً للإجابة على تساؤلاتك ودعمك المستمر (24/7).", icon: "💬" },
    { title: "مرونة في الأوقات", desc: "ننسق الجدول بما يتوافق مع التزاماتك المهنية أو الدراسية.", icon: "⏰" },
    { title: "منهج تفاعلي", desc: "استخدام أحدث الوسائل التقنية لجعل التعلم ممتعاً وفعالاً.", icon: "⚡" }
  ];

  return (
    <section id="features" className="relative min-h-screen flex items-center py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 text-center lg:text-right">لماذا نحن الخيار الأفضل؟</h2>
            <div className="grid gap-6">
              {usps.map((usp, idx) => (
                <div key={idx} className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all border border-gray-100 flex gap-6 items-center group">
                  <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                    {usp.icon}
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{usp.title}</h4>
                    <p className="text-gray-600 font-medium text-sm md:text-base">{usp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-white rounded-[4rem] p-4 shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                alt="طالب يدرس اللغة الإنجليزية بحماس على جهاز كمبيوتر محمول"
                className="rounded-[3.5rem] w-full"
                loading="lazy"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/95 text-white p-10 rounded-full shadow-2xl flex flex-col items-center justify-center text-center w-52 h-52 border-[10px] border-white/20">
                <span className="text-4xl font-black">24/7</span>
                <span className="text-xs font-bold uppercase mt-1">دعم متواصل</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Payment = () => (
  <section className="relative min-h-screen flex items-center py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
      <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-xs md:text-sm font-black mb-10 border border-blue-100">
        🛡️ تعاملات آمنة وموثقة بنسبة 100%
      </div>
      <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">ابدأ رحلتك بكل ثقة وشفافية</h2>
      <p className="text-lg md:text-2xl text-gray-600 mb-16 leading-relaxed font-medium">
        نؤمن بالشفافية التامة. بعد حصتك التجريبية المجانية، يمكنك تفعيل اشتراكك عبر تحويل بنكي بسيط (نقبل جميع البنوك المغربية)، مما يضمن لك أماناً وحقاً كاملاً.
      </p>

      <div className="grid md:grid-cols-2 gap-8 text-right">
        <div className="bg-gray-50 p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 text-xl font-black">1</div>
          <h4 className="font-black text-gray-900 text-2xl mb-3">التقييم والتجربة</h4>
          <p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed">جرب طريقتنا في التدريس وقيم مستواك بدون أي التزام مادي مسبق.</p>
        </div>
        <div className="bg-gray-50 p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 text-xl font-black">2</div>
          <h4 className="font-black text-gray-900 text-2xl mb-3">التفعيل الرسمي</h4>
          <p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed">تحويل بنكي يوثق علاقتنا التعليمية ويمنحك وصولاً فورياً للمتابعة.</p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-950 text-white pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.2]">العالم يتحدث الإنجليزية اليوم، <br className="hidden md:block" />فماذا تنتظر؟</h2>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          المقاعد المتاحة للحصص الحية عن بعد محدودة جداً لضمان جودة المتابعة الشخصية لكل طالب.
        </p>

        <div className="flex flex-col items-center gap-8">
          <a
            href="https://wa.me/212675548699"
            className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-2xl text-xl font-black shadow-2xl hover:bg-orange-600 transition-all flex items-center justify-center gap-4"
          >
            ابدأ رحلتك الآن عبر واتساب
          </a>
          <div className="text-center">
            <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-2">رقم التواصل الفوري</p>
            <p className="text-3xl md:text-4xl font-black tracking-widest text-primary">0675548699</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-black">
          <span className="text-primary">Zakaria</span> English
        </div>
        <p className="text-gray-500 font-bold text-sm text-center">
          © {new Date().getFullYear()} جميع الحقوق محفوظة للأستاذ زكرياء أيت عبد الرحيم.
        </p>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen font-tajawal">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        الانتقال إلى المحتوى الرئيسي
      </a>

      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Programs />
        <Features />
        <FAQ />
        <Payment />
        <Footer />
      </main>
      <WhatsAppWidget />
      <ScrollToTop />
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
