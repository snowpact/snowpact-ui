import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FluidSection } from './FluidSection';

const getFluidSection = () => screen.getByTestId('sui-fluid-section');

describe('Components / FluidSection', () => {
  describe('Classname', () => {
    it('should use `classNames` classes', () => {
      render(
        <FluidSection className="py-8">
          <p>Hi there</p>
        </FluidSection>
      );

      expect(getFluidSection()).toHaveClass('py-8');
    });
  });
});
