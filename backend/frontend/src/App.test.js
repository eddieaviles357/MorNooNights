import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

it('matches snapshot', () => {
  const app = render(<App />);
  expect(app.asFragment()).toMatchSnapshot();
});