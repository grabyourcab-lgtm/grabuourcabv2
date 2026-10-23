import React from "react";

export const metadata = {
  title: "Contact Us | Grab Your Cab",
  alternates: {
    canonical: "/contact",
  },
  description:
    "Learn more about our company, our mission, our vision, and the services we provide.",
};

export default function AboutUsLayout({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}