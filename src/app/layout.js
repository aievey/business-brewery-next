import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata = {
  title: "Business brewery",
  description:
    "Update/ Renew or even create from Scratch your business profile online with us!",
  openGraph: {
    title: "My Website Title",
    description: "My website description",
    url: "https://business-brewery-next.vercel.app/",
    siteName: "My Website",
    images: [
      {
        url: "https://business-brewery-next.vercel.app", // Best to point to an actual image file
        width: 1200,
        height: 630,
        alt: "Business Brewery OG",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
