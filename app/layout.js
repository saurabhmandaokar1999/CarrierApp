import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export const metadata = {
  title: "AI Carrier Coach",
  description: "Helping people in their career",
};
const inter = Inter({subset:["latin"]});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
    }}>
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {(
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* Header*/}
            <Header/>
            <main className="min-h-screen">{children}</main>
            {/*Footer*/}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center">
                <p>Made With Love ❤️ By Saurabh Mandaokar</p>
              </div>
            </footer>
          </ThemeProvider>
        )}
      </body>
    </html>
    </ClerkProvider>
  )};
