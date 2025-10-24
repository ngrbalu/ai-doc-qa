import React, { useState } from "react";

export default function ChatUI() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);

  const handleAsk = async () => {
    const formData = new FormData();
    formData.append("query", query);
    const res = await fetch("http://localhost:8000/ask", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    setMessages([...messages, { q: query, a: data.answer }]);
    setQuery("");
  };

  return (
    <div className="w-full max-w-xl">
      <div className="bg-white shadow rounded-lg p-4 h-[500px] overflow-y-auto">
        {messages.map((m, i) => (
          <div key={i} className="mb-3">
            <p className="font-semibold">🧑‍💻 You: {m.q}</p>
            <p className="text-gray-700">🤖 Bot: {m.a}</p>
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          className="flex-1 border rounded-l-lg p-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask a question..."
        />
        <button
          onClick={handleAsk}
          className="bg-green-600 text-white px-4 rounded-r-lg hover:bg-green-700"
        >
          Ask
        </button>
      </div>
    </div>
  );
}
