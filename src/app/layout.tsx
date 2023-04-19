import './globals.css'

export const metadata = {
  title: 'Easy Ship',
  description: 'Fast way to get web apps shipped',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
