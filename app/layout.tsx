import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CareOfCanada",
  description: "Telugu Community Hub in Canada.",
  icons: {
    icon: "/brand/careofcanada-tab-icon.png",
    shortcut: "/brand/careofcanada-tab-icon.png",
    apple: "/brand/careofcanada-tab-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <Script id="mailerlite-universal" strategy="afterInteractive">
          {`
            (function(w,d,e,u,f,l,n){
              w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);},
              l=d.createElement(e),
              l.async=1,
              l.src=u,
              n=d.getElementsByTagName(e)[0],
              n.parentNode.insertBefore(l,n);
            })(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');

            ml('account', '2461634');
          `}
        </Script>
      </body>
    </html>
  );
}
