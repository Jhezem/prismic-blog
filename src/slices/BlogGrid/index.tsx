import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { ComponentMappers } from "../../utils/contentMapper";

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
      className="text-black py-10"
    >
      <div className="text-center mb-8">
        <PrismicRichText field={grid_title} components={ComponentMappers} />
      </div>
      <div className="flex gap-x-5">
        {items.map((item, i) => (
          <article className="w-1/3 shadow-md cursor-pointer" key={`post-${i}`}>
            <figure>
              <PrismicNextImage
                field={item.post_image}
                style={{ objectFit: "cover" }}
                fallbackAlt=""
              />
            </figure>
            <div className="p-5">
              <PrismicRichText
                field={item.post_title}
                components={ComponentMappers}
              />
              <PrismicRichText
                field={item.post_description}
                components={ComponentMappers}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogGrid;
