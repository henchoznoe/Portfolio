import { createRoot } from "react-dom/client";
import App from '@/App.tsx';
import '@/index.css';

const app = document.getElementById('app')!;

createRoot(app).render(<App/>);
