import debounce from 'lodash.debounce'; // You can use lodash.debounce or write your own debounce function
import { useEffect,useRef, useState } from 'react';
//import ResizeObserver from 'resize-observer-polyfill';

const useResizeObserver = (initialSize = { width: 0, height: 0 }) => {
  const [size, setSize] = useState(initialSize);
  const elementRef = useRef(null);

  useEffect(() => {
    // Debounced resize handler
    const handleResize = debounce((entries) => {
      window.requestAnimationFrame(() => {
        for (let entry of entries) {
          const newSize = {
            width: entry.contentRect.width,
            height: entry.contentRect.height,
          };
          if (newSize.width !== size.width || newSize.height !== size.height) {
            setSize(newSize);
          }
        }
      });
    }, 100); // Adjust debounce delay as needed

    // Create a ResizeObserver instance
    const resizeObserver = new ResizeObserver(handleResize);

    // Observe the element if it exists
    if (elementRef.current) {
      resizeObserver.observe(elementRef.current);
    }

    // Cleanup the observer on unmount
    return () => {
      if (elementRef.current) {
        resizeObserver.unobserve(elementRef.current);
      }
      handleResize.cancel(); // Clean up debounce function
    };
  }, [size]); // Add size to dependency array to ensure updates

  return [size, elementRef];
};

export default useResizeObserver;
