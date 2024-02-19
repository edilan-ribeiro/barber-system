-- CreateTable
CREATE TABLE "Phone" (
    "id" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "barbershopID" TEXT NOT NULL,

    CONSTRAINT "Phone_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Phone" ADD CONSTRAINT "Phone_barbershopID_fkey" FOREIGN KEY ("barbershopID") REFERENCES "Barbershop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
