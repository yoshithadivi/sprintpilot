import { WorkspaceSection } from '@/components/marketing/workspace-section'
import Features from '../../components/marketing/features'
import Hero from '../../components/marketing/hero'
import { FinalCta } from '@/components/marketing/final-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <WorkspaceSection />
      <FinalCta />
    </>
  )
}
