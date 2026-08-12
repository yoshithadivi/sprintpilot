import { CheckCircle2, Circle, Clock3 } from 'lucide-react'

import { Card } from '@/components/ui/card'

const COLUMNS = [
  {
    title: 'Backlog',
    count: 4,
    tasks: [
      { title: 'Design onboarding', status: 'todo' },
      { title: 'Create user flow', status: 'todo' },
    ],
  },
  {
    title: 'In Progress',
    count: 2,
    tasks: [
      { title: 'Build dashboard', status: 'progress' },
      { title: 'API integration', status: 'progress' },
    ],
  },
  {
    title: 'Done',
    count: 6,
    tasks: [
      { title: 'Project setup', status: 'done' },
      { title: 'Authentication', status: 'done' },
    ],
  },
]

function TaskStatus({ status }: { status: string }) {
  if (status === 'done') {
    return <CheckCircle2 className="size-3.5 text-primary" />
  }

  if (status === 'progress') {
    return <Clock3 className="size-3.5 text-accent" />
  }

  return <Circle className="size-3.5 text-muted-foreground" />
}

export function DashboardPreview() {
  return (
    <Card className="overflow-hidden border-border bg-card shadow-sm">
      {/* Header */}
      <div className="border-b border-border px-5 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">
              Product Launch
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              Sprint 24 · 8 days remaining
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm font-semibold text-primary">82%</p>
            <p className="text-xs text-muted-foreground">completed</p>
          </div>
        </div>

        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-[82%] rounded-full bg-primary" />
        </div>
      </div>

      {/* Board */}
      <div className="grid grid-cols-3 gap-3 p-4">
        {COLUMNS.map((column) => (
          <div key={column.title} className="min-w-0">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                {column.title}
              </p>

              <span className="text-[11px] text-muted-foreground">
                {column.count}
              </span>
            </div>

            <div className="space-y-2">
              {column.tasks.map((task) => (
                <div
                  key={task.title}
                  className="rounded-md border border-border bg-background p-3"
                >
                  <div className="flex items-start gap-2">
                    <TaskStatus status={task.status} />

                    <p className="min-w-0 text-xs font-medium leading-4 text-foreground">
                      {task.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
