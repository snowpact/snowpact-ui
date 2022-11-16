import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from '../atoms/Button';
import { ButtonGroup } from '.';
import defaultTheme from '../../theme/default';
import { HelloInternet } from '../bosons/HelloInternet';

describe('Components / ButtonGroup', () => {
  describe('A11y', () => {
    it('should have `role="group"` by default', () => {
      render(
        <ButtonGroup>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>,
      );

      expect(group()).toBeInTheDocument();
    });

    it('should allow `aria-label`', () => {
      render(
        <ButtonGroup aria-label="My group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>,
      ),
        expect(group()).toHaveAccessibleName('My group');
    });
  });

  describe('Keyboard interactions', () => {
    it('should trigger `onClick` when `Space` is pressed on a `Button`', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();

      render(
        <ButtonGroup>
          <Button onClick={onClick}>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>,
      );

      const firstButton = buttons()[0];

      await user.tab();
      await user.click(firstButton);

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should be possible to `Tab` out', async () => {
      const user = userEvent.setup();
      render(
        <>
          <ButtonGroup>
            <Button>Inside</Button>
          </ButtonGroup>
          <Button>Outside</Button>
        </>,
      ),
        await user.tab();

      expect(buttons()[0]).toHaveFocus();

      await user.tab();

      expect(buttons()[1]).toHaveFocus();
    });
  });

  describe('Rendering', () => {
    it("should correctly set each `Button`'s position", () => {
      render(
        <ButtonGroup>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>,
      );

      const positionClasses = defaultTheme.button.position.outer;

      expect(buttons()[0]).toHaveClass(positionClasses.start);
      expect(buttons()[1]).toHaveClass(positionClasses.middle);
      expect(buttons()[2]).toHaveClass(positionClasses.end);
    });
  });

  describe('Theme', () => {
    it('should use `base` classes', () => {
      const theme = {
        buttonGroup: {
          base: 'text-gray-400',
        },
      };

      render(
        <HelloInternet theme={{ theme }}>
          <ButtonGroup>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </HelloInternet>,
      );

      expect(group()).toHaveClass('text-gray-400');
    });

    it('should use `position` classes', () => {
      const theme = {
        buttonGroup: {
          base: 'text-gray-400',
        },
      };

      render(
        <HelloInternet theme={{ theme }}>
          <ButtonGroup>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </HelloInternet>,
      );

      expect(group()).toHaveClass('text-gray-400');
    });
  });
});

const group = () => screen.getByRole('group');

const buttons = () => screen.getAllByRole('button');