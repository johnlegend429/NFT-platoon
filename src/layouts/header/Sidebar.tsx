import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { menuData } from "./Header";

import {
  SidebarContainer,
  SidebarItem,
  SidebarOverlay,
  SidebarWrapper,
} from "./Header.styles";

const Sidebar: React.FC<{ show: boolean; onClick: VoidFunction }> = ({
  show,
  onClick,
}) => {
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState("/");

  const handleMenuClick = (path: string) => {
    setSelectedMenu(path);
    router.push(`${path}`);
    onClick();
  };
  return (
    <>
      <SidebarWrapper show={show}>
        <SidebarContainer>
          <AiFillCloseCircle onClick={onClick} />
          {menuData.map((item: any, key: any) => (
            <SidebarItem
              key={key}
              active={item.path === selectedMenu}
              onClick={() => handleMenuClick(item.path)}
            >
              {item.label}
            </SidebarItem>
          ))}
        </SidebarContainer>
      </SidebarWrapper>
      <SidebarOverlay show={show} onClick={onClick}></SidebarOverlay>
    </>
  );
};

export default Sidebar;
