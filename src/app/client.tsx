// // Runs in user's web browser:
// "use client";
// // imports hook used to access tRPC API endpoints on client side:
// import { useTRPC } from "@/trpc/client";
// // Pauses rendering until data available in cache:
// import { useSuspenseQuery } from "@tanstack/react-query";

// export const Client = () => {
//   const trpc = useTRPC();
//   const { data: users } = useSuspenseQuery(trpc.getUsers.queryOptions());
//   // ^ trpc.getUsers.queryOptions() is a
//   // "query address". An object with key-value pairs
//   //  that contains user info
//   //  useSuspenseQuery asks for getUsers data.
//   //  Since page.tsx prefetched this and
//   //  handed it down thru HydrationBoundary, the
//   //  hook reads data instantly from
//   //  cache w/out making network request
//   return <div>Client component: {JSON.stringify(users)}</div>;
// };
