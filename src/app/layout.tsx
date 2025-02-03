import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export const metadata = {
  title: {
    default: 'NextJs-15 tutorial',
    template: '%s | Leopolt'
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
