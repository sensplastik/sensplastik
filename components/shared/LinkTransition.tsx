'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { transitionHelper } from '@/utils/transitionHelper'

function LinkTransition(props) {
  const router = useRouter()

  const currentPath = usePathname()
  const nextPath = props.href

  //
  const homePath = '/'
  const projectsPath = '/projects/'

  //
  function getNavigationType() {
    if (currentPath === homePath && nextPath === projectsPath) {
      return 'home-to-project-page'
    } else if (currentPath === projectsPath && nextPath === homePath) {
      return 'home-to-project-page'
    }

    return 'other'
  }

  const handleClick = async (e) => {
    const navigationType = getNavigationType()

    if (navigationType === 'home-to-project-page') {
      e.target.style.viewTransitionName = 'card'
    }

    const transition = transitionHelper({
      updateDOM() {
        // This is a pretty heavy-handed way to update page content.
        // In production, you'd likely be modifying DOM elements directly,
        // or using a framework.
        // innerHTML is used here just to keep the DOM update super simple.

        router.push(nextPath)

        if (navigationType === 'project-page-to-home') {
          e.target.style.viewTransitionName = 'card'
        }
      },
    })

    transition.finished.finally(() => {
      // Clear the temporary tag
      if (e.target) e.target.style.viewTransitionName = ''
    })
  }

  return (
    <Link onClick={handleClick} {...props}>
      {props.children}
    </Link>
  )
}

export default LinkTransition
