export default function Header() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(91deg, #eb5353 25%, #fffdf0 25%, #fffdf0 50%, #eb5353 50%, #eb5353 75%, #fffdf0 75%, #fffdf0 100%);
background-size: 60.01px 3437.92px;`, //please please ignore how unoptimised this image is :) - never mind i replace it with a css linear gradient that suggests the same thing.. i do want to go back to my pixel art bigtop though and make this look like its a point and click game from like 2009
        backgroundSize: "fit",
        backgroundPosition: "center",
        height: "5rem",
        borderBottomWidth: "4px",
      }}
    ></div>
  );
}
