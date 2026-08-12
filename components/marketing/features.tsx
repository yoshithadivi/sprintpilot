import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'

import { FeatureShowcase } from './feature-showcase'
import { SprintPlanningPreview } from './sprint-planning-preview'
import { KanbanPreview } from './kanban-preview'
import { SprintHealthPreview } from './sprint-health-preview'

export default function Features() {
  return (
    <>
      <Section className="border-t border-border bg-card">
        <Container>
          <SectionHeading
            title="Built around the way your team ships"
            description="SprintPilot connects planning, execution, and delivery so your team always knows what to work on, what's moving, and what's getting in the way."
          />
        </Container>
      </Section>

      <FeatureShowcase
        number="01"
        eyebrow="PLAN"
        title="Turn ideas into actionable sprints."
        description="Organize your backlog, prioritize the work that matters, estimate effort, and build focused sprints your team can actually finish."
        visual={<SprintPlanningPreview />}
        className="bg-background"
      />
      <FeatureShowcase
        number="02"
        eyebrow="EXECUTE"
        title="Keep everyone aligned while work moves."
        description="Move tasks through the sprint, assign ownership, and keep conversations close to the work so everyone knows what is happening."
        visual={<KanbanPreview />}
        reverse
        className="bg-card"
      />
      <FeatureShowcase
        number="03"
        eyebrow="DELIVER"
        title="See what's moving before it becomes a problem."
        description="Understand sprint health, delivery progress, and potential blockers before they turn into surprises."
        visual={<SprintHealthPreview />}
        className="bg-background"
      />
    </>
  )
}
