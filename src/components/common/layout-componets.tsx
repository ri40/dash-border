import { ReactElement } from "react";
import Navbar from "../dashbord/nav-bar-component";

interface LayoutProps {
  children: ReactElement;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-imagePlaceHolderColor h-[200px] ">
      <Navbar />
      {children}
    </div>
  );
}
