import React, { useEffect } from 'react';

const useEventListener = <T extends Event>(
  target: EventTarget,
  event: string,
  callback: (event: T) => void,
  options?: boolean | AddEventListenerOptions,
) => {
  const eventListener: EventListener = (event: Event) => {
    return callback(event as T);
  };

  useEffect(() => {
    target.addEventListener(event, eventListener, options);
    return () => {
      target.removeEventListener(event, eventListener, options);
    };
  }, []);
};

export default useEventListener;
