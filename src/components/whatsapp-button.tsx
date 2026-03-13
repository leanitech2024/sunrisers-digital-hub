'use client';

import { FloatingWhatsApp } from '@carlos8a/react-whatsapp-floating-button';
import dynamic from 'next/dynamic';

export default function WhatsappButton() {
  return (
    <FloatingWhatsApp
      phoneNumber='+919845732329' // Required
      accountName='Sunrisers Digital Hub' // Optional
      avatar='/logo.png' // Optional
      initialMessageByServer='Hi there! How can I assist you?' // Optional
      initialMessageByClient='Hello! I found your contact on your website. I would like to chat with you about...' // Optional
      statusMessage='Available' // Optional
      startChatText='Start chat with us' // Optional
      tooltipText='Need help? Click to chat!' // Optional
      allowEsc={true} // Optional
      // Explore all available props below
      darkMode={true}
    />
  );
}

export const LazyWhatsappButton = dynamic(
  () => import('./whatsapp-button').then((mod) => mod.default),
  {
    ssr: false,
  },
);
