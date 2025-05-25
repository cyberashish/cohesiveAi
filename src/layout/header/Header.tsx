import { Button } from "@/components/ui/button";
import Logo from "@/assets/images/logos/Logo.svg";
import {v4 as uuidv4} from "uuid";
import {Icon} from "@iconify/react"
import { MobileNavigation } from "./MobileNavigation";
import { Link } from "react-router";

export default function Header(){
    
    interface NavItemType {
        id: string ,
        item : string ,
        url: string
    }

    const navItems:NavItemType[] = [
        {
          id: uuidv4(),
          item: "Use Cases",
          url: "#features"
        },
        {
          id: uuidv4(),
          item: "Pricing",
          url: "#pricing"
        },
        {
          id: uuidv4(),
          item: "Blog",
          url: "#"
        },
    ]
    return (
        <div className="flex items-center justify-between lg:py-5 py-3 lg:px-20 px-4 sticky top-0 z-[99] backdrop-blur-lg">
          <MobileNavigation/>
         <Link to="/" > <img src={Logo} alt="" className="h-10" /></Link>
         <ul className="lg:flex items-center gap-8 hidden" >
            {
                navItems.map((item:NavItemType) => (
                    <li key={item.id} className="text-sm cursor-pointer font-normal text-white hover:text-primary relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-all before:duration-400 before:-bottom-1 before:start-0 before:bg-primary"> <a href={item.url} >{item.item}</a></li>
                ) )
            }
         </ul>
         <Button variant="lightprimary" className="flex items-center gap-2 !pe-4" >
            <span className="leading-none" >Get Started </span>
            <Icon icon="humbleicons:arrow-up" className="rotate-45 shrink-0 relative -top-[1px] " />
         </Button>
        </div>
    )
}