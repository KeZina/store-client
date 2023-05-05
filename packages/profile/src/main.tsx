import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { App } from 'profile/components/App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);