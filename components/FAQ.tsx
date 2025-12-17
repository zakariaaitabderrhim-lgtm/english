// FAQ Accordion Component

import React, { useState } from 'react';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        id: 1,
        question: "ما هو سعر الحصص؟",
        answer: "الأسعار تختلف حسب البرنامج المختار (Business English, Exam Prep, General English). تواصل معنا عبر الواتساب للحصول على عرض سعر مخصص يناسب احتياجاتك وميزانيتك."
    },
    {
        id: 2,
        question: "كم تستغرق مدة الحصة الواحدة؟",
        answer: "عادة ما تستغرق الحصة الواحدة من 60 إلى 90 دقيقة، حسب البرنامج ومستواك. نركز على الجودة وليس الكم لضمان استيعاب كامل للمحتوى."
    },
    {
        id: 3,
        question: "هل الحصة التجريبية فعلاً مجانية؟",
        answer: "نعم! الحصة التجريبية مجانية 100% ودون أي التزام. ستتعرف على طريقة التدريس، نقيم مستواك،ونناقش أهدافك التعليمية."
    },
    {
        id: 4,
        question: "كيف تتم الحصص؟ أونلاين أم حضورياً؟",
        answer: "جميع الحصص تتم عن بعد (أونلاين) عبر تطبيقات التواصل (Zoom, Google Meet) مما يمنحك المرونة الكاملة للتعلم من أي مكان."
    },
    {
        id: 5,
        question: "ما هي مؤهلات الأستاذ زكرياء؟",
        answer: "الأستاذ زكرياء أيت عبد الرحيم هو أستاذ اللغة الإنجليزية معتمد مع أكثر من 5 سنوات من الخبرة الميدانية. ساعد أكثر من 100 طالب في المغرب على تحقيق أهدافهم الأكاديمية والمهنية."
    },
    {
        id: 6,
        question: "كيف أقوم بالدفع؟",
        answer: "نقبل التحويلات البنكية من جميع البنوك المغربية. بعد الحصة التجريبية وتأكيد الاشتراك، سنزودك بتفاصيل الحساب البنكي للدفع الآمن والموثق."
    },
    {
        id: 7,
        question: "هل توجد سياسة استرجاع الأموال؟",
        answer: "نعم، لدينا ضمان استرداد الأموال خلال الأسبوع الأول إذا لم تكن راضياً عن جودة الخدمة. رضاك التام هو أولويتنا."
    },
    {
        id: 8,
        question: "كم مرة في الأسبوع تكون الحصص؟",
        answer: "يمكنك اختيار عدد الحصص الأسبوعية حسب جدولك (2-5 حصص أسبوعياً). سننسق معك لإيجاد الأوقات المناسبة التي تتوافق مع التزاماتك."
    }
];

const FAQ = () => {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleFAQ = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section id="faq" className="relative py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-black mb-6">
                        أسئلة شائعة
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
                        هل لديك <span className="text-primary">أسئلة</span>؟
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                        إجابات واضحة على الأسئلة الأكثر شيوعاً
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={faq.id}
                            className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${openId === faq.id ? 'border-primary shadow-lg' : 'border-gray-100 shadow-sm'
                                } animate-fade-in-up stagger-${(idx % 3) + 1}`}
                        >
                            <button
                                onClick={() => toggleFAQ(faq.id)}
                                className="w-full px-6 md:px-8 py-6 text-right flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                                aria-expanded={openId === faq.id}
                                aria-controls={`faq-answer-${faq.id}`}
                            >
                                <span className="text-lg md:text-xl font-black text-gray-900 flex-1">
                                    {faq.question}
                                </span>
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shrink-0 ${openId === faq.id ? 'bg-primary text-white rotate-180' : 'bg-gray-100 text-gray-600'
                                        }`}
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            <div
                                id={`faq-answer-${faq.id}`}
                                className={`transition-all duration-300 ease-in-out ${openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                role="region"
                                aria-labelledby={`faq-question-${faq.id}`}
                            >
                                <div className="px-6 md:px-8 pb-6">
                                    <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium bg-gray-50 p-6 rounded-xl">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA after FAQ */}
                <div className="mt-16 text-center bg-gradient-to-br from-orange-50 to-primary/10 p-8 md:p-12 rounded-3xl border border-primary/20">
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                        لم تجد إجابة لسؤالك؟
                    </h3>
                    <p className="text-gray-700 font-medium mb-6 text-lg">
                        تواصل معنا مباشرة عبر الواتساب وسنجيبك فوراً!
                    </p>
                    <a
                        href="https://wa.me/212675548699?text=مرحباً، لدي سؤال عن دروس الإنجليزية"
                        className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl text-xl font-black shadow-xl hover:bg-primary-600 transition-all hover:scale-105"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        تواصل الآن
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
