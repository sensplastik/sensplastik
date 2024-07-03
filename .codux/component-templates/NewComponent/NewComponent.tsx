import React from 'react'
import './NewComponent.scss'
import { cva } from 'class-variance-authority'

// Define the styles for the component using class-variance-authority
const componentStyles = cva('component')

// Define the props for the component
interface NewComponentProps {
  className?: string // Optional className for additional styling
}

// The NewComponent function component
export function NewComponent({ className = '' }: NewComponentProps) {
  return (
    <div className={componentStyles({ class: className })}>
      <h3>My NewComponent Component</h3>
      <p>
        This component serves as a reusable and versatile element in your application. 
        It provides a consistent layout and styling, and can be easily customized 
        using the optional <code>className</code> prop. Styled with SCSS and class-variance-authority, 
        it ensures a clean and maintainable codebase.
      </p>
    </div>
  )
}
