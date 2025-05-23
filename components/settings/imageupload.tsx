import Image from "next/image";
import { useState, useRef } from "react";

export default function ImageUpload() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const file = files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPreviewUrl(imageUrl);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      {/* profile picture */}
      <div className="flex justify-center items-center gap-3 mb-8">
        {/* Hidden native file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
        <div className="w-[100px] h-[100px] overflow-hidden rounded-full">
          <Image
            src={previewUrl ?? "/users/user.png"}
            alt="profile"
            className="max-w-full max-h-full rounded-full"
            width={100}
            height={100}
          />
        </div>
        <div className="relative w-[30px] h-[30px] shrink-0">
          <button
            onClick={handleButtonClick}
            type="button"
            aria-label="Change profile picture"
            className="text-white block w-[50px] h-[50px] shrink-0 absolute right-[25px] top-[25px] p-2 rounded-xl transition-all hover:scale-110 active:scale-90 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Image
              alt=""
              aria-hidden="true"
              src="/icons/edit_icon.png"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
