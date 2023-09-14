import { render, cleanup } from '@testing-library/react';
import Categories from '../../components/common/Categories';
import { MemoryRouter } from "react-router";

afterAll(() => {
  cleanup();
});

describe("Categories component", () => {
  it('renders without crashing', () => {
    render(<Categories />);
  });

  it('matches snapshot', () => {
    const categories = render(<Categories />);
    expect(categories.asFragment()).toMatchSnapshot();
  });

  it('should be 8 categories', () => {
    const {getAllByText} = render(<Categories />);
    const entertainment = getAllByText("entertainment");
    const business = getAllByText("business");
    const politics = getAllByText("politics");
    const science = getAllByText("science");
    const sports = getAllByText("sports");
    const travel = getAllByText("travel");
    const food = getAllByText("food");
    const tech = getAllByText("tech");
    expect(entertainment.length).toBe(1);
    expect(business.length).toBe(1);
    expect(politics.length).toBe(1);
    expect(science.length).toBe(1);
    expect(sports.length).toBe(1);
    expect(travel.length).toBe(1);
    expect(food.length).toBe(1);
    expect(tech.length).toBe(1);
  });
});
