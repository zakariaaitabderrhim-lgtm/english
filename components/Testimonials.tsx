// Testimonials Section Component

import React from 'react';

interface Testimonial {
    id: number;
    name: string;
    program: string;
    rating: number;
    text: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "أحمد الكريم",
        program: "Business English",
        rating: 5,
        text: "بفضل الأستاذ زكرياء، تحسن مستواي في الإنجليزية بشكل ملحوظ. حصلت على ترقية في عملي بفضل قدرتي على التواصل مع العملاء الدوليين.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
        id: 2,
        name: "فاطمة الزهراء",
        program: "Exam Preparation",
        rating: 5,
        text: "نجحت في الباكالوريا بامتياز! الأستاذ زكرياء ساعدني كثيراً في فهم القواعد والتحضير للامتحان. شكراً جزيلاً!",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
        id: 3,
        name: "يوسف بنعلي",
        program: "General English",
        rating: 5,
        text: "الحصص ممتعة جداً والمتابعة اليومية عبر الواتساب مفيدة للغاية. أنصح بشدة للجميع الراغبين في تعلم الإنجليزية.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 bg-orange-100 text-primary rounded-full text-sm font-black mb-6">
                        آراء الطلاب
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
                        ماذا يقول <span className="text-primary">طلابنا</span>؟
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                        قصص نجاح حقيقية من طلاب حققوا أهدافهم مع الأستاذ زكرياء
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={testimonial.id}
                            className={`bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up stagger-${idx + 1}`}
                        >
                            {/* Rating Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-yellow-400 fill-current"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-700 font-medium text-base md:text-lg leading-relaxed mb-8 italic">
                                "{testimonial.text}"
                            </p>

                            {/* Student Info */}
                            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                                    loading="lazy"
                                />
                                <div>
                                    <h4 className="font-black text-gray-900 mb-1">{testimonial.name}</h4>
                                    <p className="text-xs text-primary font-bold uppercase tracking-wide">
                                        {testimonial.program}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Indicator */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-2xl shadow-lg border border-gray-100">
                        <div className="flex -space-x-2">
                            {testimonials.map((t) => (
                                <img
                                    key={t.id}
                                    src={t.image}
                                    alt=""
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                    loading="lazy"
                                />
                            ))}
                        </div>
                        <div className="text-right">
                            <p className="font-black text-gray-900">أكثر من 100+ طالب</p>
                            <p className="text-sm text-gray-600 font-medium">حققوا أهدافهم معنا</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
