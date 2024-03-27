/*
  Warnings:

  - You are about to drop the column `loginTime` on the `Interest` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Interest` table. All the data in the column will be lost.
  - Added the required column `loginTime` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Interest" (
    "authorId" INTEGER,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "interest" TEXT NOT NULL,
    CONSTRAINT "Interest_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Interest" ("authorId", "id", "interest", "published") SELECT "authorId", "id", "interest", "published" FROM "Interest";
DROP TABLE "Interest";
ALTER TABLE "new_Interest" RENAME TO "Interest";
CREATE TABLE "new_User" (
    "email" TEXT NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "loginTime" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_User" ("email", "id", "name") SELECT "email", "id", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
