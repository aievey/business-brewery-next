import "./globals.css";
import Navbar from "@/components/navigation";
// import NavigationBar from "@/components/navigation-bar";
export const metadata = {
  title: "Business brewery",
  description:
    "update/ renew/ or even create from scratch your business profile online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
