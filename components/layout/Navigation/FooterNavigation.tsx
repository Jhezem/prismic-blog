import React from "react";
import { NavigationDocument } from "../../../prismicio-types";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import classNames from "classnames";

const FooterNavigation = ({
  navigation,
}: {
  navigation: NavigationDocument;
}) => {
  return (
    <nav>
      <ul className="flex flex-wrap gap-x-12 mt-10">
        {navigation.data.slices.map((slice) => (
          <li key={slice.id} className="flex flex-col gap-y-8">
            <PrismicLink field={slice.primary.link}>
              <PrismicRichText field={slice.primary.link_title} />
            </PrismicLink>

            {slice.items.length > 0 && (
              <ul>
                {slice.items.map((item) => (
                  <li
                    key={JSON.stringify(item)}
                    className={classNames("mb-2", {
                      "bg-secondary text-white p-2 text-center font-bold":
                        item.link_type === "cta",
                    })}
                  >
                    <PrismicLink field={item.sub_link}>
                      <PrismicRichText field={item.sub_link_title} />
                    </PrismicLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNavigation;
