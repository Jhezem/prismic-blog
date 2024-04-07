import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { ComponentMappers } from "../../utils/contentMapper";
import DefaultRichText from "../../../components/RichText/DefaultRichText";

/**
 * Props for `BlogGrid`.
 */
export type BlogGridProps = SliceComponentProps<Content.BlogGridSlice>;

/**
 * Component for "BlogGrid" Slices.
 */
const BlogGrid = ({ slice }: BlogGridProps): JSX.Element => {
  const {
    primary: { grid_title },
    items,
  } = slice;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-black py-20"
    >
      <div className="text-center my-12">
        <DefaultRichText field={grid_title} />
      </div>
      <div className="max-w-[80%] m-auto my-0 flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:gap-x-10">
        {items.map((item, i) => (
          <article
            className="w-full lg:max-w-80 shadow-md cursor-pointer border border-solid border-gray-400 rounded-xl"
            key={`post-${i}`}
          >
            <div className="p-5">
              <figure className="my-2 mx-auto">
                <PrismicLink field={item.post_link}>
                  <PrismicNextImage
                    field={item.post_image}
                    className="rounded-xl"
                    fallbackAlt=""
                  />
                </PrismicLink>
              </figure>

              <div className="flex flex-col gap-y-2">
                <PrismicRichText
                  field={item.post_title}
                  components={ComponentMappers}
                />
                <PrismicRichText
                  field={item.post_description}
                  components={ComponentMappers}
                />

                <PrismicLink
                  field={item.post_link}
                  className="underline decoration-secondary"
                >
                  {item.link_title ?? "Leer más"}
                </PrismicLink>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogGrid;
