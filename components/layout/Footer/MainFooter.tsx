import { PrismicImage } from "@prismicio/react";
import React from "react";
import {
  FooterDocumentData,
  NavigationDocument,
} from "../../../prismicio-types";
import FooterNavigation from "../Navigation/FooterNavigation";

const MainFooter = ({ logo, navigation }: FooterDocumentData) => {
  return (
    <footer className="px-20 py-10">
      <div className="flex items-center justify-around gap-x-8">
        <PrismicImage
          field={logo}
          width={logo.dimensions?.width}
          height={logo.dimensions?.height}
        />
        <FooterNavigation
          navigation={navigation as unknown as NavigationDocument}
        />
      </div>
    </footer>
  );
};

export default MainFooter;
