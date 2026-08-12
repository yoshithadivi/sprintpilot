import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'

type FeatureShowcaseProps = {
  number: string
  eyebrow: string
  title: string
  description: string
  visual: ReactNode
  reverse?: boolean
  className?: string
}

export function FeatureShowcase({
  number,
  eyebrow,
  title,
  description,
  visual,
  reverse = false,
  className,
}: FeatureShowcaseProps) {
  return (
    <Section className={cn('border-t border-border', className)}>
      <Container>
        <div
          className={cn(
            'grid items-center gap-12 lg:grid-cols-2 lg:gap-20',
            reverse && 'lg:[&>*:first-child]:order-2',
          )}
        >
          {/* Content */}
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-muted-foreground">
                {number}
              </span>

              <span className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                {eyebrow}
              </span>
            </div>

            <h3 className="mt-5 max-w-lg text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h3>

            <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">
              {description}
            </p>
          </div>

          {/* Product visual */}
          <div>{visual}</div>
        </div>
      </Container>
    </Section>
  )
}
