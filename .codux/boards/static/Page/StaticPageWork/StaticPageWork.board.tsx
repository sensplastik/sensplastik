import StaticPageWork from '../../../../../app/(static)/work/main'
import { ContentSlot, createBoard } from '@wixc3/react-board'

import React from 'react'

export default createBoard({
  name: 'Static Page Work',

  Board: () => (
    <ContentSlot>
      <StaticPageWork />
    </ContentSlot>
  ),

  isSnippet: true,

  environmentProps: {
    windowWidth: 1440,
  },

  tags: ['Static page'],
})
