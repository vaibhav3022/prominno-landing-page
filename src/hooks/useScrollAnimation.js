import { useEffect } from 'react';
import { useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';

export function useScrollAnimation(once = true, margin = "-100px") {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once, margin });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, isInView, once]);

  return { ref, controls };
}
