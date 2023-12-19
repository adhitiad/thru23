import Sidebar from "@/components/Sidebar";
import ProviderAuth from "@/libs/ProviderAuth";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProviderAuth>
        <Sidebar>{children}</Sidebar>
      </ProviderAuth>
    </>
  );
};

export default layout;
