import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8">
        {/* Left Section */}
        <div>
          {/* Badge */}
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            🚀 SprintPilot
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">
            Plan smarter.
            <br />
            Build faster.
            <br />
            Deliver on time.
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Manage projects, collaborate with your team, and keep every sprint
            on track with SprintPilot.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex items-center gap-4">
            <Link
              href="/signup"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
            >
              Get Started
            </Link>

            <Link
              href="/demo"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100"
            >
              Live Demo
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center">
          <div className="flex h-96 w-full items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 shadow-lg">
            <p className="text-lg font-medium text-gray-500">
              Dashboard Preview
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
