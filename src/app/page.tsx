import { GetCurrentUser } from "@/server-actions/users";
import { UserButton } from "@clerk/nextjs";
import { Alert } from "antd";

export default async function Home() {
  const response = await GetCurrentUser();
  if (!response.success)
    return <Alert message={response.message} type="error" />;

  const { name, email } = response.data;
  return (
    <div className="p-5">
      <h1>Elearing Dev</h1>
      <UserButton />
      <p>Name: {name} </p>
      <p>Email: {email} </p>
    </div>
  );
}
