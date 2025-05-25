import { Outlet } from "react-router";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function Layout(){
    return (
        <>
          <Header/>
           <Outlet/>
          <Footer/>
          {/* Pattern Design */}
          <div className="bg-pattern"></div>
        </>
    )
}