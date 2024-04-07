import { ReactNode, Fragment } from "react";
import { createClient } from "@/prismicio";
import MainHeader from "./Header/MainHeader";
import MainFooter from "./Footer/MainFooter";

const headerQuery = `{
  header {
      logo
      primary_cta
      secondary_cta
      navigation {
          ...on navigation {
              slices
          }
      }
  }
}`;

const footerQuery = `{
  footer {
      logo
      primary_cta
      navigation {
          ...on navigation {
              slices
          }
      }
  }
}`;

const MainLayout = async ({ children }: { children: ReactNode }) => {
  const client = createClient();

  const mainHeader = await client.getByUID("header", "main-header", {
    graphQuery: headerQuery,
  });

  const mainFooter = await client.getByUID("footer", "main-footer", {
    graphQuery: footerQuery,
  });

  const { data: headerData } = mainHeader;
  const { data: footerData } = mainFooter;

  return (
    <Fragment>
      <MainHeader {...headerData} />
      {children}
      <MainFooter {...footerData} />
    </Fragment>
  );
};

export default MainLayout;
