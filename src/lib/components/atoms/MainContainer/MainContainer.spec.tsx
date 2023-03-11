import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MainContainer } from '.';
import { HelloInternet } from '../../bosons/HelloInternet';

const getMainContainer = () => screen.getByTestId('hi-main-container');

describe('Components / Section', () => {
  describe('Rendering', () => {
    it('should render element inside container', () => {
      render(
        <MainContainer>
          <p>Hi there</p>
        </MainContainer>
      );

      const p = screen.getByText('Hi there');

      expect(getMainContainer()).toContainElement(p);
      expect(p).toBeVisible();
    });
  });

  describe('Theme', () => {
    it('should use `base` classes', () => {
      const theme = {
        mainContainer: {
          container: 'py-8'
        }
      };

      render(
        <HelloInternet theme={{ theme }}>
          <MainContainer>
            <p>Hi there</p>
          </MainContainer>
        </HelloInternet>
      );

      expect(getMainContainer()).toHaveClass('py-8');
    });
  });
});
