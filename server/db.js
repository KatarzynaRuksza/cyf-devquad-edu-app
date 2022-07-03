import { Pool } from "pg";

//Please change the data bse url string to your local one.
// In this case my username is ali and my password for ali is 111111 and I have a local base called cyf_ecommerce in my laptop.
const dbUrl = process.env.DATABASE_URL || "postgres://shadab:222222@localhost:5432/cyf_ecommerce";

const pool = new Pool({
	connectionString: dbUrl,
	connectionTimeoutMillis: 5000,
	ssl: dbUrl.includes("localhost") ? false : { rejectUnauthorized: false },
});

export const connectDb = async () => {
	let client;
	try {
		client = await pool.connect();
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
	console.log("Postgres connected to", client.database);
	client.release();
};

export const disconnectDb = () => pool.close();

export default { query: pool.query.bind(pool) };
