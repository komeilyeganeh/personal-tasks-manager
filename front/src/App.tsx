import { CssBaseline, ThemeProvider } from '@mui/material';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import React, { FC, ReactElement } from 'react';

import ComposeContext from './context/compose.context';
import { Dashboard } from './pages/dashboard/dashboard';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { customTheme } from './theme/custom-theme';
import { rootContext } from './context/root.context';

// Create a client
const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <ComposeContext components={rootContext}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <Dashboard />
        </ThemeProvider>
      </ComposeContext>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
