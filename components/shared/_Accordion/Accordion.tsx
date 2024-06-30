"use client"
import * as ReactAccordion from "@radix-ui/react-accordion"
import { cva } from "cva"
import React from "react"

import { sanitizeContent } from "@/utils/sanitizeContent"

const componentStyles = cva("accordion")

export interface AccordionItemWorkProps {
  image?: string
  title?: string
}

export interface AccordionItemProps {
  index?: number
  title?: string
  content?: string
  works?: AccordionItemWorkProps[]
}

export interface AccordionProps {
  className?: string
  items?: AccordionItemProps[]
}

// Default data for items
const defaultItems: AccordionItemProps[] = [
  {
    index: 1,
    title: "Brand Design & Visual Identity",
    content: "<p>We delve deep into the essence of your brand, combining tested methodologies with creative intuition to articulate a visual identity that resonates with your audience. From logo design to brand guidelines, we craft a cohesive brand experience that stands the test of time.</p>",
  },
  {
    index: 2,
    title: "Digital Experience  Design System",
  },
  {
    index: 3,
    title: "Websites & Platforms Design & Development",
  },
  {
    index: 4,
    title: "Print and Production Management",
  },
]

export const Accordion: React.FC<AccordionProps> = ({ className = "", items = defaultItems }) => {
  return (
    <div className={componentStyles({ class: className })}>
      <ReactAccordion.Root type="single" collapsible>
        {items.map((item, index) => {
          // Ensure content exists and sanitize it
          const sanitizedContent = item?.content ? sanitizeContent(item.content) : ""
          
          return (
            <ReactAccordion.Item key={index} value={`item-${index}`}>
              <ReactAccordion.Header>
                <ReactAccordion.Trigger>
                  {item.index} {item.title}
                </ReactAccordion.Trigger>
              </ReactAccordion.Header>
              <ReactAccordion.Content>
                {sanitizedContent ? (
                  <span dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
                ) : (
                  <span></span>
                )}
              </ReactAccordion.Content>
            </ReactAccordion.Item>
          )
        })}
      </ReactAccordion.Root>
    </div>
  )
}
