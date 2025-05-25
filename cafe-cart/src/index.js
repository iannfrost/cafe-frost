import React from 'react';
import ReactDOM from 'react-dom/client';
import CafeFrostMenu from './CafeFrostMenu';

const rootEl = document.getElementById('cart-root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <CafeFrostMenu />
    </React.StrictMode>
  );
}
