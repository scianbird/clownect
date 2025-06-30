import "@/components/Components.css";
import { UserButton } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

export default function RightNav() {
  return (
    <div className="rightnav">
      <SignOutButton className="signOut" />
    </div>
  );
}
