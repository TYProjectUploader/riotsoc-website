import { ReactNode } from "react";
import Background from "./Background";
import ContentContainer from "./ContentContainer";
import Footer from "./Footer";
import Header from "./Header";

export function PageLayoutWithFooter({ children }: { children: ReactNode }) {
  return (
    <>
      <Background />
      <Header />
      <ContentContainer>
        {children}
        <Footer />
      </ContentContainer>
    </>
  );
}
