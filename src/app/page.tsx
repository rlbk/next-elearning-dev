import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  let name = user?.fullName;
  let email = user?.emailAddresses[0].emailAddress;
  return (
    <div className="p-5">
      <h1>Elearing Dev</h1>
      <UserButton />
      <p>Name: {name} </p>
      <p>Email: {email} </p>
    </div>
  );
}
