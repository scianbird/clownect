//using the same setup as posts page from last week > post title on the timeline will bring you to that posts page where you can leave a comment on the post (comment form) < this week, if i have time, i may try to implement the comment replies since the relationship is set up in the database, but it's about making sure the parent comment id is correctly passed and if theres no parent comment id then display without any indent
import { notFound, redirect } from "next/navigation"; //adding a not-found error handling
import { db } from "@/utils/dbConnection";

export default async function postId({ params }) {
  const param = await params;
  console.log(param, "HELLO");
  const { postId } = param;
  console.log({ postId });
  const query = await db.query(
    `SELECT * FROM clownect_posts WHERE post_id = '${postId}'`
  );
  const postdata = query.rows[0];
  if (!postdata) {
    notFound();
  }

  return (
    <div>
      <p>{postdata.post_title}</p>
      <p>{postdata.post_body}</p>
    </div>
  );
}
