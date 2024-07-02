import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children }: { children: React.ReactNode }) => {
  const el = useRef(document.createElement('div'));

  useEffect(() => {
    const portalRoot = document.getElementById('portal-root')!;
    const currentEl = el.current;
    portalRoot.appendChild(currentEl);
    return () => {
      portalRoot.removeChild(currentEl);
    };
  }, []);

  return ReactDOM.createPortal(children, el.current);
};

export default Portal;