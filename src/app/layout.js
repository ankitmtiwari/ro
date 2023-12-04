import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";
import Fixed_footer from "./components/Shared/Fixed_footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Fixed_Floating from "./components/Shared/Fixed_Floating";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aardhya Aqua Solution",
  description:
    "Kent Authorised Service Center, Kent Expertise: Our Kent Authorized Service Center status ensures expert service for Kent RO systems, whether you're in Basti or seeking a Kent RO Service Center near Basti.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Aardhya Aqua Solutions - your trusted source for all things related to water purification. We are your  one-stop destination for high-quality water purifiers and reliable service. Located in Basti District, Uttar Pradesh, Aardhya Aqua Solutions, we understand the importance of clean and safe drinking water, and we are dedicated to making it accessible to you."
        ></meta>
        <meta
          name="keywords"
          content="RO, Kent, Kent Service Center in Siddharthnagar, RO Service Center in Siddharthnagar, KENT RO, Kent RO purifier in siddharthnagar, kent purifier, kent purifiers, water filters, kent products, kent purifiers prices, kent ro water purifier, kent vegetable purifier, kent water softeners, fruit purifier, home appliances, water purifier brand"
        ></meta>
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Aardhya Aqua Solution - KENT RO SERVICE CENTER IN SIDDHARTHNAGAR"
        />
        <meta
          property="og:description"
          content="Aardhya Aqua Solutions - your trusted source for all things related to water purification. We are your one-stop destination for high-quality water purifiers and reliable service. Located in Basti District, Uttar Pradesh,Aardhya Aqua Solutions, we understand the importance of clean and safe drinking water, and we are dedicated to making it accessible to you."
        />
        <meta
          property="og:url"
          content="https://www.aardhyaaquasolution.com/"
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Fixed_Floating />
        <Footer />
        <Fixed_footer />
      </body>
    </html>
  );
}
