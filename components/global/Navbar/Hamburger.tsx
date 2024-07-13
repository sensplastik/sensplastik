import './Hamburger.scss';
import { cva } from 'cva';
import { memo } from 'react';

// Define component styles using cva
const componentStyles = cva('hamburger', {
  variants: {
    intent: {
      open: 'hamburger--open',
      close: '', // Optionally, you might want to specify a default class here or omit if not needed
    },
  },
  defaultVariants: {
    intent: 'close', // Default to 'close' variant if no `intent` is provided
  },
});

// Define props interface with the correct type for `state`
interface HamburgerProps {
  state?: 'open' | 'close'; // Restrict to 'open' or 'close' values
}

// Functional component
function Hamburger({ state = 'close' }: HamburgerProps) {
  return (
    <div className={componentStyles({ intent: state })}>
      <div className="hamburger__line"></div>
      <div className="hamburger__line"></div>
    </div>
  );
}

export default memo(Hamburger);
