import path from "path" // Importe o path
import react from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config"
import tailwindcss from "@tailwindcss/vite"
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [react(), tailwindcss(), tsconfigPaths()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	}, test: {
		globals: true,
		environment: "jsdom",
	},
})
