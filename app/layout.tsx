import "./globals.css";

export const metadata = {
  title: "Our Chemistry ❤️",
  description: "A reaction crafted with love by Shivam"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}