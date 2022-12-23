-- SQLite
CREATE TABLE IF NOT EXISTS "apps" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL
)
CREATE TABLE IF NOT EXISTS "jeb" (
	"ID"	INTEGER,
	"data"	VARCHAR(255) NOT NULL,,
	"category"	VARCHAR(255) NOT NULL,,
	PRIMARY KEY("ID" AUTOINCREMENT)
)
CREATE TABLE "preferences" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    "user" INTEGER NOT NULL,
    "app" INTEGER NOT NULL,
    "key" VARCHAR(255) NOT NULL,
    "value" VARCHAR(255) NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL
)
CREATE TABLE IF NOT EXISTS "users" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL
);