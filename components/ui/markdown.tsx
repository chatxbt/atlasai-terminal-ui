import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import gfm from "remark-gfm";
import rmoji from "remark-emoji";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

import { cn } from "@/lib/utils";

export const Markdown = ({
  className,
  children,
}: {
  className?: string;
  children: string | null;
}) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeHighlight, rehypeRaw]}
      remarkPlugins={[gfm, rmoji]}
      className={cn("space-y-3 w-full overflow-x-auto", className)}
      components={{
        a: ({ ...props }) => (
          <a
            {...props}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-blue-600 hover:text-blue-800 underline"
          />
        ),
        ul: ({ ...props }) => (
          <ul {...props} className="list-none pl-2 space-y-2" />
        ),
        ol: ({ ...props }) => (
          <ol {...props} className="list-none pl-2 space-y-2" />
        ),
        li: ({ ...props }) => <li {...props} className="indent-2" />,
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

Markdown.displayName = "CustomMarkdownRenderer";
