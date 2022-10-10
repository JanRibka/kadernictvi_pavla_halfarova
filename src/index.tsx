// LOCALIZATION
import './shared/infrastructure/localize/i18n';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/teko';
import '@fontsource/caveat';
import '@fontsource/didact-gothic';

import { AppTheme } from 'kadernictvi_pavla_halfarova/globalStyles/AppTheme';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import SuspenseFallback from 'shared/components/suspenseFallback/SuspenseFallback';

import { CssBaseline } from '@mui/material';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
//TODO: P5idat str8nku po v7padku spojeni (no connection page)
//TODO: Udelat si vlastní hooky na efekty při skrolování a tak
root.render(
  <React.StrictMode>
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      <Suspense fallback={<SuspenseFallback />}>
        <App />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
