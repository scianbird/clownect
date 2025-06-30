import { db } from "@/utils/dbConnection";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import "@/components/Components.css";

export default function NewUserForm(props) {
  const userID = props.userid;
  const user = currentUser(); //i could not get this to work error: null value in column "username" of relation "clownect_users" violates not-null constraint so i got rid of the not null constraint.. :( )
  //the more i thought about it the more i wanted the user to have a username saved to my table, so i instead changed my method of sign up to email and will ask them to set a username here

  async function handleSubmit(formData) {
    "use server";
    //for the last assignment i didn't group these and instead declared them all seperately.. i believe this is the difference in wet and dry ... .  . ?
    formData = {
      username: formData.get("username"),
      user_bio: formData.get("user_bio"),
      clown_type: formData.get("clown_type"),
    };

    db.query(
      `INSERT INTO clownect_users(username, user_bio, clown_type, clerkauth_id) VALUES ($1,$2,$3, $4)`,
      [formData.username, formData.user_bio, formData.clown_type, userID]
    );

    redirect(`/demo`);
  }

  return (
    <>
      <div className="introText">
        Great to have you onboard!
        <p>Time to set up your profile:</p>
      </div>
      <form className="newFormAction" action={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          className="usernameBox"
          name="username"
          minLength={2} //this makes sure the username is at least 2 characters long
          placeholder="Username"
          required
        />

        <label htmlFor="bio">My Bio:</label>
        <textarea
          type="text"
          className="bioBox"
          name="user_bio"
          maxLength="299"
          placeholder="My favourite joke: my dog has no nose. How does he smell? Awful!"
          required
        />

        <label htmlFor="clown_type">I'm a clown:</label>
        <select type="text" className="selectBox" name="clown_type" required>
          <option value="pro">Professionally 🤡</option>
          <option value="pennywise">Like Pennywise 👾</option>
          <option value="ex">According to my ex 🤪</option>
        </select>
        <button className="submitButton" type="submit">
          Save
        </button>
      </form>
    </>
  );
}
