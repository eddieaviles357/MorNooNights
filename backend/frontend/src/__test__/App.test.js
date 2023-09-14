import { render } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from "react-router";

describe("App component", () => {
  it('renders without crashing', () => {
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
  
  it('should display log in or sign in nav components', () => {
    const { asFragment } = render(<MemoryRouter /> );
    expect(asFragment()).toMatchSnapshot();
  })
})
