import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/common/footer';
import Nav from '@/components/common/nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'ContactSphere',
    description: 'Nezhyvyi Bogdan KV32mp',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className} style={{ background: '#FFF7F8' }}>
                <Nav />
                {children}
                <Footer />
            </body>
        </html>
    );
}
