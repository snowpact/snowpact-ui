import type { FC } from 'react';
import { useTheme } from '../bosons/HelloInternet/ThemeContext';

export const FooterDivider: FC = () => {
  const theme = useTheme().theme.footer.divider;

  return <hr data-testid="footer-divider" className={theme.base} />;
};
