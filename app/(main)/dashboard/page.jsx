import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

const IndustryInsightpage = async () => {
    const {isOnboarded}=await getUserOnboardingStatus();
    if(!isOnboarded){ 
       redirect("/onboarding");
    }
    return (
        <main>
            <h1>Industry Insight</h1>
        </main>
    );
};
export default IndustryInsightpage;