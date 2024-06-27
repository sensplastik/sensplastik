import './Message.scss'

import { CustomPortableText } from '@/components/shared/CustomPortableText'

interface MessageProps {
  content?: any[]
  title?: string
}
export function Message(props: MessageProps) {
  const { title, content } = props
  if (!content && !title) {
    return null
  }
  return (
    <div className="message">
      <article className="message__article">
        {/* Title */}
        {title && <strong className="message__title">{title}</strong>}
        {/* Content */}
        {content && (
          <div className="message__content">
            <CustomPortableText value={content} />
          </div>
        )}
      </article>
    </div>
  )
}
