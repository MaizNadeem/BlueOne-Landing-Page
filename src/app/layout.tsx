"use client";

import { GoogleTagManager } from "@next/third-parties/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import ToasterContext from "./api/contex/ToasetContex";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                  setTimeout(function() {
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-16486906194');

                    // Additional event pushed after GTM initialization
                    dataLayer.push({'event': 'afterLoad'});
                  }, 1500);
                `,
          }}
        ></script>
      </head>

      <body>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="light"
          >
            <ToasterContext />
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </ThemeProvider>
        </SessionProvider>
      </body>
      <GoogleTagManager gtmId="AW-16486906194" />
    </html>
  );
}
