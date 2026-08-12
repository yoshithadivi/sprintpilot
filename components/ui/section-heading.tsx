type SectionHeadingProps = {
  title: string
  description: string
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-4xl font-bold tracking-tight text-gray-900">
        {title}
      </h2>

      <p className="mt-4 text-lg text-gray-600">{description}</p>
    </div>
  )
}
