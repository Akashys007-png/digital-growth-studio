import PreviewNavbar from "./ui/PreviewNavbar";
import PreviewAvatar from "./ui/PreviewAvatar";
import PreviewButton from "./ui/PreviewButton";

export default function LawPreview()  {
  return (
    <div className="preview law-preview">

      <PreviewNavbar />

      <PreviewAvatar />

      <PreviewButton width="large" />

    </div>
  );
}