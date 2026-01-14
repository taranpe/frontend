import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ask Rajni",
  description: "Next.js Ecommerce Frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* flex-col + min-h-screen ensures footer stays after content */}
      <body className="flex flex-col min-h-screen">
        {/* HEADER (Common) */}
        <Header />

        {/* MAIN CONTENT */}
        <main className="flex-grow">
          {children} {/* Home page / other page content */}
        </main>

        {/* FOOTER (Common) */}
        <Footer />
      </body>
    </html>
  );
}
