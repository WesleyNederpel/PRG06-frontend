import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Zorg ervoor dat TailwindCSS hier geïmporteerd wordt
import App from './App.jsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error("Root element not found. Please ensure the root div is present in your HTML.");
}

createRoot(rootElement).render(
    <StrictMode>
        <App />
    </StrictMode>
);