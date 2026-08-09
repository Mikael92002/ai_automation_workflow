// page.tsx = reserved filename for client routing
// This is a server component, runs entirely on server computer, not client computer
// @ points to /src
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { getQueryClient, trpc } from "@/trpc/server"; // getQueryClient creates server-side storage cache. trpc exposes server-side API query options
import { Client } from "./client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

const Page = async () => {
  // useEffect doesn't work in next.js!!!
  // use async code instead:
  // const users = await prisma.user.findMany(); // not safe, use tRPC (data access layer):
  const queryClient = getQueryClient(); // cache for user's request on this specific page

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions()); // start fetching user data from db right now. void means run in background without blocking rest of code

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
      <div className="flex items-center justify-center">
        {/* variant = "outline",
        where variant is like a key, outline is a value of tailwind css properties */}
        <Button variant="outline">Click moi</Button>
      </div>
      {/* HydrationBoundary used to dehydrate (JSON.parse) server data so client component can use it.
      dehydrate(queryClient) takes all queries fetched inside queryClient and dehydrates*/}
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<p>loading...</p>}>
          <Client />
        </Suspense>
      </HydrationBoundary>
    </>
  );
};

export default Page; // MUST BE default export bc Page is reserved name
