import { Check, GitBranch, ListTodo, MessagesSquare } from 'lucide-react'

import { Card } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'

const WORKSPACE_ITEMS = [
  {
    title: 'Backlog',
    description: 'Capture and prioritize upcoming work.',
    icon: ListTodo,
  },
  {
    title: 'Sprints',
    description: 'Turn priorities into focused delivery cycles.',
    icon: GitBranch,
  },
  {
    title: 'Collaboration',
    description: 'Keep decisions and conversations close to the work.',
    icon: MessagesSquare,
  },
]

export function WorkspaceSection() {
  return (
    <Section className="border-t border-border bg-card">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
              One connected workspace
            </p>

            <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Everything your team needs stays connected.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">
              Move from ideas to completed work without losing context between
              planning, execution, and delivery.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-foreground">
              <Check className="size-4 text-primary" />
              One workspace from backlog to delivery
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {WORKSPACE_ITEMS.map((item) => {
              const Icon = item.icon

              return (
                <Card
                  key={item.title}
                  className="rounded-none border-0 bg-background p-6 shadow-none"
                >
                  <Icon className="size-5 text-primary" />

                  <h3 className="mt-5 text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
