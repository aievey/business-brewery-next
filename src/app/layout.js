import "./globals.css";
import Navigation from "@/components/navigation";

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
        {children}
      </body>
    </html>
  );
}
