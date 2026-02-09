import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
		fontFamily: {
			sans: ['Public Sans', 'sans-serif'],
			display: ['Public Sans', 'sans-serif'],
			serif: ['Courier Prime', 'serif'],
			mono: ['JetBrains Mono', 'monospace']
		},
		colors: {
			border: 'var(--border)',
			input: 'var(--input)',
			ring: 'var(--ring)',
			background: 'var(--background)',
			foreground: 'var(--foreground)',
			brand: {
				blue: 'var(--brand-blue)',
				cyan: 'var(--brand-cyan)',
				purple: 'var(--brand-purple)',
				pink: 'var(--brand-pink)',
				dark: 'var(--background-dark)'
			},
			primary: {
				DEFAULT: 'var(--primary)',
				foreground: 'var(--primary-foreground)'
			},
			secondary: {
				DEFAULT: 'var(--secondary)',
				foreground: 'var(--secondary-foreground)'
			},
			destructive: {
				DEFAULT: 'var(--destructive)',
				foreground: 'var(--destructive-foreground)'
			},
			muted: {
				DEFAULT: 'var(--muted)',
				foreground: 'var(--muted-foreground)'
			},
			accent: {
				DEFAULT: 'var(--accent)',
				foreground: 'var(--accent-foreground)'
			},
			popover: {
				DEFAULT: 'var(--popover)',
				foreground: 'var(--popover-foreground)'
			},
			card: {
				DEFAULT: 'var(--card)',
				foreground: 'var(--card-foreground)'
			},
			sidebar: {
				DEFAULT: 'var(--sidebar-background)',
				foreground: 'var(--sidebar-foreground)',
				primary: 'var(--sidebar-primary)',
				'primary-foreground': 'var(--sidebar-primary-foreground)',
				accent: 'var(--sidebar-accent)',
				'accent-foreground': 'var(--sidebar-accent-foreground)',
				border: 'var(--sidebar-border)',
				ring: 'var(--sidebar-ring)'
			}
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)',
			xl: 'calc(var(--radius) + 4px)',
			'2xl': 'calc(var(--radius) + 8px)'
		},
  		boxShadow: {
  			glow: 'var(--glow-blue)',
  			'glow-cyan': 'var(--glow-cyan)',
  			'glow-purple': 'var(--glow-purple)',
  			'glow-pink': 'var(--glow-pink)',
  			card: 'var(--shadow-card)',
  			'card-hover': 'var(--shadow-card-hover)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			shimmer: {
  				'0%': {
  					backgroundPosition: '-200% 0'
  				},
  				'100%': {
  					backgroundPosition: '200% 0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			shimmer: 'shimmer 2s linear infinite'
  		},
		backgroundImage: {
			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			'gradient-primary': 'linear-gradient(135deg, var(--brand-blue), var(--brand-purple))',
			'gradient-secondary': 'linear-gradient(135deg, var(--brand-cyan), var(--brand-blue))',
			'gradient-accent': 'linear-gradient(135deg, var(--brand-purple), var(--brand-pink))'
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
