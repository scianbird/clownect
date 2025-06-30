//the sign in page is in a dynamic route - here I can use the clerk component and customise the rest of the page - I don't want to use a modal type of sign in
//https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <>
      <SignIn />
    </>
  );
}
