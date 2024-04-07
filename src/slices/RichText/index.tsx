import type { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import DefaultRichText from "../../../components/RichText/DefaultRichText";
import { twMerge } from "tailwind-merge";

type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

export default function RichText({ slice }: RichTextProps) {
  const {
    primary: { classes, content },
  } = slice;
  return (
    <div className={twMerge(classes, "w-full")}>
      <DefaultRichText field={content} />
    </div>
  );
}
