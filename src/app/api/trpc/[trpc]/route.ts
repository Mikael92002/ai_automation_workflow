// route.ts = reserved filename for server routing
// notice [trpc] = param
// full route to this endpoint (e.g. localhost:3000): localhost:3000/api/trpc/123

// Following sets up GET and POST routes at /api/trpc/*
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { createTRPCContext } from '@/trpc/init';
import { appRouter } from '@/trpc/routers/_app';
 
const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter, // contains getUsers from _app.ts
    createContext: createTRPCContext, // from init.ts
  });
 
export { handler as GET, handler as POST };