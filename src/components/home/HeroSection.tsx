import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "../ui/button";
import dashboardSkeleton from "@/assets/images/background/dashboard.png";
import company1 from "@/assets/images/companies/cohesive_anago.png"; 
import company2 from "@/assets/images/companies/cohesive_bear_landscaping.png"; 
import company3 from "@/assets/images/companies/cohesive_corporate_cleaning.png"; 
import company4 from "@/assets/images/companies/cohesive_gotflow.png"; 
import company5 from "@/assets/images/companies/cohesive_janpro.png"; 
import company6 from "@/assets/images/companies/cohesive_kitchen_guard.png"; 
import company7 from "@/assets/images/companies/cohesive_rolling_suds.png"; 
import company8 from "@/assets/images/companies/cohesive_service_master.png"; 
import {v4 as uuidv4} from "uuid";
import mashPattern from "@/assets/images/features/ellipse.svg";



export default function HeroSection() {
  const Companies = [
    {
      id: uuidv4(),
      img:company1
    },
    {
      id: uuidv4(),
      img:company2
    },
    {
      id: uuidv4(),
      img:company3
    },
    {
      id: uuidv4(),
      img:company4
    },
    {
      id: uuidv4(),
      img:company5
    },
    {
      id: uuidv4(),
      img:company6
    },
    {
      id: uuidv4(),
      img:company7
    },
    {
      id: uuidv4(),
      img:company8
    },
  ]
  return (
    <>
    <div className="flex justify-center mt-12">
      <div className="flex flex-col gap-5 items-center text-center lg:w-5/12 w-full">
        <span  className="py-1.5 px-4 flex items-center gap-2 rounded-full bg-white/20 text-xs font-medium text-white">
          <Icon
            icon="solar:users-group-two-rounded-broken"
            width={16}
            height={16}
          />
          Outreach on Auto-Pilot
        </span>
        <div className="flex flex-col items-center gap-2">
          <h5 className="text-5xl font-medium text-white">
            Automate local business sales
          </h5>
          <p className="text-sm font-normal px-20 text-white/70">
            Completely automated lead generation and marketing to local
            businesses. Fully done for you on auto-pilot.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4 relative z-50">
          <Button asChild>
            <a
              target="_blank"
              href="https://calendly.com/cohesiveapp/cohesive-demo"
              className="flex items-center gap-2 !pe-4"
            >
              <span className="leading-none">Get Started </span>
              <Icon
                icon="humbleicons:arrow-up"
                className="rotate-45 shrink-0 relative -top-[1px] "
              />
            </a>
          </Button>
          <Button asChild variant="dark" className="border border-white/20">
            <a
              target="_blank"
              href="https://getcohesiveai.com/blog"
              className="flex items-center gap-2 !pe-4"
            >
              <span className="leading-none">Learn More </span>
              <Icon
                icon="humbleicons:arrow-up"
                className="rotate-45 shrink-0 relative -top-[1px] "
              />
            </a>
          </Button>
        </div>
      </div>
    </div>
    <div className="relative mash-bg" >
      <img src={mashPattern} alt="" className="absolute -top-50 z-10" />
    <div className="flex justify-center w-full min-h-96 bg-red-300">
        <div className="lg:w-5/12 mt-14 w-full">
        {/* <img src={dashboardSkeleton} alt="" className="relative z-50" /> */}
        </div>
    </div>
    {/* Customers */}
    <div className="bg-background py-8 w-full flex justify-center items-center relative z-50">
      <div className="lg:w-7/12 w-full overflow-hidden relative marquee-wrapper">
       <div className="marquee-content flex gap-12 flex-nowrap" >
        {
          Array(5).fill(0).map(() => (
            <div className="flex gap-20 flex-nowrap shrink-0" >
              {
                Companies.map((item) => (
                  <img key={item.id} src={item.img} alt="" width={60} className="shrink-0" />
                ))
              }
          </div>
          ))
        }
       </div>

      </div>
    </div>
    </div>
    </>
  );
}
