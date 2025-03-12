import type { Metadata } from "next";
import localFont from "next/font/local";
import { PAGE_TITLE, PAGE_DESCRIPTION } from "@/configuration/ui";
import "./globals.css";
import { ErrorWrapper } from "./parts/error/error-wrapper";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const nunitoRegular = localFont({
  src: "./fonts/Nunito-Regular.ttf",
  variable: "--font-nunito-regular",
  weight: "400",
});

const nunitoBold = localFont({
  src: "./fonts/Nunito-Bold.ttf",
  variable: "--font-nunito-bold",
  weight: "700",
});

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TooltipProvider>
        <body
          className={`${nunitoRegular.variable} antialiased`}
        >
          <ErrorWrapper>{children}</ErrorWrapper>
        </body>
      </TooltipProvider>
    </html>
  );
}
