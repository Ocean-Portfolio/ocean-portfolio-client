import { useEffect } from 'react';

const useEventListener = <T extends Event>(
  target: EventTarget | undefined | null,
  event: string,
  callback: (event: T) => void,
  options?: boolean | AddEventListenerOptions,
) => {
  const eventListener: EventListener = (event: Event) => {
    return callback(event as T);
  };

  useEffect(() => {
    if (!target) return;

    target.addEventListener(event, eventListener, options);
    return () => {
      target.removeEventListener(event, eventListener, options);
    };
  }, [target]);
};

export default useEventListener;
