import { useState } from "react";
import { Conversation } from "../types/chat";

export function useChat() {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: 1,
      title: "New Chat",
      messages: [],
    },
  ]);

  const [currentId, setCurrentId] = useState(1);

  const currentConversation =
    conversations.find(c => c.id === currentId)!;

  function newChat() {
    const chat: Conversation = {
      id: Date.now(),
      title: "New Chat",
      messages: [],
    };

    setConversations(prev => [...prev, chat]);
    setCurrentId(chat.id);
  }

  return {
    conversations,
    currentConversation,
    currentId,
    setCurrentId,
    newChat,
    setConversations,
  };
}