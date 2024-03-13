import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(47, 46, 46, 0);
  transition: 0.3s all;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 71px;
  img {
    width: 51px;
    height: 51px;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  & > *:not(:first-child) {
    margin-left: 25px !important;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.p<{ active: boolean }>`
  transition: all 0.3s;
  font-size: 15px;
  cursor: pointer;
  margin: 0;
  color: rgb(${({ active }) => (active ? "186, 218, 85" : "255, 255, 255")});
  :hover {
    color: rgb(186, 218, 85);
  }
`;

export const MenuToggle = styled.div`
  display: none;
  font-size: 25px;
  color: #fff;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const SidebarWrapper = styled.div<{ show: boolean }>`
  z-index: 999;
  transition: all 0.3s;
  top: 0;
  width: 320px;
  height: 100%;
  left: -320px;
  position: fixed;
  background-color: #000000fa;
  backdrop-filter: blur(10px);
  @media screen and (max-width: 768px) {
    left: ${({ show }) => (show ? 0 : "-320")}px;
  }
`;

export const SidebarOverlay = styled.div<{ show: boolean }>`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  position: fixed;
  visibility: hidden;
  background-color: #00000080;
  @media screen and (max-width: 768px) {
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
  }
`;

export const SidebarContainer = styled.div`
  position: relative;
  font-size: 25px;
  color: #fff;
  padding: 60px 30px;

  svg {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;
  }
`;

export const SidebarItem = styled.p<{ active: boolean }>`
  margin: 0;
  color: rgb(${({ active }) => (active ? "186, 218, 85" : "255, 255, 255")});
  margin-bottom: 20px;
`;

export const SocialLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > *:not(:first-child) {
    margin-left: 20px;
  }
  a {
    display: block;
  }
  img {
    width: 40px;
    cursor: pointer;
    margin: 0 5px;
    height: auto;
  }
`;
