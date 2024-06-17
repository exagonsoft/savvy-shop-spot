import dotenv from "dotenv"

export const DBConnection = () => {
    dotenv.config();
    return {
        DB_URL: process.env.POSTGRES_PRISMA_URL,
        PG_URL: process.env.POSTGRES_URL
    }
}