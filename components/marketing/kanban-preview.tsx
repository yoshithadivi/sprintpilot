import { CheckCircle2, Circle, Clock3 } from 'lucide-react'

import { Card } from '@/components/ui/card'

const COLUMNS = [
  {
    title: 'Todo',
    tasks: [
      {
        title: 'Review user stories',
        icon: Circle,
      },
      {
        title: 'Finalize onboarding',
        icon: Circle,
      },
    ],
  },
  {
    title: 'In Progress',
    tasks: [
      {
        title: 'Build dashboard',
        icon: Clock3,
      },
      {
        title: 'Connect project API',
        icon: Clock3,
      },
    ],
  },
  {
    title: 'Done',
    tasks: [
      {
        title: 'Project setup',
        icon: CheckCircle2,
      },
      {
        title: 'Authentication',
        icon: CheckCircle2,
      },
    ],
  },
]

export function KanbanPreview() {
  return (
    <Card className="overflow-hidden border-border bg-card shadow-sm">
      <div className="border-b border-border px-5 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">Sprint 25</p>

            <p className="mt-1 text-xs text-muted-foreground">
              8 tasks · 3 members
            </p>
          </div>

          <span className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
            Active
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 p-4">
        {COLUMNS.map((column) => (
          <div key={column.title} className="min-w-0">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                {column.title}
              </p>

              <span className="text-[11px] text-muted-foreground">
                {column.tasks.length}
              </span>
            </div>

            <div className="space-y-2">
              {column.tasks.map((task) => {
                const Icon = task.icon

                return (
                  <div
                    key={task.title}
                    className="rounded-md border border-border bg-background p-3"
                  >
                    <div className="flex items-start gap-2">
                      <Icon
                        className={`size-3.5 shrink-0 ${
                          column.title === 'Done'
                            ? 'text-primary'
                            : column.title === 'In Progress'
                              ? 'text-accent'
                              : 'text-muted-foreground'
                        }`}
                      />

                      <p className="text-xs font-medium leading-4 text-foreground">
                        {task.title}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
