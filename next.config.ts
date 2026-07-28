import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Our own hand-authored blog cover illustrations are SVGs.
    // Next.js blocks SVG optimization by default (XSS risk from
    // untrusted uploads); these are static, script-free files we
    // wrote ourselves, so this is safe, and the CSP below still
    // sandboxes any SVG output as a defense-in-depth measure.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};
export default nextConfig;
