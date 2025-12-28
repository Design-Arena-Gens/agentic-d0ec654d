import "./globals.css";

export const metadata = {
  title: "Muze Lead Automation",
  description: "Automated lead generation and instant message replies"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
