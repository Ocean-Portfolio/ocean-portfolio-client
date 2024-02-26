import { useEffect } from 'react';

const useEventListener = <T extends Event>(
  target: EventTarget | undefined,
  event: string,
  callback: (event: T) => void,
  options?: boolean | AddEventListenerOptions,
) => {
  const eventListener: EventListener = (event: Event) => {
    return callback(event as T);
  };

  useEffect(() => {
    typeof target !== 'undefined' &&
      target.addEventListener(event, eventListener, options);
    return () => {
      typeof target !== 'undefined' &&
        target.removeEventListener(event, eventListener, options);
    };
  }, []);
};

export default useEventListener;
