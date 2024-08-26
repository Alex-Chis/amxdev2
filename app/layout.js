import "./globals.css";

export const metadata = {
  title: "AMX dev",
  description: "amx dev site v2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
