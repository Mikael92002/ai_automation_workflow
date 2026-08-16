// import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/prisma";
import { inngest } from "@/inngest/client";

// used to create routers:
export const appRouter = createTRPCRouter({
  getWorkflows: protectedProcedure // basically api call
    // .input( // request body
    //   z.object({ // uses zod to validate incoming client request data
    //     text: z.string(), // client "text" data must be string. If not, 400 gets thrown automatically
    //   }),
    // )
    .query(({ ctx }) => {
      // .query acts like GET handler. Receives validated input in opts.input and returns {greeting: `hello {opts.input.text}`}
      // .mutation would be POST
      // opts is body
      return prisma.workflow.findMany({
        // where: {
        //   id: ctx.auth.user.id,
        // },
      });
    }),
  createWorkflow: protectedProcedure.mutation(async (ctx) => {
    // background job mocking:
      await inngest.send({
        name: "app/process.task",
        data: {
          id: "task_003",
          email: "mikael92002@gmail.com"
        }
      })

      return {success: true, message: "Job running"}
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter; // Allows static type checking (notice typeof)
