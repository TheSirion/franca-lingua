import '@/app/globals.css';
import { Navbar } from '@/components/component/navbar';
import Script from 'next/script';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6106961193780996'
        crossOrigin='anonymous'
        strategy='lazyOnload'
      />
      <Navbar />
      {children}
    </>
  );
}
