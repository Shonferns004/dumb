import { sql} from '../config/db.js'


export const initDB = async () => {
  try {
    await sql`CREATE TABLE IF NOT EXISTS transactions(
            id SERIAL PRIMARY KEY,
            user_id VARCHAR(255) NOT NULL,
            title VARCHAR(255) NOT NULL,
            amount DECIMAL(10,2) NOT NULL,
            category VARCHAR(255) NOT NULL,
            created_at DATE NOT NULL DEFAULT CURRENT_DATE
        )`;

    console.log("Database initialized successfully..");
  } catch (err) {
    console.log("Error initializing database", err);
    process.exit(1);
  }
};
