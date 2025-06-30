"use server";
import { db } from "@/utils/dbConnection";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import "@/components/Components.css";

export default async function Timeline() {
  const query = await db.query(
    `SELECT * FROM clownect_posts ORDER BY post_id DESC;`
  );
  const data = query.rows;
  console.log(data);
  return (
    <>
      {" "}
      <section className="postSection">
        {data.map((post) => (
          <div key={post.post_id}>
            <Link href={`/user/${post.userid}`} className="timelineUsername">
              username
            </Link>
            {/* username will be dynamic eventually.. */}
            <Link href={`/posts/${post.post_id}`} className="timelinePosttitle">
              {post.post_title}
            </Link>
            <p className="timelineText">{post.post_body}</p>
          </div>
        ))}
      </section>
    </>
  );
}
