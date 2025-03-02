import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

const IndustryInsightpage = async () => {
    const {isOnboarded}=await getUserOnboardingStatus();
    if(!isOnboarded){ 
       redirect("/onboarding");
    }
};
export default IndustryInsightpage;