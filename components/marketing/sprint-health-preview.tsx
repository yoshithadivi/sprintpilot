import { ArrowUpRight, CheckCircle2, CircleAlert } from 'lucide-react'

import { Card } from '@/components/ui/card'

const METRICS = [
  {
    label: 'Completed',
    value: '24 / 29',
    icon: CheckCircle2,
    iconClassName: 'text-primary',
  },
  {
    label: 'Blocked',
    value: '2',
    icon: CircleAlert,
    iconClassName: 'text-accent',
  },
]

const ACTIVITY = [
  {
    label: 'Sprint completion',
    value: '82%',
  },
  {
    label: 'Velocity',
    value: '+14%',
  },
  {
    label: 'Remaining',
    value: '5 tasks',
  },
]

export function SprintHealthPreview() {
  return (
    <Card className="overflow-hidden border-border bg-card shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div>
          <p className="text-sm font-semibold text-foreground">Sprint health</p>

          <p className="mt-1 text-xs text-muted-foreground">
            Sprint 25 · 8 days remaining
          </p>
        </div>

        <div className="flex items-center gap-1.5 rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
          <span className="size-1.5 rounded-full bg-primary" />
          On track
        </div>
      </div>

      {/* Main metric */}
      <div className="border-b border-border px-5 py-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-4xl font-semibold tracking-tight text-foreground">
              82%
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              sprint completion
            </p>
          </div>

          <div className="flex items-center gap-1 text-sm font-medium text-primary">
            <ArrowUpRight className="size-4" />
            14%
          </div>
        </div>

        {/* Progress */}
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-[82%] rounded-full bg-primary" />
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 border-b border-border">
        {METRICS.map((metric) => {
          const Icon = metric.icon

          return (
            <div
              key={metric.label}
              className="px-5 py-4 first:border-r first:border-border"
            >
              <div className="flex items-center gap-2">
                <Icon className={`size-4 ${metric.iconClassName}`} />

                <span className="text-xs text-muted-foreground">
                  {metric.label}
                </span>
              </div>

              <p className="mt-2 text-lg font-semibold text-foreground">
                {metric.value}
              </p>
            </div>
          )
        })}
      </div>

      {/* Activity */}
      <div className="grid grid-cols-3 gap-4 px-5 py-4">
        {ACTIVITY.map((item) => (
          <div key={item.label}>
            <p className="text-[11px] text-muted-foreground">{item.label}</p>

            <p className="mt-1 text-sm font-medium text-foreground">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </Card>
  )
}
