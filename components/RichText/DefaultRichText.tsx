import {
  JSXMapSerializer,
  PrismicRichText,
  PrismicRichTextProps,
} from "@prismicio/react";
import { ComponentMappers } from "@/utils/contentMapper";
import { RichTextField } from "@prismicio/client";

interface IDefaultRichText {
  field: RichTextField;
  components?: JSXMapSerializer;
}

type DefaultRichTextProps = Omit<PrismicRichTextProps, "field" | "components">;

const DefaultRichText = ({
  field,
  components = ComponentMappers,
  ...props
}: IDefaultRichText & DefaultRichTextProps) => {
  return <PrismicRichText field={field} components={components} {...props} />;
};

export default DefaultRichText;
