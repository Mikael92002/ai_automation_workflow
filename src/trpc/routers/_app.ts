// import { z } from 'zod';
import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/prisma";

// used to create routers:
export const appRouter = createTRPCRouter({
  getUsers: protectedProcedure // basically api call
    // .input( // request body
    //   z.object({ // uses zod to validate incoming client request data
    //     text: z.string(), // client "text" data must be string. If not, 400 gets thrown automatically
    //   }),
    // )
    .query(({ ctx }) => {
      // .query acts like GET handler. Receives validated input in opts.input and returns {greeting: `hello {opts.input.text}`}
      // .mutation would be POST
      // opts is body
      return prisma.user.findMany({
        where: {
          id: ctx.auth.user.id,
        },
      });
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter; // Allows static type checking (notice typeof)
