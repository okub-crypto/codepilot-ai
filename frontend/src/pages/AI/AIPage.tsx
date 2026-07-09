import { useState } from "react";
import api from "../../api/api";

function AIPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    { sender: string; text: string }[]
  >([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      { sender: "You", text: userMessage },
    ]);

    setMessage("");

    try {
      const res = await api.post("/chat", {
        message: userMessage,
      });

      setMessages((prev) => [
        ...prev,
        {
          sender: "CodePilot AI",
          text: res.data.reply,
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "System",
          text: "Cannot connect to backend.",
        },
      ]);
    }
  };

  return (
    <div className="flex h-screen flex-col bg-slate-950 text-white">
      <header className="border-b border-slate-800 bg-slate-900 p-6">
        <h1 className="text-3xl font-bold text-cyan-400">
          CodePilot AI Workspace
        </h1>
      </header>

      <main className="flex-1 overflow-y-auto p-8">
        <div className="mx-auto max-w-5xl rounded-xl bg-slate-900 p-6">
          <div className="mb-6 h-[450px] overflow-y-auto rounded-lg bg-slate-800 p-4">
            {messages.length === 0 ? (
              <p className="text-gray-400">
                Start a conversation...
              </p>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className="mb-4">
                  <strong className="text-cyan-400">
                    {msg.sender}
                  </strong>
                  <p>{msg.text}</p>
                </div>
              ))
            )}
          </div>

          <div className="flex gap-4">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="Ask CodePilot AI anything..."
              className="flex-1 rounded-lg bg-slate-800 p-4 outline-none"
            />

            <button
              onClick={sendMessage}
              className="rounded-lg bg-cyan-500 px-8 font-semibold hover:bg-cyan-600"
            >
              Send
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AIPage;