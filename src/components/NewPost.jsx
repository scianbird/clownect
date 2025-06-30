import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import "@/components/Components.css";

export default function NewPost(props) {
  const userID = props.userid;

  async function handleSubmit(formData) {
    "use server";
    //for the last assignment i didn't group these and instead declared them all seperately.. i believe this is the difference in wet and dry ... .  . ?
    formData = {
      post_title: formData.get("post_title"),
      post_body: formData.get("post_body"),
    };

    db.query(
      `INSERT INTO clownect_posts(post_title, post_body, userid) VALUES ($1,$2,$3)`,
      [formData.post_title, formData.post_body, userID]
    );
    console.log("submitted!");
    revalidatePath("/");
  }

  return (
    <form className="newPost" action={handleSubmit}>
      <label htmlFor="post_title">Post Title:</label>
      <input
        type="text"
        name="post_title"
        minLength={2} //this makes sure the username is at least 2 characters long
        placeholder="Post Title"
        className="postTitle"
      />
      <label htmlFor="post_body">Post Body:</label>
      <textarea
        type="text"
        name="post_body"
        maxLength="299"
        placeholder="Post Body"
        className="postBody"
      />

      <button type="submit" className="submitButtonPost">
        Save
      </button>
    </form>
  );
}
