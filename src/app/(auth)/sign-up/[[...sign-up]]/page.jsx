//the sign up page is in a dynamic route - here I can use the clerk component and customise the rest of the page, including directing users to the "demo" page once they're done giving their details
//https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <>
      <div>SIGN Up</div>
      <SignUp />
    </>
  );
}
