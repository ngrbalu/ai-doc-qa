import React, { useState } from "react";

export default function FileUpload({ onUpload }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    await fetch("http://localhost:8000/upload", { method: "POST", body: formData });
    onUpload();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Upload & Process
      </button>
    </div>
  );
}
