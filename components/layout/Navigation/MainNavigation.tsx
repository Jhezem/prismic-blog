import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { NavigationDocument } from "../../../prismicio-types";

const MainNavigation = ({ navigation }: { navigation: NavigationDocument }) => {
  return (
    <nav>
      <ul className="flex gap-x-8">
        {navigation.data.slices.map((slice) => (
          <li key={slice.id}>
            <PrismicLink field={slice.primary.link}>
              <PrismicRichText field={slice.primary.link_title} />
            </PrismicLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigation;
