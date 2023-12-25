import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { dark } from "@clerk/themes";

import "../globals.css";

export const metadata = {
  title: "Threads",
  description: "A Next.js 14 Meta Threads Application",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <ClerkProvider appearance={{
      baseTheme: dark,
    }}>
        <body className={`${inter.className} bg-dark-1`}>
          {children}
        </body>
    </ClerkProvider>
      </html>
  );
}
