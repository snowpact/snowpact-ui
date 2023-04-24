import { render, screen } from '@testing-library/react';
import type { FC } from 'react';
import { describe, expect } from 'vitest';
import { Codeblock } from './Codeblock';

const lines = ["let message: string = 'Hello, World!';", 'console.log(message);'];
const CODE = `${lines[0]}
${lines[1]}`;
const CodeblockTest: FC = () => {
  return <Codeblock code={CODE} />;
};

describe('Codeblock', () => {
  describe('Props', () => {
    it('should change previous and next text when provided', () => {
      render(<CodeblockTest />);
      expect(screen.getByTestId('code-line-0')).toHaveTextContent(lines[0]);
      expect(screen.getByTestId('code-line-1')).toHaveTextContent(lines[1]);
    });
  });
});
