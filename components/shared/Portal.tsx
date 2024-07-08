import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children }: { children: React.ReactNode }) => {
  const [el, setEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const portalElement = document.createElement('div');
    setEl(portalElement);

    const portalRoot = document.getElementById('portal-root')!;
    portalRoot.appendChild(portalElement);

    return () => {
      portalRoot.removeChild(portalElement);
    };
  }, []);

  if (!el) return null;

  return ReactDOM.createPortal(children, el);
};

export default Portal;
