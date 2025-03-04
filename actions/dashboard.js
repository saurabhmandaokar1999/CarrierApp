"use server"
import { auth } from "@clerk/nextjs/server";
import {db} from "@/lib/prisma";

export const generateAIInsights=async(industry)=>{

}

export async function getIndustryInsights(){
const {userId} = await auth();
if(!userId) throw new Error("Unauthorizes");

const user = await db.user.findUnique({
  where :{
    clerkUserId:userId,
  },
});
if(!user) throw NestedMiddlewareError("User not found");

if(!user.indutryInsight){
const insight = await generateAIInsights(user.industry);
const industryInsight = await db.industryInsight.create({
  data:{
    industry :user.industry,
    ...insights,
    nextUpdate: new Date(Date.now()+7*24*60*60*1000),

  }
});
return industryInsight;
}
return user.industryInsight;
}
