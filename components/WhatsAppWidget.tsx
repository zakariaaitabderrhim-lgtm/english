// WhatsApp Chat Widget Component

import React, { useState } from 'react';

const WhatsAppWidget = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const phoneNumber = '212675548699';
    const message = 'مرحباً! أريد الاستفسار عن دروس الإنجليزية';

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isExpanded && (
                <div className="mb-4 bg-white rounded-3xl shadow-2xl p-6 max-w-sm animate-fade-in-up">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                            <span className="text-white text-xl font-black">ز</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-black text-gray-900">الأستاذ زكرياء</h4>
                                <span className="flex items-center gap-1 text-xs text-green-600 font-bold">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    متاح
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 font-medium">عادة ما يرد خلال 5 دقائق</p>
                        </div>
                        <button
                            onClick={() => setIsExpanded(false)}
                            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                            aria-label="إغلاق"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <p className="text-gray-700 bg-gray-50 p-4 rounded-2xl mb-4 text-sm font-medium">
                        مرحباً! كيف يمكنني مساعدتك اليوم؟ 👋
                    </p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-green-500 text-white text-center py-3 rounded-2xl font-bold hover:bg-green-600 transition-all shadow-lg"
                    >
                        ابدأ المحادثة
                    </a>
                </div>
            )}

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 animate-pulse-slow"
                aria-label="فتح واتساب"
                aria-expanded={isExpanded}
            >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            </button>
        </div>
    );
};

export default WhatsAppWidget;
