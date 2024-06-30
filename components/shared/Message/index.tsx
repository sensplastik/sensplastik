import './Message.scss'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { sanitizeContent } from '@/utils/sanitizeContent'

interface MessageProps {
  content?: string | any[]
  title?: string
}

export function Message({ title, content }: MessageProps) {
  // Return null if both content and title are missing
  if (!content && !title) {
    return null
  }

  return (
    <div className="message">
      <article className="message__article">
        {/* Render title if provided */}
        {title && <strong className="message__title">{title}</strong>}

        {/* Render content based on its type */}
        {content && (
          <div className="message__content">
            {typeof content === 'string' 
              ? <div dangerouslySetInnerHTML={{ __html: sanitizeContent(content) }} />
              : <CustomPortableText value={content} />
            }
          </div>
        )}
      </article>
    </div>
  )
}
