//this is a global not found - not for the dynamic page

import Link from "next/link";
//need a link to direct users back to the homepage

export default function NotFound() {
  return (
    <>
      <h1>Its no laughing matter - we cant find what you are looking for!</h1>
      <Link href={"/"}>Go home</Link>
    </>
  );
}

//tested this by going to /hello and it seems to work ok!
