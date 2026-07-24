import type { ReactNode } from "react";

interface MobileMockupProps {
  children: ReactNode;
}

export default function MobileMockup({
  children,
}: MobileMockupProps) {
  return (
    <div className="mobile-mockup">
      <div className="mobile-notch" />

      <div className="mobile-screen">
        {children}
      </div>
    </div>
  );
}