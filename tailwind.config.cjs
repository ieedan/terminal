/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			serif: ['Geist Mono', 'Monospace'],
			sans: ['Geist Sans', 'sans-serif']
		},
		extend: {
			colors: {
				'gui-gray': {
					100: 'hsl(var(--gui-gray-100) / <alpha-value>)',
					200: 'hsl(var(--gui-gray-200) / <alpha-value>)',
					300: 'hsl(var(--gui-gray-300) / <alpha-value>)',
					400: 'hsl(var(--gui-gray-400) / <alpha-value>)',
					500: 'hsl(var(--gui-gray-500) / <alpha-value>)',
					600: 'hsl(var(--gui-gray-600) / <alpha-value>)',
					700: 'hsl(var(--gui-gray-700) / <alpha-value>)',
					800: 'hsl(var(--gui-gray-800) / <alpha-value>)',
					900: 'hsl(var(--gui-gray-900) / <alpha-value>)',
					1000: 'hsl(var(--gui-gray-1000) / <alpha-value>)'
				},
				'gui-blue': {
					100: 'hsl(var(--gui-blue-100) / <alpha-value>)',
					200: 'hsl(var(--gui-blue-200) / <alpha-value>)',
					300: 'hsl(var(--gui-blue-300) / <alpha-value>)',
					400: 'hsl(var(--gui-blue-400) / <alpha-value>)',
					500: 'hsl(var(--gui-blue-500) / <alpha-value>)',
					600: 'hsl(var(--gui-blue-600) / <alpha-value>)',
					700: 'hsl(var(--gui-blue-700) / <alpha-value>)',
					800: 'hsl(var(--gui-blue-800) / <alpha-value>)',
					900: 'hsl(var(--gui-blue-900) / <alpha-value>)',
					1000: 'hsl(var(--gui-blue-1000) / <alpha-value>)'
				},
				'gui-red': {
					100: 'hsl(var(--gui-red-100) / <alpha-value>)',
					200: 'hsl(var(--gui-red-200) / <alpha-value>)',
					300: 'hsl(var(--gui-red-300) / <alpha-value>)',
					400: 'hsl(var(--gui-red-400) / <alpha-value>)',
					500: 'hsl(var(--gui-red-500) / <alpha-value>)',
					600: 'hsl(var(--gui-red-600) / <alpha-value>)',
					700: 'hsl(var(--gui-red-700) / <alpha-value>)',
					800: 'hsl(var(--gui-red-800) / <alpha-value>)',
					900: 'hsl(var(--gui-red-900) / <alpha-value>)',
					1000: 'hsl(var(--gui-red-1000) / <alpha-value>)'
				},
				'gui-amber': {
					100: 'hsl(var(--gui-amber-100) / <alpha-value>)',
					200: 'hsl(var(--gui-amber-200) / <alpha-value>)',
					300: 'hsl(var(--gui-amber-300) / <alpha-value>)',
					400: 'hsl(var(--gui-amber-400) / <alpha-value>)',
					500: 'hsl(var(--gui-amber-500) / <alpha-value>)',
					600: 'hsl(var(--gui-amber-600) / <alpha-value>)',
					700: 'hsl(var(--gui-amber-700) / <alpha-value>)',
					800: 'hsl(var(--gui-amber-800) / <alpha-value>)',
					900: 'hsl(var(--gui-amber-900) / <alpha-value>)',
					1000: 'hsl(var(--gui-amber-1000) / <alpha-value>)'
				},
				'gui-green': {
					100: 'hsl(var(--gui-green-100) / <alpha-value>)',
					200: 'hsl(var(--gui-green-200) / <alpha-value>)',
					300: 'hsl(var(--gui-green-300) / <alpha-value>)',
					400: 'hsl(var(--gui-green-400) / <alpha-value>)',
					500: 'hsl(var(--gui-green-500) / <alpha-value>)',
					600: 'hsl(var(--gui-green-600) / <alpha-value>)',
					700: 'hsl(var(--gui-green-700) / <alpha-value>)',
					800: 'hsl(var(--gui-green-800) / <alpha-value>)',
					900: 'hsl(var(--gui-green-900) / <alpha-value>)',
					1000: 'hsl(var(--gui-green-1000) / <alpha-value>)'
				},
				'gui-teal': {
					100: 'hsl(var(--gui-teal-100) / <alpha-value>)',
					200: 'hsl(var(--gui-teal-200) / <alpha-value>)',
					300: 'hsl(var(--gui-teal-300) / <alpha-value>)',
					400: 'hsl(var(--gui-teal-400) / <alpha-value>)',
					500: 'hsl(var(--gui-teal-500) / <alpha-value>)',
					600: 'hsl(var(--gui-teal-600) / <alpha-value>)',
					700: 'hsl(var(--gui-teal-700) / <alpha-value>)',
					800: 'hsl(var(--gui-teal-800) / <alpha-value>)',
					900: 'hsl(var(--gui-teal-900) / <alpha-value>)',
					1000: 'hsl(var(--gui-teal-1000) / <alpha-value>)'
				},
				'gui-purple': {
					100: 'hsl(var(--gui-purple-100) / <alpha-value>)',
					200: 'hsl(var(--gui-purple-200) / <alpha-value>)',
					300: 'hsl(var(--gui-purple-300) / <alpha-value>)',
					400: 'hsl(var(--gui-purple-400) / <alpha-value>)',
					500: 'hsl(var(--gui-purple-500) / <alpha-value>)',
					600: 'hsl(var(--gui-purple-600) / <alpha-value>)',
					700: 'hsl(var(--gui-purple-700) / <alpha-value>)',
					800: 'hsl(var(--gui-purple-800) / <alpha-value>)',
					900: 'hsl(var(--gui-purple-900) / <alpha-value>)',
					1000: 'hsl(var(--gui-purple-1000) / <alpha-value>)'
				},
				'gui-pink': {
					100: 'hsl(var(--gui-pink-100) / <alpha-value>)',
					200: 'hsl(var(--gui-pink-200) / <alpha-value>)',
					300: 'hsl(var(--gui-pink-300) / <alpha-value>)',
					400: 'hsl(var(--gui-pink-400) / <alpha-value>)',
					500: 'hsl(var(--gui-pink-500) / <alpha-value>)',
					600: 'hsl(var(--gui-pink-600) / <alpha-value>)',
					700: 'hsl(var(--gui-pink-700) / <alpha-value>)',
					800: 'hsl(var(--gui-pink-800) / <alpha-value>)',
					900: 'hsl(var(--gui-pink-900) / <alpha-value>)',
					1000: 'hsl(var(--gui-pink-1000) / <alpha-value>)'
				},
				'gui-gray-alpha': {
					100: 'var(--gui-gray-alpha-100)',
					200: 'var(--gui-gray-alpha-200)',
					300: 'var(--gui-gray-alpha-300)',
					400: 'var(--gui-gray-alpha-400)',
					500: 'var(--gui-gray-alpha-500)',
					600: 'var(--gui-gray-alpha-600)',
					700: 'var(--gui-gray-alpha-700)',
					800: 'var(--gui-gray-alpha-800)',
					900: 'var(--gui-gray-alpha-900)',
					1000: 'var(--gui-gray-alpha-1000)'
				},
				'gui-background': {
					DEFAULT: 'var(--gui-background-100)',
					secondary: 'var(--gui-background-200)'
				},
				'gui-component-background': {
					DEFAULT: 'hsl(var(--gui-gray-100) / <alpha-value>)',
					hover: 'hsl(var(--gui-gray-200) / <alpha-value>)',
					active: 'hsl(var(--gui-gray-300) / <alpha-value>)'
				},
				'gui-border': {
					DEFAULT: 'hsl(var(--gui-gray-400) / <alpha-value>)',
					hover: 'hsl(var(--gui-gray-500) / <alpha-value>)',
					active: 'hsl(var(--gui-gray-600) / <alpha-value>)'
				},
				'gui-hc-background': {
					DEFAULT: 'hsl(var(--gui-gray-700) / <alpha-value>)',
					hover: 'hsl(var(--gui-gray-800) / <alpha-value>)'
				},
				'gui-foreground': {
					primary: 'hsl(var(--gui-gray-1000) / <alpha-value>)',
					secondary: 'hsl(var(--gui-gray-900) / <alpha-value>)',
					muted: 'hsl(var(--gui-gray-600) / <alpha-value>)'
				},
				gui: {
					warning: 'hsl(var(--gui-amber-700) / <alpha-value>)',
					success: 'hsl(var(--gui-blue-700) / <alpha-value>)',
					error: 'hsl(var(--gui-red-800) / <alpha-value>)'
				}
			}
		}
	},
	plugins: [],
	darkMode: 'class',
	safelist: ['dark']
};
