import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { DarkThemeToggle } from '.';
import { HelloInternet } from '../../bosons/HelloInternet';

describe.concurrent('Dark theme toggle', () => {
  it('should toggle the theme when `Space` is pressed', async () => {
    const user = userEvent.setup();
    render(
      <HelloInternet>
        <DarkThemeToggle />
      </HelloInternet>,
    );

    await user.tab();
    await user.keyboard('[Space]');

    expect(screen.queryByLabelText('Currently light mode')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Currently dark mode')).toBeInTheDocument();
  });
});