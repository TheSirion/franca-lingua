import '@/app/globals.css';
import Footer from '@/components/component/footer';
import { Navbar } from '@/components/component/navbar';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://franca-lingua.com.br/'),
  title: {
    template: '%s | Franca Língua, o guia do estudante de línguas',
    default: 'Franca Língua, o guia do estudante de línguas',
  },
  locale: 'pt_BR',
  type: 'article',
};

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
      <Footer />
    </>
  );
}
