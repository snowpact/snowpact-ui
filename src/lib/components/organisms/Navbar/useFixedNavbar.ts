import { useEffect, useState } from 'react';

export enum NavbarFixed {
  FIXED_ACTIVE = 'active',
  FIXED_TOP = 'top',
  FIXED_OFF = 'off'
}

export function useFixedNavbar(handleFixed = false) {
  const [fixedType, setFixedType] = useState(handleFixed ? NavbarFixed.FIXED_TOP : NavbarFixed.FIXED_OFF);

  useEffect(() => {
    if (!handleFixed) {
      return;
    }

    function handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setFixedType(scrollTop < 50 ? NavbarFixed.FIXED_TOP : NavbarFixed.FIXED_ACTIVE);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleFixed]);

  return fixedType;
}
