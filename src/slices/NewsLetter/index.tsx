import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import DefaultRichText from "../../../components/RichText/DefaultRichText";

/**
 * Props for `NewsLetter`.
 */
export type NewsLetterProps = SliceComponentProps<Content.NewsLetterSlice>;

/**
 * Component for "NewsLetter" Slices.
 */
const NewsLetter = ({ slice }: NewsLetterProps): JSX.Element => {
  const { title, button_text, input_placeholder } = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-primary py-20 space-y-8 text-center text-white "
    >
      <DefaultRichText field={title} />
      <div className="relative lg:w-[50%] my-0 mx-auto">
        <input
          type="text"
          placeholder={input_placeholder ?? ""}
          className="w-[80%] lg:w-[60%] py-3 px-2 text-primary font-bold"
        />
        <input
          type="button"
          value={button_text ?? "Subscribe"}
          className="bg-secondary p-2 -ml-[4.8rem] font-bold cursor-pointer"
        />
      </div>
    </section>
  );
};

export default NewsLetter;
