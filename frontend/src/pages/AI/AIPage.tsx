import { useState, useRef, useEffect } from "react";
import api from "../../api/api";
import Sidebar from "../../components/Sidebar";
import MessageBubble from "../../components/MessageBubble";
import { useChat } from "../../hooks/useChat";

function AIPage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    conversations,
    currentConversation,
    currentId,
    setCurrentId,
    newChat,
    setConversations,
  } = useChat();

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [currentConversation.messages, loading]);

  const updateCurrentConversation = (
    sender: "You" | "CodePilot AI" | "System",
    text: string
  ) => {
    setConversations((prev) =>
      prev.map((chat) =>
        chat.id === currentId
          ? {
              ...chat,
              messages: [...chat.messages, { sender, text }],
              title:
                chat.messages.length === 0
                  ? text.substring(0, 30)
                  : chat.title,
            }
          : chat
      )
    );
  };

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userMessage = message;

    updateCurrentConversation("You", userMessage);

    setMessage("");
    setLoading(true);

    try {
      const res = await api.post("/chat", {
        message: userMessage,
      });

      updateCurrentConversation(
        "CodePilot AI",
        res.data.reply
      );
    } catch {
      updateCurrentConversation(
        "System",
        "Cannot connect to backend."
      );
    }

    setLoading(false);
  };

  return (
    <div className="flex h-screen bg-slate-950 text-white">

      <Sidebar
        conversations={conversations}
        currentId={currentId}
        onSelect={setCurrentId}
        onNewChat={newChat}
      />

      <main className="flex flex-1 flex-col">

        <header className="border-b border-slate-800 bg-slate-900 p-6">
          <h1 className="text-3xl font-bold text-cyan-400">
            🚀 CodePilot AI Workspace
          </h1>
        </header>

        <div className="flex-1 overflow-y-auto p-6">

          {currentConversation.messages.length === 0 && (
            <div className="mt-24 text-center text-gray-500">

              <h2 className="mb-2 text-4xl font-bold">
                Welcome to CodePilot AI
              </h2>

              <p className="text-lg">
                Your intelligent software engineering assistant.
              </p>

            </div>
          )}

          {currentConversation.messages.map((msg, index) => (
            <MessageBubble
              key={index}
              sender={msg.sender}
              text={msg.text}
            />
          ))}

          {loading && (
            <div className="flex justify-start">

              <div className="rounded-xl bg-slate-800 p-4">

                <p className="font-bold text-cyan-400">
                  CodePilot AI
                </p>

                <p className="animate-pulse">
                  Thinking...
                </p>

              </div>

            </div>
          )}

          <div ref={bottomRef}></div>

        </div>

        <div className="border-t border-slate-800 bg-slate-900 p-5">

          <div className="mx-auto flex max-w-5xl gap-4">

            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Ask CodePilot AI anything..."
              className="flex-1 rounded-xl bg-slate-800 p-4 text-white outline-none ring-1 ring-slate-700 focus:ring-cyan-500"
            />

            <button
              disabled={loading}
              onClick={sendMessage}
              className="rounded-xl bg-cyan-500 px-8 font-bold hover:bg-cyan-600 disabled:opacity-50"
            >
              {loading ? "..." : "Send"}
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default AIPage;