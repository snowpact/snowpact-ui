import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Section } from '.';
import { HelloInternet } from '../../bosons/HelloInternet';
      
const getSection = () => screen.getByTestId('hi-section');
const getSectionContainer = () => screen.getByTestId('hi-section-container');

describe('Components / Section', () => {
    
  describe('Rendering', () => {
    it('should render element inside section', () => {
      render(
        <Section>
          <p>Hi there</p>
        </Section>
      );

      const p = screen.getByText('Hi there');

      expect(getSection()).toContainElement(p);
      expect(p).toBeVisible();
    });

    it('should render element inside section container', () => {
       render(
         <Section>
           <Section.Container>
             <p>Hi there</p>
          </Section.Container>
        </Section>
       );
      
      const p = screen.getByText('Hi there');

      expect(getSection()).toContainElement(p);
      expect(p).toBeVisible();
    });
  });

  describe('Theme', () => {
    it('should use `base` classes', () => {
      const theme = {
        section: {
          container: 'py-8',
        },
      };

      render(
        <HelloInternet theme={{ theme }}>
          <Section>
           <Section.Container>
             <p>Hi there</p>
          </Section.Container>
        </Section>
        </HelloInternet>,
      );

      expect(getSectionContainer()).toHaveClass('py-8');
    });
  
  });
});

