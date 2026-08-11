const FEATURES = [
  {
    title: 'Task Management',
    description: 'Organize tasks with priorities, due dates, and statuses.',
    icon: '📋',
  },
  {
    title: 'Team Collaboration',
    description: 'Collaborate with teammates in real time.',
    icon: '👥',
  },
  {
    title: 'Sprint Planning',
    description: 'Plan and organize every sprint efficiently.',
    icon: '🚀',
  },
  {
    title: 'Analytics',
    description: 'Track team productivity with insightful dashboards.',
    icon: '📈',
  },
  {
    title: 'Notifications',
    description: 'Never miss important updates or deadlines.',
    icon: '🔔',
  },
  {
    title: 'Cloud Sync',
    description: 'Access your workspace from anywhere.',
    icon: '☁️',
  },
]

export default function Features() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Everything you need to manage projects
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Powerful features built for modern teams to collaborate, plan, and
            deliver faster.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="text-4xl">{feature.icon}</div>

              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
