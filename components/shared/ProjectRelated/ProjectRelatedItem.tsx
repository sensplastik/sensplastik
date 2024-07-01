import { ProjectDeliverable } from "../ProjectInfo"

export interface ProjectRelatedItem {
  slug: string
  title: string
  deliverables: ProjectDeliverable[]
}

export function ProjectRelatedItem(props: ProjectRelatedItem) {
  const { slug, title, deliverables } = props
  return (
    <>
      <span>{slug}</span>
      <p>{title}</p>
    </>
  )
}
