import { useEffect, useMemo, useState } from "react";

export const useIsInViewport = (ref, threshold = 0.2) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => setIsIntersecting(entry.isIntersecting),
        {
          threshold,
        }
      ),
    [threshold]
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
};
