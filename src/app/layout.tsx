import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components/MainLayout";


export const metadata: Metadata = {
  title: "Memo Chrone",
  description: "Save your memories with Memo Chrone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainLayout>
        {children}
        </MainLayout>
      </body>
    </html>
  );
}
