import './HorizontalMenu.scss';

import { useGSAP } from '@gsap/react';
import { cva } from 'cva';
import gsap from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all'; // Import ScrollToPlugin

import React, { useLayoutEffect, useRef, useState } from 'react';
import { HorizontalMenuItem, HorizontalMenuItemProps } from './HorizontalMenuItem';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); // Register ScrollToPlugin

const menuStyles = cva('horizontal-menu');

export interface HorizontalMenuProps {
  className?: string;
  items?: HorizontalMenuItemProps[];
}

// Default data for items
const defaultItems: HorizontalMenuItemProps[] = [
  {
    index: 1,
    title: 'Introduction',
  },
];

export function HorizontalMenu({
  className = '',
  items = defaultItems,
}: HorizontalMenuProps) {
  const container = useRef<HTMLDivElement>(null);
  const [menuHeight, setMenuHeight] = useState(0);

  useLayoutEffect(() => {
    if (container.current) {
      setMenuHeight(container.current.offsetHeight);
    }
  }, []);

  useGSAP(() => {
    const links = items.map((item) => item.url);

    // Remove existing event listeners to prevent duplication
    links.forEach((link) => {
      const menuLink = container.current?.querySelector(`[href="${link}"]`);
      menuLink?.removeEventListener('click', handleClick);
    });

    links.forEach((link) => {
      if (link?.startsWith('#')) {
        const anchorId = link;
        const menuLink = container.current?.querySelector(`[href="${link}"]`);
        const menuItem = menuLink?.closest('.horizontal-menu-item');
        const sectionWrapper = document.querySelector(anchorId);

        if (sectionWrapper) {
          ScrollTrigger.create({
            trigger: sectionWrapper,
            start: `top+=${menuHeight} center`, // Adjust for nav height
            end: `bottom+=${menuHeight} center`, // Adjust for nav height
            onEnter: function () {
              menuItem?.classList.add('horizontal-menu-item--active');
            },
            onEnterBack: function () {
              menuItem?.classList.add('horizontal-menu-item--active');
            },
            onLeave: () => {
              menuItem?.classList.remove('horizontal-menu-item--active');
            },
            onLeaveBack: () => {
              menuItem?.classList.remove('horizontal-menu-item--active');
            },
          });

          // Add click handler here
          menuLink?.addEventListener('click', handleClick);
        }
      }
    });

    // Cleanup function
    return () => {
      links.forEach((link) => {
        const menuLink = container.current?.querySelector(`[href="${link}"]`);
        menuLink?.removeEventListener('click', handleClick);
      });
    };
  }, [menuHeight, items]);

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    const target = event.currentTarget as HTMLAnchorElement;
    const sectionWrapper = document.querySelector(target.getAttribute('href') || '');

    if (sectionWrapper) {
      gsap.to(window, {
        scrollTo: {
          y: sectionWrapper,
          offsetY: menuHeight + 40, // Adjust offsetY according to your nav height
        },
        duration: 1.5,
        ease: 'expo.inOut',
      });
    }
  };

  return (
    <nav className={menuStyles({ class: className })} ref={container}>
      <ul className="horizontal-menu__list">
        {items.map((item, index) => (
          <li className="horizontal-menu__item" key={index}>
            <HorizontalMenuItem {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
