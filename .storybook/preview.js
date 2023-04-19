import { MemoryRouter } from 'react-router-dom';
import Style from './style';
import '../src/index.css';


export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={['/']}>
      <Style />
      <Story />
    </MemoryRouter>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
};
