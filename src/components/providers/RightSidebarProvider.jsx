import { createContext, useContext, useState } from "react";

const RightSidebarContext = createContext();

export const useRightSidebar = () => {
  const context = useContext(RightSidebarContext);
  if (!context) {
    throw new Error("useRightSidebar must be used within RightSidebarProvider");
  }
  return context;
};

export const RightSidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <RightSidebarContext.Provider value={{ isOpen, toggle, open, close }}>
      {children}
    </RightSidebarContext.Provider>
  );
};
