import Logo from "@/assets/images/logos/Logo.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router";

export default function Footer(){
    return (
        <>
         <footer className="lg:px-20 px-4" >
          <div className="footer-topbar w-full h-[1px]" ></div>
          <div className="flex items-center justify-between lg:flex-norap flex-wrap lg:gap-0 gap-4 py-8" > 
         <img src={Logo} alt="" className="h-10" />
         <div className="flex items-center gap-3">
           <Link to="https://getcohesiveai.com/terms" className="text-[13px] text-white/70 hover:text-primary">Terms & Policies</Link>
           <Link to="https://getcohesiveai.com/privacy" className="text-[13px] text-white/70 hover:text-primary">Privacy Policy</Link>
         </div>
         <div className="flex flex-col gap-2 items-start">
          <div className="flex items-center gap-1">
            <Icon icon="mdi:email-outline" width={18} height={18} className="text-white/70" />
             <span className="text-[13px] font-normal text-white/70">kevin@getcohesiveai.com</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon icon="akar-icons:location" width={18} height={18} className="text-white/70" />
             <span className="text-[13px] font-normal text-white/70">139 East 33rd Street, New York NY 10016</span>
          </div>
         </div>
         </div>
         </footer>
        </>
    )
}