import { useEffect, useRef, useState } from 'react';

const useResizeObserver = (
  element: HTMLElement | null,
  callBack: (entries: ResizeObserverEntry[]) => void,
) => {
  const elementRef = useRef<HTMLElement>(null);
  const [resizedValue, setResizedValue] = useState(Number);
  const resizeObserver = new ResizeObserver((entries) => {
    callBack(entries);
    setResizedValue(entries[0].contentRect.width);
  });

  useEffect(() => {
    if (element) {
      resizeObserver.observe(element);
    } else if (elementRef.current) {
      resizeObserver.observe(elementRef.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [element, elementRef]);

  return { elementRef, resizedValue };
};

export default useResizeObserver;
