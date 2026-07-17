import { Conversation } from "../types/chat";

type SidebarProps = {
  conversations: Conversation[];
  currentId: number;
  onSelect: (id: number) => void;
  onNewChat: () => void;
};

function Sidebar({
  conversations,
  currentId,
  onSelect,
  onNewChat,
}: SidebarProps) {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-900">

      <div className="border-b border-slate-800 p-6">
        <h1 className="text-2xl font-bold text-cyan-400">
          🚀 CodePilot AI
        </h1>
      </div>

      <div className="p-4">
        <button
          onClick={onNewChat}
          className="w-full rounded-xl bg-cyan-500 p-3 font-bold hover:bg-cyan-600"
        >
          + New Chat
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4">

        <h2 className="mb-3 text-xs uppercase tracking-widest text-gray-500">
          Recent Chats
        </h2>

        <div className="space-y-2">

          {conversations.map((chat) => (
            <button
              key={chat.id}
              onClick={() => onSelect(chat.id)}
              className={`w-full rounded-lg p-3 text-left transition ${
                currentId === chat.id
                  ? "bg-cyan-600"
                  : "bg-slate-800 hover:bg-slate-700"
              }`}
            >
              💬 {chat.title}
            </button>
          ))}

        </div>

      </div>

      <div className="border-t border-slate-800 p-4">
        <button className="w-full rounded-lg bg-slate-800 p-3 hover:bg-slate-700">
          ⚙️ Settings
        </button>
      </div>

    </aside>
  );
}

export default Sidebar;