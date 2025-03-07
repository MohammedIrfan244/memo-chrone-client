import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/lib/redux/providers";


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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
