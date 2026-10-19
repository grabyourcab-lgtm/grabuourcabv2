import type { Metadata } from "next";

const SITE_URL = "https://www.grabyourcab.com";

export function getCanonical(path: string): Metadata {
  const normalizedPath =
    path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;

  return {
    alternates: {
      canonical: normalizedPath,
    },
  };
}