import { sql } from "./db"; export async function getUdhetimet() { return await sql`SELECT * FROM udhetimet`; }
