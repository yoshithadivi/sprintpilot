import { CalendarDays, Circle, Flag, Plus } from 'lucide-react'

import { Card } from '@/components/ui/card'

const TASKS = [
  {
    title: 'Define onboarding flow',
    priority: 'High',
  },
  {
    title: 'Create dashboard wireframes',
    priority: 'Medium',
  },
  {
    title: 'Review API requirements',
    priority: 'Low',
  },
]

const PRIORITY_STYLES = {
  High: 'text-accent',
  Medium: 'text-foreground',
  Low: 'text-muted-foreground',
}

export function SprintPlanningPreview() {
  return (
    <Card className="overflow-hidden border-border bg-card shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div>
          <p className="text-sm font-semibold text-foreground">Sprint 25</p>

          <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
            <CalendarDays className="size-3.5" />
            <span>Jun 10 – Jun 21</span>
          </div>
        </div>

        <span className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
          Planning
        </span>
      </div>

      {/* Sprint content */}
      <div className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Sprint backlog
          </p>

          <button
            type="button"
            className="flex items-center gap-1 text-xs font-medium text-primary"
          >
            <Plus className="size-3.5" />
            Add task
          </button>
        </div>

        <div className="space-y-2">
          {TASKS.map((task) => (
            <div
              key={task.title}
              className="flex items-center gap-3 rounded-md border border-border bg-background px-3 py-3"
            >
              <Circle className="size-4 shrink-0 text-muted-foreground" />

              <span className="flex-1 text-sm text-foreground">
                {task.title}
              </span>

              <div className="flex items-center gap-1.5">
                <Flag
                  className={`size-3.5 ${PRIORITY_STYLES[task.priority as keyof typeof PRIORITY_STYLES]}`}
                />

                <span className="text-xs text-muted-foreground">
                  {task.priority}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
