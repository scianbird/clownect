//this is the profile page - in order to make sure we see the correct profile we will use the clerkauthid in the database and from auth
//i can use both of these to display the information we have stored about the user

import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";

export default async function ProfilePage({ params }) {
  const param = await params;
  console.log(param, "HELLO");
  const { userId } = await auth();
  console.log({ userId });
  const query = await db.query(
    `SELECT * FROM clownect_users WHERE clerkauth_id = '${userId}'`
  );
  const userdata = query.rows[0];
  console.log(userdata);

  return (
    <div>
      You are our {userdata.user_id}th user! Welcome {userdata.username}!
    </div>
  );
}
