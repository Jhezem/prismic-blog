import { JSXMapSerializer } from "@prismicio/react";

export const ComponentMappers: JSXMapSerializer = {
  heading1: ({ children }) => <h1 className="text-4xl">{children}</h1>,
  heading2: ({ children }) => <h2 className="text-3xl">{children}</h2>,
  heading3: ({ children }) => <h3 className="text-2xl">{children}</h3>,
  heading4: ({ children }) => <h3 className="text-xl">{children}</h3>,
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>;
    }
  },
};
