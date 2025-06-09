// app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';
import { ThemeProvider } from "./components/theme-provider";

export const metadata = {
  title: 'Putzplaner',
  description: 'Dein smarter Wochenputz-Plan',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className='p-4'>
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}