import { createContext, useContext } from 'react';

type NavbarContext = {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  expandedName?: string;
  setExpandedName?: (element: string | undefined) => void;
  expansion?: React.ReactNode | null;
  setExpansion?: (element: React.ReactNode | null) => void;
  expansionSideTitle?: boolean;
  setExpansionSideTitle?: (expansionSideTitle: boolean) => void;
  expansionCustomSideContent?: React.ReactNode | null;
  setExpansionCustomSideContent?: (element: React.ReactNode | null) => void;
  handleMouseEnter?: () => void;
  handleMouseLeave?: () => void;
};

export const NavbarContext = createContext<NavbarContext | undefined>(undefined);

export function useNavbarContext(): NavbarContext {
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error('useNavBarContext should be used within the NavbarContext provider!');
  }

  return context;
}
