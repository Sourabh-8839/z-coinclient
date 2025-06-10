import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  server:{
    port:6073,
    allowedHosts:['http://Z-coin.com','http://www.Z-coin.com','https://Z-coin.com','https://www.Z-coin.com','Z-coin.com','Z-coin.com','www.Z-coin.com'],
  },
  preview: {
    port: 6073,
    allowedHosts: ['http://Z-coin.com', 'http://www.Z-coin.com', 'https://Z-coin.com', 'https://www.Z-coin.com', 'Z-coin.com', 'www.Z-coin.com'],
  },
})
