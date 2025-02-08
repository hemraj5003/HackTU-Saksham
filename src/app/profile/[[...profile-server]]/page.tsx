import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const {userId} = await auth();
  const isAuth= !!userId
  const user= await currentUser()

  if (!isAuth) {
    return redirect("/sign-in"); // Redirect if not signed in
  }

  return (
    <div className="h-full flex flex-col items-center justify-center text-2xl">
      Hello,  {user?.firstName}! Welcome to this app.
    </div>
  );
}
