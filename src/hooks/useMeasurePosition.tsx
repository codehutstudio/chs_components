import { useEffect, useRef } from 'react';

export function useMeasurePosition(update: any) {
  // We'll use a `ref` to access the DOM element that the `motion.li` produces.
  // This will allow us to measure its height and position, which will be useful to
  // decide when a dragging element should switch places with its siblings.
  const ref = useRef(null);

  // Update the measured position of the item so we can calculate when we should rearrange.
  useEffect(() => {
    update({
      height: (ref?.current as any).offsetHeight,
      top: (ref?.current as any).offsetTop
    });
  });

  return ref;
}