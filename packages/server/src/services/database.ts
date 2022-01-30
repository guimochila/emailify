import { connect } from 'mongoose';
import 'dotenv/config';

export async function startDatabase(): Promise<void> {
  const databaseUrl = process.env.DATABASE;

  if (!databaseUrl) {
    throw new Error(
      '🛑 Database url not found. Please check if the environment variable DATABASE is set. ',
    );
  }

  try {
    await connect(databaseUrl);
  } catch (error) {
    console.log('🛑 Error with database connection!');
    console.error('🚒', error);
    process.exit(1);
  }
}
