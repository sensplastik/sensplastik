import StaticPageInformation from '../../../../../app/(static)/information/main'
import { ContentSlot, createBoard } from '@wixc3/react-board'

import React from 'react'

export default createBoard({
  name: 'Static Page Information',

  Board: () => (
    <ContentSlot>
      <StaticPageInformation />
    </ContentSlot>
  ),

  isSnippet: true,

  environmentProps: {
    windowWidth: 1440,
  },

  tags: ['Static page'],
})
