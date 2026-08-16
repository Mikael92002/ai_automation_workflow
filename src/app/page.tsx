// page.tsx = reserved filename for client routing
// This is a server component, runs entirely on server computer, not client computer
// @ points to /src
// protected server component
"use client";
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { LogoutButton } from "@/features/auth/components/logout-button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { toast } from "sonner";

const Page = /*async*/ () => {
  // await requireAuth();

  // const data = await caller.getUsers();

  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());

  const create = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: () => {
        toast.success("Job Queued");
      },
    }),
  );

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-y-6">
      protected server component
      <div>{JSON.stringify(data, null, 2)}</div>
      <Button disabled={create.isPending} onClick={() => create.mutate()}>
        Create Workflows
      </Button>
      <LogoutButton></LogoutButton>
    </div>
  );

  // const { data } = authClient.useSession();

  // return (
  //   <div className="min-h-screen min-w-screen flex items-center justify-center">
  //     {JSON.stringify(data)}
  //     {/* If data is present (meaning user logged in) render sign out button: */}
  //     {data && <Button onClick={() => authClient.signOut()}>Logout</Button>}
  //   </div>
  // );
  // // useEffect doesn't work in next.js!!!
  // // use async code instead (async code can only be used in server component, not client component):
  // // const users = await prisma.user.findMany(); // not safe, use tRPC (data access layer):
  // const queryClient = getQueryClient(); // cache for user's request on this specific page

  // void queryClient.prefetchQuery(trpc.getUsers.queryOptions()); // start fetching user data from db right now. void means run in background without blocking rest of code

  // const something = true;

  // return (
  //   <>
  //     <div
  //       className={cn(
  //         "text-red-500 font-bold",
  //         something === true && "text-green-500",
  //       )}
  //     >
  //       Hello world
  //     </div>
  //     <div className="flex items-center justify-center">
  //       {/* variant = "outline",
  //       where variant is like a key, outline is a value of tailwind css properties */}
  //       <Button variant="outline">Click moi</Button>
  //     </div>
  //     {/* HydrationBoundary used to dehydrate (JSON.parse) server data so client component can use it.
  //     dehydrate(queryClient) takes all queries fetched inside queryClient and dehydrates*/}
  //     <HydrationBoundary state={dehydrate(queryClient)}>
  //       <Suspense fallback={<p>loading...</p>}>
  //         <Client />
  //       </Suspense>
  //     </HydrationBoundary>
  //   </>
  // );
};

export default Page; // MUST BE default export bc Page is reserved name
