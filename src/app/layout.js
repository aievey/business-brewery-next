import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata = {
  title: "Business brewery",
  description:
    "update/ renew/ or even create from scratch your business profile online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
