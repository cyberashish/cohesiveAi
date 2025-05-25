import featureImg from "@/assets/images/features/featureImage.png";
import {v4 as uuidv4} from "uuid";

export default function FeaturesSection(){ 
    const Features = [
        {
            id: uuidv4(),
            title: "Scrapes for local leads",
            subtitle: "Automatically scrapes Google Maps for local businesses, and finds the owner emails."
        },
        {
            id: uuidv4(),
            title: "Best practice emails",
            subtitle: "AI automatically personalizes cold emails based on best practices."
        },
        {
            id: uuidv4(),
            title: "Automated outreach",
            subtitle: "Automatically creates and manages email campaigns to target the local leads."
        },
    ]
    return (
        <div id="features" >
         <div  className="py-12 px-4 w-full bg-background flex flex-col items-center lg:flex-nowrap flex-wrap">
                <div className="lg:w-6/12 w-full flex flex-col gap-2 items-center">
                    <h5 className="text-4xl font-semibold text-white text-center">
                    Lead gen, done for you.
                    </h5>
                    <p className="text-sm text-center lg:px-20 px-4 font-normal text-white/70">
                    Cohesive automates the entire lead generation process for you to local businesses, such as to book cleaning walkthroughs and other services
                    </p>
                </div>
                <div className="lg:w-9/12 w-full flex items-center lg:flex-nowrap flex-wrap gap-16 lg:mt-20 mt-14">
                 <div className="lg:w-7/12 w-full">
                 <img src={featureImg} alt=""  className="shrink-0 w-full rounded-lg"/>
                 </div>
                 <div className="flex flex-col gap-6 lg:w-5/12 w-full">
                    {
                        Features.map((item) => (
                            <div key={item.id} className="p-6 py-4 rounded-lg flex flex-col gap-1.5 feature-pattern">
                            <h5 className="text-xl font-medium text-white">{item.title}</h5>
                            <p className="text-[13px] font-normal text-white/70">
                             {item.subtitle}
                            </p>
                        </div>
                        ))
                    }

                 </div>
                </div>
         </div>
        </div>
    )
}