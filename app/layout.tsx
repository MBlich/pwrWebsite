import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Wydział Informatyki i Telekomunikacji - Politechnika Wrocławska",
  description: "Oficjalna strona Wydziału Informatyki i Telekomunikacji Politechniki Wrocławskiej",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

