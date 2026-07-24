interface PreviewBrowserProps {
  children: React.ReactNode;
}

export default function PreviewBrowser({
  children,
}: PreviewBrowserProps) {
  return (
    <div className="preview-browser">
      <div className="preview-browser-bar">
        <span />
        <span />
        <span />
      </div>

      <div className="preview-browser-body">
        {children}
      </div>
    </div>
  );
}