import { createRoot } from 'react-dom/client';
import { App } from './src/App.jsx';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('app'));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);