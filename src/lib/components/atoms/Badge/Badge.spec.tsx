import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Badge } from '.';
import { HelloInternet } from '../../bosons/HelloInternet';

test('renders MyComponent', () => {
  const { container } = render(<Badge />);
  console.log('----------------------------------------');
  console.log(container.innerHTML);
  console.log('----------------------------------------');
});

describe('Components / Badge', () => {
  describe('Rendering', () => {
    it('should render an `<a>` given `href=".."`', () => {
      render(<Badge href="/">A badge with a link</Badge>);

      expect(link()).toBeInTheDocument();
      expect(link()).toHaveAttribute('href', '/');
    });
  });

  describe('Theme', () => {
    it('should use custom colors', () => {
      const theme = {
        badge: {
          color: {
            primary: 'bg-primary-500'
          }
        }
      };
      render(
        <HelloInternet theme={{ theme }}>
          <Badge color="primary" href="/">
            A badge
          </Badge>
        </HelloInternet>
      );

      expect(link()).toHaveClass('bg-primary-500');
    });
  });
});

const link = () => screen.getByRole('link');
