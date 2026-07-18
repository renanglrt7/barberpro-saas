import "./globals.css";
import Layout from "./components/Layout/Layout";

export const metadata = {
  title: "BarberPro",
  description: "Sistema para Barbearias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}