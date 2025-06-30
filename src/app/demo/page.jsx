import { auth } from "@clerk/nextjs/server";
import NewUserForm from "@/components/NewUserForm";
import Link from "next/link";

//this demo page is the page the user will see when first using the app - we want the user to set their profile information after signing up, so we can render that form here

export default async function Demo() {
  const { userId } = await auth();
  if (userId != null) {
    return (
      <div>
        hi! <Link href={"/"}>Go home</Link>
      </div>
    );
  }

  //this is a very round-about way of doing this, but the user will submit their info and then come right back to the demo page and work through the demo before being directed to the "final" homepage with their real timeline

  if (userId == null) {
    console.log("you should see a form below");
    return <NewUserForm userid={userId} />;
  }
}
