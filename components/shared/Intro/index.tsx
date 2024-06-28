import './Intro.scss'

import { cva } from 'cva'
import React from 'react'

import { sanitizeContent } from '@/utils/sanitizeContent'

const componentStyles = cva('intro')

interface IntroProps {
  className?: string
  title?: string
  intro?:string
  content?: string  
}

export function Intro({
  className = '',
  title = 'Sensplastik®',
  intro = '',
  content = '',
}: IntroProps) {
  // Sanitize content on the server side
  const sanitizedContent = sanitizeContent(content)

  // Render article only if sanitizedContent is truthy
  const hasContent = !!sanitizedContent

  return (
    <div className={componentStyles({ class: className })}>
      <div className="intro__heading">
        {title && (<h3 className="intro__title">{title}</h3>)}
        {intro && (<p className="intro__sub-title">{intro}</p>)}
      </div>
      <div className="intro__content">
        {hasContent && (
          <article
            className="intro__article"            
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          ></article>
        )}
      </div>
    </div>
  )
}
