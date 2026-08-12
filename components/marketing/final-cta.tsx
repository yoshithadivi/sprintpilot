import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'

export function FinalCta() {
  return (
    <Section className="border-t border-border bg-background">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
            Get started
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ready to bring your next sprint into focus?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground">
            Plan the work, keep your team aligned, and ship with confidence.
          </p>

          <div className="mt-8">
            <Button size="lg">
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
