
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Outfit, Cinzel } from "next/font/google"
import ChatBox from "../components/ChatBox"
import Script from "next/script"
import SmoothScroll from "@/components/smooth-scroll"
import { Suspense } from "react"

const headingFont = Cinzel({ subsets: ["latin"], variable: "--font-heading" })
const bodyFont = Outfit({ subsets: ["latin"], variable: "--font-body" })


export const metadata = {
  title: "Quantum Wellness - Premium Fitness & Wellness",
  description:
    "Transform your health with our premium wellness programs, personal training, and holistic approaches to fitness.",
  generator: "v0.app",
  icons: {
    icon: "/logo-site-icon1.svg",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-sans antialiased`}>
        <Script id="meta-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1569914434110521');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1569914434110521&ev=PageView&noscript=1"
          />
        </noscript>

        <Suspense fallback={null}>
          <SmoothScroll>
            <Header />
            <main className="min-h-screen">{children}</main>
            <ChatBox />
            <Footer />
          </SmoothScroll>
        </Suspense>
      </body>
    </html>
  )
}
