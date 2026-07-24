import type { ReactNode } from "react";

interface BrowserMockupProps {
  children: ReactNode;
}

export default function BrowserMockup({
  children,
}: BrowserMockupProps) {
  return (
    <div className="browser-mockup">
      <div className="browser-toolbar">
        <div className="browser-dots">
          <span className="red" />
          <span className="yellow" />
          <span className="green" />
        </div>

        <div className="browser-address-bar" />
      </div>

      <div className="browser-content">
        {children}
      </div>
    </div>
  );
}