import { Metadata } from 'next';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './globals.css';

export const metadata: Metadata = {
  title: 'Granit',

}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="page">
        <div className="page-main">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
