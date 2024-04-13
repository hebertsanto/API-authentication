import mongoose from 'mongoose';
import { logger } from '../logger';
import { env } from '../env';

const user = env.USER_DATABASE;
const password = env.PASSWORD_DATABASE;

const url_database = `mongodb+srv://${user}:${password}@cluster0.1eud56w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(url_database);

mongoose.connection.on('connected', () => {
  logger.info('Conected in database');
});

mongoose.connection.on('error', (error) => {
  logger.error(`Some error ocurred, ${error} `);
});

export default mongoose.connection;
