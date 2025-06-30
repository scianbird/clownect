//trying to kill 2 birds with one stone so to speak & import a loading spinner from material UI
//originally I was going to install a right-side drawer for navigation (and to look like the curtain pulling over) but it's clear many things have had to be a little... pared back
//it works !!! I see it when testing with throttle !
import CircularProgress from "@mui/joy/CircularProgress";

export default function Loading() {
  return (
    <>
      {" "}
      <CircularProgress
        color="danger"
        size="lg"
        value={15}
        variant="outlined"
      />
    </>
  );
}
