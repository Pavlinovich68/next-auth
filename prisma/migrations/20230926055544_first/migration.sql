-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(30) NOT NULL,
    "desc" VARCHAR(255) NOT NULL,
    "img" VARCHAR(255) NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "username" VARCHAR(30) NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_name_u_ind" ON "users"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_u_ind" ON "users"("email");
