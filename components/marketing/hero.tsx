import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { DashboardPreview } from './dashboard-preview'

export default function Hero() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className=" font-heading text-sm font-semibold uppercase tracking-[0.12em] text-primary">
              Project management for modern teams
            </p>

            <h1 className="mt-5 max-w-xl text-5xl font-semibold tracking-[-0.03em] text-foreground sm:text-6xl">
              Plan smarter.
              <br />
              Build faster.
              <br />
              Deliver on time.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
              One workspace to plan sprints, manage work, and keep your team
              moving from idea to delivery.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <Button size="lg">
                <Link href="/signup">Get Started</Link>
              </Button>

              <Button variant="ghost" size="lg">
                <Link href="/demo">View demo →</Link>
              </Button>
            </div>
          </div>

          <DashboardPreview />
        </div>
      </Container>
    </Section>
  )
}
