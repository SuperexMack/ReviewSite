-- CreateTable
CREATE TABLE "NormalUser" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "NormalUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OwnerUser" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "organizationName" TEXT NOT NULL,
    "currentAllowed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "OwnerUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "comment" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "newProduct" (
    "id" SERIAL NOT NULL,
    "aurhorId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Review_id_key" ON "Review"("id");

-- CreateIndex
CREATE UNIQUE INDEX "newProduct_id_key" ON "newProduct"("id");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "NormalUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "newProduct" ADD CONSTRAINT "newProduct_aurhorId_fkey" FOREIGN KEY ("aurhorId") REFERENCES "OwnerUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
