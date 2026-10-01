import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const env = {
  port: process.env.PORT || 3000,
  clientDist: path.resolve(__dirname, '../../../client/dist'),
};
