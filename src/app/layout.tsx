import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css";
import MainNavigation from "../../components/layout/Navigation/MainNavigation";
import MainLayout from "../../components/layout/MainLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="any"
          href="https://prismic.io/favicon.ico"
        />
      </head>
      <body className="bg-slate-100">
        <MainLayout>
          <main className="flex flex-col items-center">
            {children}
            <PrismicPreview repositoryName={repositoryName} />
          </main>
        </MainLayout>
      </body>
    </html>
  );
}
