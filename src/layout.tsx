import { Outlet } from "react-router-dom";
import { FooterSection } from "./common/footer";
import { Navbar } from "./common/navbar";

export const Layout = (props: any) => {
  return (
    <>
      <Navbar />
      <div className="md:mx-24 border min-h-[80vh]">
        <Outlet />
      </div>
      <FooterSection />
    </>
  );
};
