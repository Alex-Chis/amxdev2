import "./globals.css";

export const metadata = {
  title: "Journal Next",
  description: "Journal app made in next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
