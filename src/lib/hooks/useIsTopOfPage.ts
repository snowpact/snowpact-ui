import { useEffect, useState } from 'react';

export function useIsTopOfPage(disabled = false) {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    if (disabled) {
      return;
    }

    function handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsAtTop(scrollTop === 0);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [disabled]);

  return isAtTop;
}
