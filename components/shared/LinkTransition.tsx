'use client'

import gsap from 'gsap'
import { Flip } from 'gsap/all'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { transitionHelper } from '@/utils/transitionHelper'

gsap.registerPlugin(Flip)
function LinkTransition(props) {
  const router = useRouter()

  const currentPath = usePathname()
  const nextPath = props.href

  //
  const homePath = '/'
  const projectsPath = '/projects'

  const handleClick = async (e) => {
    const target = e.target

    const card = target.closest('.card')

    // Clicking on a card that send us to the project page
    if (card && nextPath.toString().startsWith(projectsPath)) {
      e.preventDefault()
 
      const cardState = Flip.getState(card);
      const cardBody =  card.querySelector('.card__body')
      gsap.set(cardBody, {
        autoAlpha:0,
      })
      gsap.set(card, {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'fixed',
        zIndex:997
      })

      Flip.from(cardState, {duration: .6, ease: "power2.out", onComplete:()=>{
        router.push(nextPath)
      }});
    }
  }

  return (
    <Link onClick={handleClick} {...props}>
      {props.children}
    </Link>
  )
}

export default LinkTransition
