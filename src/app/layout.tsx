import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/lib/ThemeProvider';

export const metadata: Metadata = {
  title: 'AI Portfolio | GitHub Contributions & Projects',
  description: 'Showcase of AI-related GitHub contributions, MCP projects, Cline discussions, and innovative development work.',
  keywords: ['AI', 'GitHub', 'Portfolio', 'MCP', 'Cline', 'Claude', 'Contributions'],
  authors: [{ name: 'Developer' }],
  openGraph: {
    title: 'AI Portfolio | GitHub Contributions & Projects',
    description: 'Showcase of AI-related GitHub contributions, MCP projects, Cline discussions, and innovative development work.',
    type: 'website',
    url: 'https://username.github.io/portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Portfolio | GitHub Contributions & Projects',
    description: 'Showcase of AI-related GitHub contributions, MCP projects, Cline discussions, and innovative development work.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
