import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Avatar } from '.';
import { HelloInternet } from '../../bosons/HelloInternet';
import type { CustomHelloInternetTheme } from '../../bosons/HelloInternet/HelloInternetTheme';

describe('Components / Avatar', () => {
  describe('Theme', () => {
    it('should use custom classes', () => {
      const theme: CustomHelloInternetTheme = {
        avatar: {
          statusColor: {
            away: 'bg-yellow-400'
          }
        }
      };
      render(
        <HelloInternet theme={{ theme }}>
          <Avatar status="away" />
        </HelloInternet>
      );

      expect(statusBadge()).toHaveClass('bg-yellow-400');
    });
  });
  describe('Placeholder', () => {
    it('should display placeholder initials', () => {
      render(
        <HelloInternet>
          <Avatar placeholderInitials="RR" />
        </HelloInternet>
      );

      expect(initialsPlaceholder()).toHaveTextContent('RR');
    });
  });
});

const statusBadge = () => screen.getByTestId('sui-status-badge');
const initialsPlaceholder = () => screen.getByTestId('sui-avatar-initials-placeholder');
