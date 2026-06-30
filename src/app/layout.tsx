import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import RightSidebar from '@/components/RightSidebar';
import SmoothScroll from '@/components/SmoothScroll';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'NovaShop - Premium E-Commerce',
  description: 'A beautifully designed premium SaaS e-commerce template.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <div className="app-container">
            <Sidebar />
            <main className="main-content">
              {children}
            </main>
            <RightSidebar />
          </div>
          <Toaster position="top-center" />
        </SmoothScroll>
      </body>
    </html>
  );
}
