'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { geistMono, geistSans } from "@/lib/fonts";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/store/store";
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {  ClerkProvider,} from '@clerk/nextjs'

import metadata from './metadata';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <ClerkProvider>
      <html lang="en">
        <Provider store={storeRef.current}>
          <body className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}>
            <Navbar />
            {children}
            <Footer></Footer>
          </body>
        </Provider>
      </html>
    </ClerkProvider>
  );
}
