import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/global.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zoom",
};

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <html>
      <body className={font.className}>{children}</body>
    </html>
  );
};

export default AppLayout;
