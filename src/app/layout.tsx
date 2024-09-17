import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowBoard",
  description: "A project management tool that integrates with GitHub",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                {children}
            </body>
        </html>
    );
}
