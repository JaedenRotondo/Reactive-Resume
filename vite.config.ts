export default defineConfig({
  // ... other config
  server: {
      allowedHosts: [/.*\.trycloudflare\.com/]
  }
})

