import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grab Your Cab | Cab & Car Rental in Delhi NCR, Goa & Jewar Airport",
  description: "Book taxis, self-drive cars, luxury cars, tempo travellers & buses across Delhi NCR, Goa and Noida International Airport (Jewar). 24/7 booking on WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@500;600;700;800;900&display=swap" />
         <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
