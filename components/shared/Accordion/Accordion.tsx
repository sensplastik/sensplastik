'use client'

import './Accordion.scss'

import * as ReactAccordion from '@radix-ui/react-accordion'
import { cva } from 'cva'

import { sanitizeContent } from '@/utils/sanitizeContent'

import { AccordionCard, AccordionCardProps } from './AccordionCard'
import ArrowIcon from './ArrowIcon.svg'

const componentStyles = cva('accordion')

export interface AccordionItemProps {
  index?: number
  title?: string
  content?: string
  listTitle?: string
  listItems?: AccordionCardProps[]
}

export interface AccordionProps {
  className?: string
  items?: AccordionItemProps[]
}

// Default data for items
const defaultItems: AccordionItemProps[] = [
  {
    index: 1,
    title: 'Brand Design & Visual Identity',
    content:
      '<p>We delve deep into the essence of your brand, combining tested methodologies with creative intuition to articulate a visual identity that resonates with your audience. From logo design to brand guidelines, we craft a cohesive brand experience that stands the test of time.</p>',
    listTitle: 'Work Samples',
    listItems: [
      {
        image:
          'https://cdn.sanity.io/images/m94ln1re/production/b94388a123c7455df5813b08aa035190043877eb-4096x2731.jpg',
        title: 'Re-Store®',
        url: '/projects/today-mobility',
      },
      {
        image:
          'https://cdn.sanity.io/images/m94ln1re/production/b94388a123c7455df5813b08aa035190043877eb-4096x2731.jpg',
        title: 'Re-Store®',
        url: '/projects/today-mobility',
      },
    ],
  }
]

export function Accordion({
  className = '',
  items = defaultItems,
}: AccordionProps) {
  //
  //const [value, setValue] = useState<string | null>(null)

  //const container = useRef<HTMLDivElement>(null)

  return (
    <div className={componentStyles({ class: className })}>
      <ReactAccordion.Root type="single" collapsible defaultValue="item-0">
        {items.map((item, index) => {
          // Ensure content exists and sanitize it
          const sanitizedContent = item?.content
            ? sanitizeContent(item.content)
            : ''

          return (
            <ReactAccordion.Item
              key={index}
              value={`item-${index}`}
              className="accordion__item"
            >
              <ReactAccordion.Header className="accordion__header">
                <ReactAccordion.Trigger className="accordion__trigger">
                  <span className="accordion__index">{item.index}</span>
                  <span className="accordion__title">{item.title}</span>
                  <span className="accordion__icon">
                    <ArrowIcon />
                  </span>
                </ReactAccordion.Trigger>
              </ReactAccordion.Header>
              <ReactAccordion.Content  forceMount={true} className="accordion__content">
                {/* Content text*/}
                {sanitizedContent ? (
                  <article
                    className="accordion__article"
                    dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                  />
                ) : (
                  <span>&nbsp;</span>
                )}

                {/* Cards */}
                <div className="accordion__cards">
                  <h6 className="accordion__list-title">{item.listTitle}</h6>
                  <ul className="accordion__list">
                    {item.listItems &&
                      item.listItems.map((listItem, listIndex) => {
                        return (
                          <li className="accordion__list-item" key={listIndex}>
                            <AccordionCard
                              title={listItem.title}
                              image={listItem.image}
                              url={listItem.url}
                            />
                          </li>
                        )
                      })}
                  </ul>
                </div>
              </ReactAccordion.Content>
            </ReactAccordion.Item>
          )
        })}
      </ReactAccordion.Root>
    </div>
  )
}
