import React from 'react';
import Icon from '@/components/ui/AppIcon';

const WHATSAPP_NUMBER = '919120125913';
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi, I'm interested in your plumbing and sanitary products"
);

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Label tooltip */}
      <div className="bg-navy text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none">
        Chat with us!
      </div>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with RAG MARBLES on WhatsApp"
        className="group flex items-center gap-3 bg-green-500 text-white pl-4 pr-5 py-3.5 rounded-full shadow-xl shadow-green-500/40 whatsapp-pulse hover:bg-green-400 transition-all duration-200 hover:shadow-2xl hover:shadow-green-500/50 hover:-translate-y-1"
      >
        <div className="w-8 h-8 flex items-center justify-center">
          <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={28} variant="solid" />
        </div>
        <span className="font-bold text-sm">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
