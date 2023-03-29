import { useEffect, useState } from 'react';

export enum NavbarSticky {
  STICKY_STICKED = 'sticked',
  STICKY_TOP = 'top',
  STICKY_NONE = 'none'
}

export function useStickyNavbar({ handleSticky, handleTop }: { handleSticky: boolean; handleTop: boolean }) {
  const [fixedType, setFixedType] = useState(
    handleSticky ? (handleTop ? NavbarSticky.STICKY_TOP : NavbarSticky.STICKY_STICKED) : NavbarSticky.STICKY_NONE
  );

  useEffect(() => {
    if (!handleTop) {
      return;
    }

    function handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setFixedType(scrollTop < 50 ? NavbarSticky.STICKY_TOP : NavbarSticky.STICKY_STICKED);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleTop]);

  return fixedType;
}
