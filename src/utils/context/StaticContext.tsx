import { PropsWithChildren } from 'react';

interface StaticContext<P> {
  stateTypes: P;
  Provider: React.FC<PropsWithChildren<{ value: P }>>;
  get: () => P;
}

export function createStaticContext<P>(newState: P) {
  let state: P;

  const setContext = (newState: P) => {
    state = {
      ...newState,
    };
  };

  const get = () => {
    return state;
  };

  return {
    stateTypes: newState,
    get,
    Provider: ({ children, value }: PropsWithChildren<{ value: P }>) => {
      setContext(value);
      return <>{children}</>;
    },
  };
}

export function getStaticContext<P>(context: StaticContext<P>) {
  return context.get();
}
