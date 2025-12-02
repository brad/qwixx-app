import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import theme from './Theme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Portrait mode blocker', () => {
  const originalInnerWidth = window.innerWidth;
  const originalInnerHeight = window.innerHeight;

  afterEach(() => {
    // Restore the original window dimensions
    window.innerWidth = originalInnerWidth;
    window.innerHeight = originalInnerHeight;
  });

  it('should display the blocker when in portrait mode', () => {
    // Mock portrait dimensions
    window.innerWidth = 600;
    window.innerHeight = 800;

    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );

    expect(screen.getByTestId('portrait-blocker')).toHaveClass('show');
  });

  it('should not display the blocker when in landscape mode', () => {
    // Mock landscape dimensions
    window.innerWidth = 1200;
    window.innerHeight = 800;

    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );

    expect(screen.getByTestId('portrait-blocker')).not.toHaveClass('show');
  });
});
