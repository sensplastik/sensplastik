import './Logo.scss'

import { cva } from 'cva'
import Link from 'next/link'

import LinkTransition from '../../shared/LinkTransition'
import { Logo } from './index'

const componentStyles = cva('logo')

interface LogoFullProps {
  className?: string
  color?: string
  link?: string
}

export function LogoFull({
  color = '',
  className = '',
  link = '/',
}: LogoFullProps) {
  return (
    <LinkTransition href={link} className={componentStyles({ class: className })}>
      <Logo color={color} />
      <p className="slogan" style={{color:color || undefined}}>
        Corporate made Beautiful with <br />
        Purpose and Simplicity.
      </p>
    </LinkTransition>
  )
}
