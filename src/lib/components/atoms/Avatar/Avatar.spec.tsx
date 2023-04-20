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
            xl: 'scale-[2.5]'
          }
        }
      };
      render(
        <HelloInternet theme={{ theme }}>
          <Avatar size="xl" />
        </HelloInternet>
      );

      expect(div()).toHaveClass('scale-[2.5]');
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

const div = () => screen.getByTestId('flowbite-avatar');
const initialsPlaceholder = () => screen.getByTestId('flowbite-avatar-initials-placeholder');
