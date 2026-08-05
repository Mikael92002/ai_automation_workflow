import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";

const Page = async () => {
  // useEffect doesn't work in next.js!!!
  // use async code instead:
  const users = await prisma.user.findMany(); // not safe, use tRPC (data access layer)
  const something = true;

  return (
    <>
      <div
        className={cn(
          "text-red-500 font-bold",
          something === true && "text-green-500",
        )}
      >
        Hello world
      </div>
      <div className="min-h-screen min-w-screen flex items-center justify-center">
        {/* variant = "outline",
        where variant is like a key, outline is a value of tailwind css properties */}
        <Button variant="outline">Click moi</Button>
      </div>
      {/* Remember to stringify users: */}
      <div>{JSON.stringify(users)}</div>
    </>
  );
};

export default Page;
