import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add a comment to document that package.json needs a deploy script:
// NOTE: Add this to package.json scripts:
// "deploy": "gh-pages -d dist"
// And install gh-pages as a dev dependency:
// npm install --save-dev gh-pages

createRoot(document.getElementById("root")!).render(<App />);
