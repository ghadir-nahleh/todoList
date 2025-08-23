import "./globals.css";

export const metadata = {
  title: "Todo App",
  description: "Server-actions-only Todo list",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen p-4 font-sans">
        {children}
      </body>
    </html>
  );
}
