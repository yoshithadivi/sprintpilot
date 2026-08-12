import Link from 'next/link'

import { Container } from '@/components/ui/container'

const FOOTER_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Sign In', href: '/login' },
  { label: 'Get Started', href: '/signup' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <Container>
        <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/"
              className="text-sm font-semibold tracking-tight text-foreground"
            >
              SprintPilot
            </Link>

            <p className="mt-1 text-xs text-muted-foreground">
              Plan smarter. Build faster. Deliver on time.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-border py-5">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SprintPilot. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
