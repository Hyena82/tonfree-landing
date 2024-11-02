import "./globals.css";
import StyledJsxRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/GlobalStyles";
import LayoutPage from "@/components/Layout";

import { Protest_Strike, Inter, Poppins } from "next/font/google";
import { LenisProvider } from "@/components/Layout/LenisProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const protest_Strike = Protest_Strike({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-protest-strike",
});

const inter = Inter({
  weight: ["300", "400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["300", "400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

// export const metadata: Metadata = {
//   title: "FishWar - Play more, earn more",
//   description: "The survival game, Play more, earn more.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${protest_Strike.variable} ${inter.variable} ${poppins.variable}`}
    >
      <body>
        <StyledJsxRegistry>
          <GlobalStyles />
          <LenisProvider>
            <AntdRegistry>
              <LayoutPage>{children}</LayoutPage>
            </AntdRegistry>
          </LenisProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
