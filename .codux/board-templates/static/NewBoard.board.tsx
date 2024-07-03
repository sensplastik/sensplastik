import { ContentSlot, createBoard } from '@wixc3/react-board';

import React from 'react';

export default createBoard({

    name: 'New Board',

    Board: () => <ContentSlot />,

    isSnippet: true,

    environmentProps: {
        windowWidth: 1440,
    },

    tags: ['Static page'],

});