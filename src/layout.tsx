import { Outlet } from "react-router-dom";
import { FooterSection } from "./common/footer";
import { Navbar } from "./common/navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Layout = (props: any) => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="md:mx-24 min-h-[80vh]">
        <Outlet />
      </div>
      {/* <FooterSection /> */}
    </>
  );
};
