import type { Metadata } from "next";
import { DM_Sans, Inter} from "next/font/google";
import clsx from 'clsx'
import "./globals.css";
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: "DevFest Abakiliki 2024 | Coming soon",
  // description: "The biggest DevFest in Abakiliki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" className={clsx(
      'h-full bg-[#fdfdf5] antialiased',
      inter.variable,
      dmSans.variable,
    )}>
      <body>{children}</body>
    </html>
  );
}
