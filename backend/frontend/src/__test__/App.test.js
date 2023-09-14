import { render } from '@testing-library/react';
import App from '../App';


test('renders without crashing', () => {
  render(<App />);
});

it('matches snapshot', () => {
  const app = render(<App />);
  expect(app.asFragment()).toMatchSnapshot();
});

it('should display all mornoonights elements', () => {
  const {queryAllByText} = render(<App />);
  const title = queryAllByText(/mornoonightsnews/i);
  expect(title.length).toBe(2)
});