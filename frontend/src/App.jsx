import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import ChatUI from "./components/ChatUI";

export default function App() {
  const [uploaded, setUploaded] = useState(false);
  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">📄 AI Document Q&A</h1>
      {!uploaded ? (
        <FileUpload onUpload={() => setUploaded(true)} />
      ) : (
        <ChatUI />
      )}
    </div>
  );
}
