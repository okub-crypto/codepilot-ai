export interface Message {
  sender: "You" | "CodePilot AI" | "System";
  text: string;
}

export interface Conversation {
  id: number;
  title: string;
  messages: Message[];
}