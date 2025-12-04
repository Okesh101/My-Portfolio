import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'my-ts-app' with your actual GitHub repository name
const repoName = '/My-Portfolio/';

export default defineConfig({
  plugins: [react()],
  base: repoName, // <--- Add this line
});