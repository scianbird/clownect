"use server";
import { db } from "@/utils/dbConnection";
import "@/components/Components.css";

export default async function DemoTimeline() {
  const query = await db.query(
    `SELECT * FROM clownect_demo ORDER BY post_id ASC;` //the asc means the user will see the posts in the order they have been created - in the "real" timeline it should be DESC so that newer posts are pushed to the top
  );
  const data = query.rows;
  console.log(data);

  return (
    <>
      <section className="postSection">
        {data.map((post) => (
          <div key={post.post_id}>
            <p className="demoUsername">{post.username}</p>
            <p className="demoTitle">{post.post_title}</p>
            <p className="demoText">{post.post_body}</p>
          </div>
        ))}
      </section>
    </>
  );
}
