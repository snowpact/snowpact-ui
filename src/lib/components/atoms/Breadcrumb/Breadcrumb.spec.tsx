import { render, screen } from '@testing-library/react';
import type { FC } from 'react';
import { HiHome } from 'react-icons/hi';
import { describe, expect, it } from 'vitest';
import { Breadcrumb } from '.';
import { HelloInternet } from '../../bosons/HelloInternet';

describe('Components / Breadcrumb', () => {
  describe('A11y', () => {
    it('should have `role="navigation"`', () => {
      render(<TestBreadcrumb />);

      expect(breadcrumb()).toBeInTheDocument();
    });

    it('should contain a `role="list"`', () => {
      render(<TestBreadcrumb />);

      expect(breadcrumb()).toContainElement(breadcrumbList());
    });

    it('should contain a `role="listitem"` for each `Breadcrumb.Item`', () => {
      render(<TestBreadcrumb />);

      expect(items()[0]).toHaveTextContent('Home');
      expect(items()[1]).toHaveTextContent('Projects');
      expect(items()[2]).toHaveTextContent('Snowpact UI React');
    });

    it('should contain a `role="link"` for each `Breadcrumb.Item href=".."`', () => {
      render(<TestBreadcrumb />);

      expect(links()[0]).toHaveTextContent('Home');
      expect(links()[1]).toHaveTextContent('Projects');
    });

    it('should use `aria-label` if provided', () => {
      render(<TestBreadcrumb />);

      expect(breadcrumb()).toHaveAccessibleName('Breadcrumb');
    });
  });

  describe('Theme', () => {
    it('should use classes', () => {
      const theme = {
        text: 'text-sm text-primary-500'
      };
      render(
        <HelloInternet theme={{ theme }}>
          <TestBreadcrumb />
        </HelloInternet>
      );

      expect(items()[0]).toHaveClass('text-sm text-primary-500');
      expect(items()[1]).toHaveClass('text-sm text-primary-500');
    });
  });
});

const TestBreadcrumb: FC = () => (
  <Breadcrumb aria-label="test label">
    <Breadcrumb.Item href="#" icon={<HiHome />}>
      Home
    </Breadcrumb.Item>
    <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
    <Breadcrumb.Item icon={<HiHome />}>Snowpact UI React</Breadcrumb.Item>
  </Breadcrumb>
);

const breadcrumb = () => screen.getByRole('navigation');

const breadcrumbList = () => screen.getByRole('list');

const items = () => screen.getAllByRole('listitem');

const links = () => screen.getAllByRole('link');
