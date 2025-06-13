import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Canvas Section Management Tool - LTI Launch',
  description: 'LTI launch page for Canvas Section Management Tool',
}

export default function LTILaunchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
} 