import '@/app/globals.css';
import { Navbar } from '@/components/component/navbar';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body>
      <Navbar />
      {children}
    </body>
  );
}
