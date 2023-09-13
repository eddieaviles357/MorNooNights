import { render } from '@testing-library/react';
import App from '../App';
import axios from 'axios';

// jest.mock(axios);

test('renders without crashing', () => {
  render(<App />);
});

it('matches snapshot', () => {
  const app = render(<App />);
  expect(app.asFragment()).toMatchSnapshot();
});

it('should display title h1', () => {
  const {asFragment, getByText} = render(<App />)
  console.log(asFragment)
  expect(getByText('MorNooNightsNews')).toBeInTheDocument()
  expect(asFragment()).toMatchInlineSnapshot(`
  <h1 class="mb-4 text-white font-weight-bold">MorNooNightsNews</h1>
`)
});