import { GeistSans } from "geist/font/sans";
import "../styles/globalStyle.css";
import PostProvider from "@/context/TodoContext"

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
      <header>
        <ul>
          <li>Day</li>
          <li>week</li>
          <li>Month</li>
          <li>Year</li>
        </ul>
      </header>

        <PostProvider>
          <main>{children}</main>
        </PostProvider>

      <footer></footer>
      </body>
    </html>
  );
}
