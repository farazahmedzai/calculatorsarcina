
import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './client/src/App.tsx';
import './client/src/index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      cacheTime: 10 * 60 * 1000,
    },
  },
});

const root = createRoot(document.getElementById('root'));
root.render(
  React.createElement(QueryClientProvider, { client: queryClient },
    React.createElement(App)
  )
);
