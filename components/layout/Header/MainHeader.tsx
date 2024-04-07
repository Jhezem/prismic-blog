"use client";

import { PrismicImage, PrismicLink } from "@prismicio/react";
import MainNavigation from "../Navigation/MainNavigation";
import {
  HeaderDocumentData,
  NavigationDocument,
} from "../../../prismicio-types";
import classNames from "classnames";
import { useEffect, useState } from "react";

const MainHeader = ({
  logo,
  navigation,
  primary_cta,
  secondary_cta,
}: HeaderDocumentData) => {
  const [stickHeader, setStickHeader] = useState(false);

  const stickNavbar = () => {
    const windowHeight = window.scrollY;
    if (windowHeight > 150) setStickHeader(true);
    else setStickHeader(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  return (
    <header
      className={classNames(
        "min-h-24 flex flex-col items-center w-full bg-primary text-white",
        {
          "fixed top-0 left-0": stickHeader,
          relative: !stickHeader,
        },
      )}
    >
      <div className="w-full flex-col lg:flex-row gap-y-4 flex mt-8 items-center justify-around">
        <PrismicLink href="/">
          <PrismicImage
            field={logo}
            width={logo.dimensions?.width}
            height={logo.dimensions?.height}
          />
        </PrismicLink>
        <MainNavigation
          navigation={navigation as unknown as NavigationDocument}
        />
        <div className="hidden lg:flex gap-x-8 items-center">
          <PrismicLink field={primary_cta}>Login</PrismicLink>
          <PrismicLink
            field={secondary_cta}
            className="border border-solid border-white py-1 px-4 rounded-sm"
          >
            Sign Up
          </PrismicLink>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
