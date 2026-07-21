import { useRef, useState, useEffect } from "react";

const ProfileImageUploader = ({ storageKey = "profileImage", className = "", alt = "Profile picture" }) => {
  const inputRef = useRef(null);
  const [src, setSrc] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setSrc(saved);
  }, [storageKey]);

  const onPick = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const data = reader.result;
      setSrc(data);
      try { localStorage.setItem(storageKey, data); } catch (err) { /* quota */ }
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setSrc(null);
    localStorage.removeItem(storageKey);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative">
        <img
          src={src || "/default-avatar.png"}
          alt={alt}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-md"
        />
        <div className="absolute bottom-0 right-0 flex space-x-2">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="bg-white p-1 rounded-full shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Change profile picture"
          >
            ✎
          </button>
          {src && (
            <button
              type="button"
              onClick={removeImage}
              className="bg-white p-1 rounded-full shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Remove profile picture"
            >
              🗑
            </button>
          )}
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={onPick}
        className="hidden"
        aria-hidden="true"
      />
    </div>
  );
};

export default ProfileImageUploader;