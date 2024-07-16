import { HomePage } from '../../../components/pages/home/HomePage'
import { ContentSlot, createBoard } from '@wixc3/react-board'

import React from 'react'

export default createBoard({
  name: 'Home Page',

  Board: () => (
    <ContentSlot>
      <HomePage />
    </ContentSlot>
  ),

  isSnippet: true,

  environmentProps: {
    windowWidth: 1440,
  },

  tags: ['Static page'],
})
