// app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Putzplaner',
  description: 'Dein smarter Wochenputz-Plan',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-gradient-to-b from-blue-100 to-amber-100 min-h-screen p-4">
        {children}
      </body>
    </html>
  );
}