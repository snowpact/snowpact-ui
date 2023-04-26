import type { RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Spinner } from '.';
import { HelloInternet } from '../../bosons/HelloInternet';

describe('Components / Spinner', () => {
  describe('A11y', () => {
    it('should have an accessible name', () => {
      const spinner = getSpinner(render(<Spinner />));

      expect(spinner).toHaveAccessibleName('Loading');
    });

    it('should be able to set `role` to undefined', () => {
      const { getByLabelText } = render(<Spinner role={false} />);

      const spinner = getByLabelText('Loading');

      expect(spinner).not.toHaveAttribute('role');
    });
  });

  describe('Theme', () => {
    it('should use `base` classes', () => {
      const theme = {
        spinner: {
          base: 'text-gray-100'
        }
      };

      const spinner = getSpinner(
        render(
          <HelloInternet theme={{ theme }}>
            <Spinner />
          </HelloInternet>
        )
      );

      expect(spinner.firstElementChild).toHaveClass('text-gray-100');
    });

    it('should use `color` classes', () => {
      const theme = {
        spinner: {
          color: {
            primary: 'text-gray-200'
          }
        }
      };

      const spinner = getSpinner(
        render(
          <HelloInternet theme={{ theme }}>
            <Spinner color="primary" />
          </HelloInternet>
        )
      );

      expect(spinner.firstElementChild).toHaveClass('text-gray-200');
    });
  });
});

const getSpinner = ({ getByRole }: Pick<RenderResult, 'getByRole'>): HTMLElement => getByRole('status');
