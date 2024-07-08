import './Hamburger.scss';

import { cva } from 'cva';
import { memo } from 'react';

const componentStyles = cva('hamburger', {
  variants: {
    intent: {
      open: 'hamburger--open',
      hide: 'hamburger--hide',
      show: 'hamburger--show'
    },
  },
});

interface HamburgerProps {
  open?: boolean; // open with effects (x)
  hide?: boolean; // hide with effects
  show?: boolean; // show with effects
}

function Hamburger({ open = false, hide = false , show = true}: HamburgerProps) {
  return (
    <div className={componentStyles({ intent: open ? 'open' : hide ? 'hide' : show ? 'show' : undefined  })}>
      <div className="hamburger__line"></div>
      <div className="hamburger__line"></div>
    </div>
  );
}

export default memo(Hamburger);