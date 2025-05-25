import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "../ui/button";
import {v4 as uuidv4} from "uuid";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export default function PricingSection() {

  AOS.init();

    const Benefits = [
        {
          id: uuidv4(),
          title:"Up to 3 simultaneous campaigns",
        },
        {
          id: uuidv4(),
          title:"Scrape any type of local business",
        },
        {
          id: uuidv4(),
          title:"Fully managed email deliverability",
        },
        {
          id: uuidv4(),
          title:"Fully automated email campaigns",
        },
    ]

  return (
    <>
      <div id="pricing" className="py-12 lg:pt-12 pt-8 w-full bg-background flex flex-col items-center">
        <div className="lg:w-6/12 w-full flex flex-col gap-2 items-center">
          <span className="py-1.5 px-4 flex items-center gap-2 rounded-full bg-white/20 text-xs font-medium text-white">
            <Icon icon="solar:tag-price-linear" width={16} height={16} />
            Pricing
          </span>
          <h5 className="text-4xl font-semibold text-white">
            Simple Monthly Pricing
          </h5>
          <p className="text-sm text-center lg:px-20 px-4 font-normal text-white/70">
            No long-term commitment required — cancel anytime.
          </p>
        </div>
        <div className="w-full flex items-center justify-center gap-16 mt-12">
          <div className="w-fit flex p-6 px-8 flex-col gap-8 bg-primary/10 rounded-md border border-primary">
            <h3 className="text-2xl font-medium text-white">
              Monthly Subscription
            </h3>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                {
                    Benefits.map((item) => (
                        <div key={item.id} className="flex items-center gap-3">
                        <span className="size-5 border border-primary bg-primary/10 rounded-full text-primary flex items-center justify-center">
                           <Icon icon="iconamoon:check" className="text-primary" width={16} height={16} />
                        </span>
                        <p className="text-sm text-white/70">
                        {item.title}
                        </p>
                    </div>
                    ))
                }

              </div>
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
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
