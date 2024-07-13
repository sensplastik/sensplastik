import './Hamburger.scss';

import { cva } from 'cva';
import { memo } from 'react';

const componentStyles = cva('hamburger', {
  variants: {
    intent: {
      open: 'hamburger--open',
      close: 'hamburger--close',
      hide: 'hamburger--hide',
      show: 'hamburger--show'
    },
  },
});

interface HamburgerProps {
  state?:string
}

function Hamburger({state = 'show'}: HamburgerProps) {
  return (
    <div className={componentStyles({ intent: state  })}>
      <div className="hamburger__line"></div>
      <div className="hamburger__line"></div>
    </div>
  );
}

export default memo(Hamburger);