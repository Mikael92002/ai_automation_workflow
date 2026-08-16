/*
  Warnings:

  - You are about to drop the `worflow` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "worflow";

-- CreateTable
CREATE TABLE "workflow" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "workflow_pkey" PRIMARY KEY ("id")
);
