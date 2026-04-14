import type { Metadata } from "next"
import { globalStyles } from "../styles/globalStyles"
import "./globals.css"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!

export const metadata: Metadata = {
  title: "Ishaan Choubey",
  description: "Personal portfolio of Ishaan Choubey — builder, full stack engineer, co-founder at Thinkly.",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: "Ishaan Choubey",
    description: "Personal portfolio of Ishaan Choubey — builder, full stack engineer, co-founder at Thinkly.",
    url: BASE_URL,
    siteName: "Ishaan Choubey",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Ishaan Choubey — Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishaan Choubey",
    description: "Personal portfolio of Ishaan Choubey — builder, full stack engineer, co-founder at Thinkly.",
    images: ["/preview.png"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
        {children}
      </body>
    </html>
  )
}
