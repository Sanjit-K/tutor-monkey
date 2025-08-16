export const defaultTheme = {
  // Background colors
  bgPrimary: 'white',
  bgSecondary: '#f9fafb', // gray-50
  bgNavbar: 'white/10',
  bgFooter: '#111827', // gray-900
  bgButton: '#111827', // gray-900
  bgButtonHover: '#1f2937', // gray-800
  bgButtonSecondary: 'transparent',
  bgButtonSecondaryHover: '#f9fafb', // gray-50
  
  // Text colors
  textPrimary: '#111827', // gray-900
  textSecondary: '#4b5563', // gray-600
  textTertiary: '#9ca3af', // gray-400
  textLight: '#f9fafb', // gray-50
  
  // Border colors
  borderPrimary: '#e5e7eb', // gray-200
  borderSecondary: '#1f2937', // gray-800
  borderNavbar: 'white/30',
  
  // Special effects
  shadowColor: 'rgba(0, 0, 0, 0.1)',
  navbarBlur: 'xl',
  navbarBlendMode: 'difference',
  
  // Font families
  fontDisplay: 'var(--font-display)',
  fontBody: 'var(--font-body)',
  
  // Font weights
  fontLight: '300',
  fontRegular: '400',
  fontMedium: '500',
  fontSemibold: '600',
  
  // Transitions
  transitionDuration: '300ms',
  transitionTiming: 'ease-out',
  
  // Animation timings
  animationDuration: '0.8s',
  animationDelay: '0.2s',
  
  // Spacing and sizes
  navbarHeight: '4rem',
  containerMaxWidth: '80rem',
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    full: '9999px'
  }
} as const;

export type Theme = typeof defaultTheme;

export function applyTheme(theme: Partial<Theme> = {}) {
  const mergedTheme = { ...defaultTheme, ...theme };
  
  // Convert theme to CSS variables
  Object.entries(mergedTheme).forEach(([key, value]) => {
    if (typeof value === 'object') {
      Object.entries(value).forEach(([subKey, subValue]) => {
        document.documentElement.style.setProperty(
          `--${key}-${subKey}`,
          subValue.toString()
        );
      });
    } else {
      document.documentElement.style.setProperty(
        `--${key}`,
        value.toString()
      );
    }
  });
}
