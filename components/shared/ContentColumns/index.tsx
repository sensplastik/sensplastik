import "./ContentColumns.scss";

import { cva } from "cva";
import React from "react";

import { sanitizeContent } from "@/utils/sanitizeContent";

const componentStyles = cva("content-columns");

export interface ColumnArticleProps {
  title?: string;
  content?: string;
  gridColumnStart?: number; 
  gridColumnWidth?: number; 
}

export interface ContentColumnsProps {
  className?: string;
  items?: ColumnArticleProps[];
}


// Default data for ContentColumns items
const defaultItems: ColumnArticleProps[] = [
  {
    title: "Sensplastik®",
    content: "<p>Building Brands with Lasting Stability</p>",
    gridColumnStart: 7,
    gridColumnWidth: 2,
  },
];

export const ContentColumns: React.FC<ContentColumnsProps> = ({ className = "",  items = defaultItems}) => {
  return (
    <div className={componentStyles({ class: className })}>
      {items.map((item, index) => {        
        const { title, content, gridColumnStart, gridColumnWidth } = item;

         // Check if title exists and is truthy
        const renderTitle = title && title.trim() !== "";
        // Ensure content exists and sanitize it
        const sanitizedContent = content ? sanitizeContent(content) : "";

        return (
          <article 
            className="content-columns__item"
            key={index}
            style={{
              gridColumnStart: gridColumnStart,
              gridColumnEnd: `span ${gridColumnWidth}`,
            }}
          >
            {renderTitle && <h4 className="content-columns__title">{title}</h4>}
            {sanitizedContent && <div className="content-columns__content" dangerouslySetInnerHTML={{ __html: sanitizedContent }} />}
          </article>
        );
      })}
    </div>
  );
};
