import { ClerkProvider } from "@clerk/nextjs";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-datepicker/dist/react-datepicker.css";

import { Toaster } from "@/components/providers/toaster";
import "@/styles/global.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zoom",
  icons: { icon: "/icons/logo.svg" },
};

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <ClerkProvider
      appearance={{
        layout: { logoImageUrl: "/icons/logo.svg" },
        variables: {
          colorText: "#fff",
          colorPrimary: "#0E78F9",
          colorBackground: "#1C1F2E",
          colorInputBackground: "#252A41",
          colorInputText: "#fff",
        },
      }}
    >
      <html>
        <body className={font.className}>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
};

export default AppLayout;
