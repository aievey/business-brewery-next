import "./globals.css";
import Navigation from "@/components/root-layout/navigation";
import Footer from "@/components/root-layout/footer";

export const metadata = {
  title: "Business Brewery",
  description:
    "Update/ Renew or even create from Scratch your business profile online with us!",
  openGraph: {
    title: "Business Brewery",
    description:
      "Update/ Renew or even create from Scratch your business profile online with us!",
    url: "https://business-brewery-next.vercel.app/",
    siteName: "Business Brewery",
    images: [
      {
        url: "https://business-brewery-next.vercel.app/opengraph-image.png", // Best to point to an actual image file
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
