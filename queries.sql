-- my original database design has 3 related tables (user, post, comment), 1 junction table (linking comments to comments for a reply feature) and 1 unrelated table (with a demo user and comments - this means I can updae the demo at any time without risking changing actual users information)

/* CREATE TABLE IF NOT EXISTS clownect_users (
  user_id INT GENERATED ALWAYS AS IDENTITY,
  clerk_id INT PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL UNIQUE,
  user_bio TEXT
) */

/* CREATE TABLE IF NOT EXISTS clownect_posts (
post_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
poster_id INT REFERENCES clownect_users (clerk_id) NOT NULL,
post_title VARCHAR(255) NOT NULL,
post_body TEXT NOT NULL,
post_likes INT,
comment_id INT
)*/

/* I used the GUI to create the foreign key relationship between the post_id and the clerk_id in the user table*/

/*
CREATE TABLE IF NOT EXISTS clownect_comments (
  comment_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id INT REFERENCES clownect_users (clerk_id) NOT NULL,
  comment_body TEXT NOT NULL, 
  comment_likes INT,
  parent_comment_id INT
)*/

/*Created a juntion table in order to create/allow a "reply" feature*/
/* 
CREATE TABLE IF NOT EXISTS clownect_comments_replies (
    comment_id INT REFERENCES clownect_comments (comment_id) NOT NULL,
    parent_comment_id INT REFERENCES clownect_comments (parent_comment_id)
) */

/*why does even the parent comment need to be unique in the original table ... .. . . /*

/* the unrelated demo table was a lot easier
CREATE TABLE IF NOT EXISTS clownect_demo (
    user_id INT,
    username VARCHAR(255),
    post_id INT,
    post_title VARCHAR(255),
    post_body TEXT
)
 /*