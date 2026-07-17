import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  sender: string;
  text: string;
};

function MessageBubble({ sender, text }: Props) {
  const isUser = sender === "You";

  return (
    <div
      className={`mb-5 flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[75%] rounded-2xl p-4 ${
          isUser
            ? "bg-cyan-600"
            : "bg-slate-800"
        }`}
      >
        <p className="mb-2 text-sm font-bold">
          {sender}
        </p>

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ className, children, ...props }) {
              const match = /language-(\w+)/.exec(
                className || ""
              );

              return match ? (
                <SyntaxHighlighter
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code
                  className="rounded bg-slate-900 px-1"
                  {...props}
                >
                  {children}
                </code>
              );
            },
          }}
        >
          {text}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default MessageBubble;