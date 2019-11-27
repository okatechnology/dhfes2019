import React, { useEffect, useMemo, createContext, useContext, FC } from 'react';

interface ScrollEffectProps {
  scrollY: number;
}
type ScrollEffectFunction = (props: ScrollEffectProps) => void;

const useScrollEffect = (effect: ScrollEffectFunction, [active, ...inputs]: [boolean, ...any[]]) => {
  const pseudoState = useContext(useScrollEffect.context);
  useEffect(() => {
    if (!active) return;
    pseudoState.registry.add(effect);
    pseudoState.changed = true;
    return () => {
      pseudoState.registry.delete(effect);
    };
  }, [active, ...inputs]);
};
useScrollEffect.context = createContext<PseudoState>(null as any);

interface PseudoState {
  registry: Set<ScrollEffectFunction>;
  changed: boolean;
}

export const ScrollEffectProvider: FC = ({ children }) => {
  const pseudoState = useMemo(() => {
    const registry = new Set<ScrollEffectFunction>();
    return { registry, changed: true };
  }, []);

  useEffect(() => {
    let alive = true;

    const update = () => {
      if (!alive) return;
      if (pseudoState.changed) {
        const { scrollY } = window;
        pseudoState.registry.forEach((cb) => cb({ scrollY }));
        pseudoState.changed = false;
      }
      requestAnimationFrame(update);
    };

    const handleScroll = () => (pseudoState.changed = true);

    update();
    window.addEventListener('scroll', handleScroll);
    return () => {
      alive = false;
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <useScrollEffect.context.Provider value={pseudoState} children={children} />;
};

export default useScrollEffect;
