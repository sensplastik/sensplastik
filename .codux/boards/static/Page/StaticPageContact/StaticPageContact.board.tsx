import StaticPageContact from '../../../../../app/(static)/contact/main'
import { ContentSlot, createBoard } from '@wixc3/react-board'

import React from 'react'

export default createBoard({
  name: 'Static Page Contact',

  Board: () => (
    <ContentSlot>
      <StaticPageContact />
    </ContentSlot>
  ),

  isSnippet: false,

  environmentProps: {
    windowWidth: 1440,
  },

  tags: ['Static page'],
})
