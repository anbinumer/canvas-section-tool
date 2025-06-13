import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Canvas Section Management Tool',
  description: 'A tool for managing student sections in Canvas LMS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}>
        <main style={{ minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
          {children}
        </main>
      </body>
    </html>
  )
} 