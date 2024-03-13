import React from "react";
import { Header } from "./header";

import { AppContent, AppWrapper } from "./AppLayout.styles";
import { Footer } from "./footer";

const AppLayout: React.FC = ({ children }) => {
  return (
    <AppWrapper>
      <Header />
      <AppContent>{children}</AppContent>
      <Footer />
    </AppWrapper>
  );
};

export default AppLayout;
