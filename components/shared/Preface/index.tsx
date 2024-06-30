import './Preface.scss'

import { cva } from 'class-variance-authority'

import { sanitizeContent } from '@/utils/sanitizeContent'

const componentStyles = cva('intro')

export interface PrefaceProps {
  className?: string
  content?: string
  contentColumns?: number
}

export function Preface({
  className = '',
  content = '<p>Building Brands with Lasting Stability</p>',
  contentColumns = 1,
}: PrefaceProps) {
  // Sanitize content on the server side
  const sanitizedContent = sanitizeContent(content)

  // Render article only if sanitizedContent is truthy
  const hasContent = !!sanitizedContent

  return (
    <div className={componentStyles({ class: className })}>
      <div className="intro__right">
        {hasContent && (
          <article
            className="intro__article"
            style={{ columnCount: contentColumns }}
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          ></article>
        )}
      </div>
    </div>
  )
}
