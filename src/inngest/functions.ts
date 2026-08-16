/* inngest functions definitions file
 (imported in route handler) */ 
import { inngest } from "./client";
import prisma from "@/lib/prisma";

// background task mock function:
export const processTask = inngest.createFunction(
  { id: "process-task", triggers: { event: "app/process.task" } },
  async ({ event, step }) => {
    const result = await step.run("handle-task", async () => {
      return { processed: true, id: event.data.id };
    });

    await step.sleep("pause", "10s");

    return prisma.workflow.create({
      data: {
        name: "test-workflow",
      },
    });
  }
);