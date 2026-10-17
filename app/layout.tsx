// import "./globals.css";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Grab Your Cab | Cab & Car Rental in Delhi NCR, Goa & Jewar Airport",
//   description: "Book taxis, self-drive cars, luxury cars, tempo travellers & buses across Delhi NCR, Goa and Noida International Airport (Jewar). 24/7 booking on WhatsApp.",
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
//         <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@500;600;700;800;900&display=swap" />
//          <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
//       </head>
//       <body>{children}</body>
//     </html>
//   );
// }

import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grab Your Cab | Cab & Car Rental in Delhi NCR, Goa & Jewar Airport",
  description:
    "Book taxis, self-drive cars, luxury cars, tempo travellers & buses across Delhi NCR, Goa and Noida International Airport (Jewar). 24/7 booking on WhatsApp.",
  icons: {
    icon: "/favicon.ico",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Grab Your Cab",
  url: "https://www.grabyourcab.com/",
  logo: "https://www.grabyourcab.com/images/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "07522817555",
    contactType: "customer service",
    contactOption: "TollFree",
    areaServed: "IN",
    availableLanguage: "en",
  },
  sameAs: [
    "https://www.facebook.com/share/1c22yzh3vw/",
    "https://www.linkedin.com/in/kamal-srivastava-1a724233?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "https://www.instagram.com/grabyourcab?igsh=MXdtdG9qZm5pZWZyNw==",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Grab Your Cab",
  image:
    "https://www.google.com/maps/place/Grab+Your+Cab/@28.6070559,77.4321837,3a,75.9y,90t/data=!3m8!1e2!3m6!1sCIABIhCSQyGvdUvOPp4Q2TkP9bEv!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgrass-cs%2FAABkmLfTlsUhotvPUfjmwtwwxCr3IR5iBbV0Tgfgiz3l9LRO5sNlbbYoPrS-UVG2IF02VspRt8ia2_dlgeifQUrqyqGHhsmguwRU_ZPIyksrxTPOqpM9ITUc3FnGGuphqSuo3MyG_hUXKfgu2jY%3Dw133-h86-k-no!7i1120!8i719!4m7!3m6!1s0x390cef1fd62163fd:0x48be6f8138d907b0!8m2!3d28.6070559!4d77.4321837!10e5!16s%2Fg%2F11tnh9nfql!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D#",
  "@id": "",
  url: "https://share.google/qc1qyoXEPTdBLmdJ5",
  telephone: "07522817555",
  priceRange: "5000 - 15000",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "first floor, Galaxy Diamond Plaza, FB-133, Noida-Greater Noida Link Rd, Haibatpur, Sector 4, Uttar Pradesh",
    addressLocality: "Greater Noida",
    postalCode: "201016",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.5976044,
    longitude: 77.454723,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [
    "https://www.facebook.com/share/1c22yzh3vw/",
    "https://www.instagram.com/grabyourcab?igsh=MXdtdG9qZm5pZWZyNw==",
    "https://www.linkedin.com/in/kamal-srivastava-1a724233?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Grab Your Cab",
  url: "https://www.grabyourcab.com/",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.grabyourcab.com/taxi-service-delhi{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@500;600;700;800;900&display=swap"
        />
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}