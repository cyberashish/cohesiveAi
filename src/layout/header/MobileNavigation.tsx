
import Logo from "@/assets/images/logos/Logo.svg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export function MobileNavigation() {
    const location = useLocation();
    console.log(location);
    const hashed = location.hash;
    const [hashedValue , setHashedValue] = useState("");

    useEffect(() => {
       setHashedValue(hashed);
    },[location , hashed])

  return (
    <Sheet>
      <SheetTrigger asChild>
          <button className="text-white lg:hidden block" >
          <Icon icon="tabler:menu-3" width={28} height={28}  />
          </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[220px] z-[100]" >
        <SheetHeader>
          <SheetTitle asChild>
            <div className="flex justify-start" >
            <img src={Logo} alt="" className="h-10" />
            </div>
          </SheetTitle>
          <SheetDescription>
           <div className="flex flex-col gap-1.5 mt-6">
              <a href="#" className={`py-2 flex justify-start px-4  rounded-md text-sm font-medium text-white ${location.pathname === "/" && hashedValue ==="" ? 'bg-primary hover:bg-primary/90' : ''}`} >
               Home
              </a>
              <a href="#features" className={`py-2 flex justify-start px-4 rounded-md text-sm font-medium text-white ${hashedValue === "#features" ? 'bg-primary hover:bg-primary/90' : ''}`} >
               Use Cases
              </a>
              <a href="#pricing" className={`py-2 flex justify-start px-4 rounded-md text-sm font-medium text-white ${hashedValue === "#pricing" ? 'bg-primary hover:bg-primary/90' : ''}`} >
               Pricing
              </a>
              <a href="#" className="py-2 flex justify-start px-4 rounded-md text-sm font-medium text-white" >
                Blog
              </a>
           </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
