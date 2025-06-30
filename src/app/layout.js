import { Chewy, Raleway } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { SignedIn } from "@clerk/nextjs";
import LeftBar from "@/components/LeftBar";
import RightNav from "@/components/RightNav";
//i only want my header to be visible when you sign in, i believe this is how to do it
//fonts

const fontChewy = Chewy({
  variable: "--font-chewy",
  weight: "400",
  subsets: ["latin"],
});

const fontRaleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

/* const starsCollide = localFont({
  src: "../fonts/StarsCollide.otf",
  weight: "400",
  style: "filled",
  subsets: ["latin"],
}); */
//I tried to import a local font, but I couldn't get it working reliably - I have left this here incase I am hit with an "oh, duh" moment but let's not hold our breath
export const metadata = {
  title: "CLOWNECT",
  description: "A social media experience for clowns",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${fontChewy.variable} ${fontRaleway.variable} antialiased`}
        >
          <SignedIn>
            {" "}
            <Header />
            <LeftBar /> <RightNav />
          </SignedIn>{" "}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
