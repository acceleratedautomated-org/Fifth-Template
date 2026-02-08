import "./globals.css";

import ClientLayout from "@/client-layout";

import { ViewTransitions } from "next-view-transitions";

export const metadata = {
  title: "Wu Wei Studio — Modern Portfolio Template",
  description: "Creative Studio MWT Website Template — Modern Portfolio Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ViewTransitions>
          <ClientLayout>{children}</ClientLayout>
        </ViewTransitions>
      </body>
    </html>
  );
}
