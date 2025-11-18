import 'remixicon/fonts/remixicon.css'
import '../../public/css/navbar.css'
import '../../public/fonts/flaticon_mycollection.css'
import 'swiper/css/bundle';
// Globals Styles
import "./globals.css";

import AosAnimation from '@/components/Layout/AosAnimation';
import BackToTop from '@/components/Layout/BackToTop';
import TosterProvider from '@/providers/TosterProvider';
import DemosSidebar from '@/components/Layout/DemosSidebar';
import RtlDemoSidebar from '@/components/Layout/RtlDemoSidebar';

import { Mukta } from "next/font/google";

const mukta = Mukta({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title:
    "Professional Website Development Services | Custom Web Design & Development",
  description:
    "Transform your vision into stunning websites. We create custom, responsive websites and web applications that drive results. Expert web design and development services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mukta.className}>
        <TosterProvider />

        {children}

        {/* AosAnimation */}
        <AosAnimation />

        {/* BackToTop */}
        <BackToTop />

        {/* DemosSidebar */}
        <DemosSidebar />

        {/* RtlDemoSidebar */}
        <RtlDemoSidebar />
      </body>
    </html>
  );
}
