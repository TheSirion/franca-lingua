import { Navbar } from '@/components/component/navbar';
import './globals.css';

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
