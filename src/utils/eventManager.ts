export const eventManager = <T extends Event>(
  target: {
    current: EventTarget | null;
  },
  event: string,
  callback: (event: T) => void,
  options?: boolean | AddEventListenerOptions,
) => {
  const eventListener: EventListener = (event: Event) => {
    return callback(event as T);
  };

  const add = () => {
    if (target.current)
      target.current.addEventListener(event, eventListener, options);
  };

  const remove = () => {
    if (target.current)
      target.current.removeEventListener(event, eventListener, options);
  };

  return {
    add,
    remove,
  };
};
