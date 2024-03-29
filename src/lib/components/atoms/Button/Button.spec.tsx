import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from '.';
import { HelloInternet } from '../../bosons/HelloInternet';

describe('Components / Button', () => {
  describe('A11y', () => {
    it('should have `role="button"` by default', () => {
      render(<Button>Hi there</Button>);

      expect(button()).toBeInTheDocument();
    });

    it('should be able to use any other role permitted for `<button>`s', () => {
      render(<Button role="menuitem">Hi there</Button>);

      const button = screen.getByRole('menuitem');

      expect(button).toBeInTheDocument();
    });
  });

  describe('Keyboard interactions', () => {
    it('should trigger `onClick` when `Space` is pressed', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();

      render(<Button onClick={onClick}>Hi there</Button>);

      await user.click(button());

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should focus when `Tab` is pressed', async () => {
      const user = userEvent.setup();
      render(<Button>Hi there</Button>);

      await user.tab();

      expect(button()).toHaveFocus();
    });

    it('should be possible to `Tab` out', async () => {
      const user = userEvent.setup();
      render(
        <>
          <Button>Hi there</Button>
          <Button>Hello there</Button>
          <button type="submit">Submit</button>
        </>
      );

      await user.tab();

      expect(buttons()[0]).toHaveFocus();

      await user.tab();

      expect(buttons()[1]).toHaveFocus();

      await user.tab();

      expect(buttons()[2]).toHaveFocus();
    });
  });

  describe('Props', () => {
    it('should allow HTML attributes for `<button>`s', () => {
      render(
        <Button formAction="post.php" type="submit">
          Hi there
        </Button>
      );

      expect(button()).toHaveAttribute('formAction', 'post.php');
      expect(button()).toHaveAttribute('type', 'submit');
    });

    it('should be disabled when `disabled={true}`', () => {
      render(<Button disabled>Hi there</Button>);

      expect(button()).toBeDisabled();
    });
  });

  describe('Rendering', () => {
    it('should render when `children={0}`', () => {
      render(<Button>0</Button>);

      expect(button()).toHaveTextContent('0');
    });

    it('should render when `children={undefined}`', () => {
      render(<Button label="Something or other" />);

      expect(button()).toHaveTextContent('Something or other');
    });

    it('should render an anchor `<a>` when `href=".."`', () => {
      render(<Button href="#" label="Something or other" />);

      expect(buttonLink()).toBeInTheDocument();
    });
  });

  describe('Theme', () => {
    it('should use `base` classes', () => {
      const theme = {
        button: {
          base: 'font-extralight'
        }
      };

      render(
        <HelloInternet theme={{ theme }}>
          <Button />
        </HelloInternet>
      );

      expect(button()).toHaveClass('font-extralight');
    });

    it('should use custom `color` classes', () => {
      const theme = {
        button: {
          color: {
            primary: 'bg-blue-500'
          }
        }
      };

      render(
        // @ts-ignore for theming purposes
        <HelloInternet theme={{ theme }}>
          {/* @ts-ignore for theming purposes */}
          <Button color="primary" />
        </HelloInternet>
      );

      expect(button()).toHaveClass('font-extralight');
    });

    it('should use `disabled` classes', () => {
      const theme = {
        button: {
          disabled: 'font-extralight'
        }
      };

      render(
        <HelloInternet theme={{ theme }}>
          <Button disabled />
        </HelloInternet>
      );

      expect(button()).toHaveClass('font-extralight');
    });

    it('should use `gradient` classes', () => {
      const theme = {
        button: {
          color: {
            tertiary: 'bg-yellow-500'
          }
        }
      };

      render(
        // @ts-ignore for theming purposes
        <HelloInternet theme={{ theme }}>
          {/* @ts-ignore for theming purposes */}
          <Button color="quaternary" />
        </HelloInternet>
      );

      expect(button()).toHaveClass('font-extralight');
    });

    it('should use custom `gradientDuoTone` classes', () => {
      const theme = {
        button: {
          gradientDuoTone: {
            cyanToYellow: 'font-extralight'
          }
        }
      };

      render(
        // @ts-ignore for theming purposes
        <HelloInternet theme={{ theme }}>
          {/* @ts-ignore for theming purposes */}
          <Button gradientDuoTone="cyanToYellow" />
        </HelloInternet>
      );

      expect(button()).toHaveClass('font-extralight');
    });

    it('should use `label` classes', () => {
      const theme = {
        button: {
          label: 'font-extralight'
        }
      };

      render(
        <HelloInternet theme={{ theme }}>
          <Button label="Hi there" />
        </HelloInternet>
      );

      const buttonLabel = screen.getByText('Hi there');

      expect(buttonLabel).toHaveClass('font-extralight');
    });

    it('should use `pill` classes', () => {
      const theme = {
        button: {
          pill: {
            off: 'font-extralight',
            on: 'font-extrabold'
          }
        }
      };

      render(
        <HelloInternet theme={{ theme }}>
          <Button label="Normal button" />
          <Button label="Pill" pill />
        </HelloInternet>
      );

      const normalButton = buttons()[0];
      const pill = buttons()[1];

      expect(normalButton).toHaveClass('font-extralight');
      expect(pill).toHaveClass('font-extrabold');
    });

    it('should use `size` classes', () => {
      const theme = {
        button: {
          size: {
            xl: 'font-extrabold'
          }
        }
      };

      render(
        <HelloInternet theme={{ theme }}>
          <Button size="xl">Hello</Button>
        </HelloInternet>
      );

      const button = screen.getByText('Hello');

      expect(button).toHaveClass('font-extrabold');
    });

    it('should use `width` classes', () => {
      const theme = {
        button: {
          widths: {
            xs: 'w-80'
          }
        }
      };

      render(
        <HelloInternet theme={{ theme }}>
          <Button label="Normal button" width="xs" />
        </HelloInternet>
      );

      const normalButton = screen.getByRole('button');

      expect(normalButton).toHaveClass('w-80');
    });
  });
});

const button = () => screen.getByRole('button');

const buttonLink = () => screen.getByRole('link');

const buttons = () => screen.getAllByRole('button');
