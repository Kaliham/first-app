import Nav from "@components/Nav";
import "@styles/global.css";
import type { AppProps } from "next/app";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};
type RootLayoutProps = {
  children: React.ReactNode;
};
const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
