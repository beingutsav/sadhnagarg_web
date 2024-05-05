"use client";

import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import theme from "./theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme} cssVarsRoot="body">
          <Navbar />

          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
