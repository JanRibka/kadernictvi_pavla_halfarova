// LOCALIZATION
import './shared/infrastructure/localize/i18n';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/caveat';

import { AppTheme } from 'kadernictvi_pavla_halfarova/globalStyles/AppTheme';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { CssBaseline } from '@mui/material';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// TODO: Uslideru v galeriri, zkusit pridat lazu loading a dát tam načítani
// TODO: Předělat na next js a SSR https://blog.logrocket.com/implementing-ssr-next-js-dynamic-routing-prefetching/
root.render(
  <React.StrictMode>
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
