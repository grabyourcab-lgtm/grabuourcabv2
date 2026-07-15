import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grab Your Cab | Cab & Car Rental in Delhi NCR, Goa & Jewar Airport",
  description: "Taxis, self-drive, luxury cars, tempo travellers & buses across Delhi NCR, Goa and Noida International Airport (Jewar).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
