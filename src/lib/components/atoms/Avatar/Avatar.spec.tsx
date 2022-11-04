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
          size: {
            xl: 'h-40'
          },
        },
      };
      render(
        <HelloInternet theme={{ theme }}>
          <Avatar size="xl" />
        </HelloInternet>,
      );

      expect(img()).toHaveClass('h-40');
    });
  });
  describe('Placeholder', () => {
    it('should display placeholder initials', () => {
      render(
        <HelloInternet>
          <Avatar placeholderInitials="RR" />
        </HelloInternet>,
      );

      expect(initialsPlaceholder()).toHaveTextContent('RR');
    });
  });
});

const img = () => screen.getByTestId('flowbite-avatar-img');
const initialsPlaceholder = () => screen.getByTestId('flowbite-avatar-initials-placeholder');
