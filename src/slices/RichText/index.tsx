import type { Content } from "@prismicio/client";
import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
} from "@prismicio/react";
import styles from "./index.module.css";

const components: JSXMapSerializer = {
  heading1: ({ children }) => <h1 className="text-4xl">{children}</h1>,
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>;
    }
  },
};

type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

export default function RichText({ slice }: RichTextProps) {
  return (
    <section className={styles.richtext}>
      <PrismicRichText field={slice.primary.content} components={components} />
    </section>
  );
}
