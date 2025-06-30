//I want to conditionally render different components based on the status of the user (logged in or not)
//if the user is not logged in, they should see a "landing page" which allows you to sign up/in - this also lets me not just rely on the clerk modal and instead style custom pages (I'm sure there are other ways to do that vs how i've set this logic up..)
//if the user is logged in it, they should see their timeline/dashboard (i actually keep going back and forth on what to call this in my app, but i tend to default to timeline, so i will use that to try and avoid any confusion going on)
//in order to do this, i will use auth with clerk

import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";
//using auth means that the homepage should be async
import Timeline from "@/components/Timeline";
import NewUserForm from "@/components/NewUserForm";
//realising that the timeline will also have to be user-dependant .. I think I can do this just by passing the userid through here (thinking)
import NewPost from "@/components/NewPost";
import LeftBar from "@/components/LeftBar";

export default async function Home() {
  const { userId } = await auth();
  //i originally used the username as the only sign in/sign up method, howewever this led me to sooo many problems as i could not correctly pass it to the supabase tables (I was trying using the currentuser functionality) so instead I have changed it to require an email to sign up and i will just allow the username to be set in the newuserform instead
  // if the user is logged in
  if (userId != null) {
    //the database should be queried (async) to see if there is a matching auth id. also this was not working for a long time as i had this type constrained to an INT without realsing that clerk would obviously issue a string to allow for unique values
    const query = await db.query(
      `SELECT * FROM clownect_users WHERE clerkauth_id = $1`,
      [userId]
    );

    if (query.rowCount === 0) {
      console.log("no profile found and will redirect to profile create");
      return <NewUserForm userid={userId} />;
    }

    return (
      <div>
        <Timeline />
        <NewPost userid={userId} />
      </div>
    );
  }
}
