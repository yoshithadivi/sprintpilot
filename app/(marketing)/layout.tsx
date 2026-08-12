import type { Metadata } from 'next'
import Navbar from '../../components/marketing/navbar'

export const metadata: Metadata = {
  title: 'Marketing - SprintPilot',
  description: 'Marketing pages layout',
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
