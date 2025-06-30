import { auth } from "@clerk/nextjs/server";
import NewUserForm from "@/components/NewUserForm";
import Link from "next/link";
import DemoTimeline from "@/components/DemoTimeline";
import LeftBar from "@/components/LeftBar";
//this demo page is the page the user will see when first using the app - we want the user to set their profile information after signing up, so we can render that form here

export default async function Demo() {
  const { userId } = await auth();
  if (userId != null) {
    return (
      <div>
        <DemoTimeline />{" "}
        <div className="continueLink">
          <Link href={"/"}>
            Got it! ps in future there will be a "make a post box" here. for now
            click this
          </Link>
        </div>
      </div>
    );
  }

  //this is a very round-about way of doing this, but the user will submit their info and then come right back to the demo page and then work through the demo before being directed to the "final" homepage with their real timeline .. I KNOW .. there are 100 easier ways to do this that don't make the user onboarding experience this convoluted. probably. BUT THIS IS THE ONE WE'VE GOT ..

  if (userId == null) {
    console.log("you should see a form below OR ELSE");
    return (
      <>
        <NewUserForm userid={userId} />;
      </>
    );
  }
}
