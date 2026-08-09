import { initTRPC } from '@trpc/server';
import { cache } from 'react';
 
export const createTRPCContext = cache(async () => { // cache() from react memoizes, so function only runs once per request
  /**
   * @see: https://trpc.io/docs/server/context
   */
  return { userId: 'user_123' };
});
 
// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.create({ // creates internal tRPC builder instance t.
  /**
   * @see https://trpc.io/docs/server/data-transformers
   */
  // transformer: superjson,
});
 
// Base router and procedure helpers
export const createTRPCRouter = t.router; // container that groups endpoints together
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure; // baseProdcedure is starting block for building endpoints
// for protected routes, it would look like the following:
// const protectedProcedure = baseProcedure.use(()=> {//check auth logic here, return true or false})
// use the above in _app.ts