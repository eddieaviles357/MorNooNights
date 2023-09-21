import { render, cleanup } from '@testing-library/react';
import Alert from '../../components/common/Alert';

afterEach(cleanup);

describe("Alert component", () => {
  it('renders without crashing', () => {
    render(<Alert />);
  });
  
  it('matches snapshot', () => {
    const { asFragment } = render(<Alert />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it('matches snapshot for error message', () => {
    const { asFragment } = render(<Alert messages={["error"]}/>);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it("matches snapshot for success mesage", function() {
    let messages = ["Green"];
    const { asFragment } = render(<Alert type="success" messages={messages} />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it("messages are displayed", function() {
    let messages = ["error"];
    const alert = render(<Alert type="success" messages={messages} />);
    expect(alert.queryByText('error')).toBeInTheDocument();
  });
})
