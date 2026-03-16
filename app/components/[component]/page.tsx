import { componentRegistry } from "@/data/component-registry"
import { notFound } from "next/navigation"
import { ComponentWrapper } from "@/features/component-viewer/component-wrapper"
import { ComponentDetailView } from "@/features/component-viewer/component-detail-view"

type Props = {
  params: Promise<{ component: string }>
}

export async function generateStaticParams() {
  return componentRegistry.map((c) => ({ component: c.name }))
}

export async function generateMetadata({ params }: Props) {
  const { component } = await params
  const entry = componentRegistry.find((c) => c.name === component)
  return { title: entry?.title ?? "Component" }
}

export default async function ComponentPage({ params }: Props) {
  const { component } = await params
  const entry = componentRegistry.find((c) => c.name === component)

  if (!entry) notFound()

  return (
    <ComponentWrapper
      title={entry.title}
      description={entry.description}
      category={entry.category}
    >
      <ComponentDetailView name={entry.name} />
    </ComponentWrapper>
  )
}
