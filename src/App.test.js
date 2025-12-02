import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import App from './App';
import theme from './Theme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
