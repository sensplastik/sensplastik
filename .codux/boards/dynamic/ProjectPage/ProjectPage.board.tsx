import React from 'react'
import { createBoard } from '@wixc3/react-board'
import { ProjectPage } from '../../../../components/pages/project/ProjectPage'

export default createBoard({
  name: 'Project Page',
  Board: () => <ProjectPage />,
  isSnippet: true,
})
