//https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts
//I believe this is the most efficient way to make sure the styles for sign up and sign in pages are the same
///if you try and access these pages when signed in, you will be redirected to either the homepage or the demo page - I could make sure that the demo is only accessible once via setting a boolean and then conditionally rendering, but I think creating this little layby in the user journey works for now too

export default function AuthLayout({ children }) {
  return (
    <div className="pageLayout">
      <div className="layoutLeft">layout is working!</div>
      <div className="layoutRight">{children}</div>
    </div>
  );
}
