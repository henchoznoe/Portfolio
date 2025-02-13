import { createRoot } from 'react-dom/client';
import '@styles/global.css';
import App from './App.tsx';

const app = document.getElementById('app')!;

createRoot(app).render(<App/>);
