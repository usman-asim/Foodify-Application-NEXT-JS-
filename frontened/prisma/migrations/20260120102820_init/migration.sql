/*
  Warnings:

  - You are about to drop the column `name` on the `menu_items` table. All the data in the column will be lost.
  - Added the required column `naame` to the `menu_items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "menu_items" DROP COLUMN "name",
ADD COLUMN     "naame" TEXT NOT NULL;
