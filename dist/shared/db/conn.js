import { MongoClient } from "mongodb";
const connectio = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/';
const cli = new MongoClient(connectio);
await cli.connect();
export let db = cli.db('tp-dsw');
//# sourceMappingURL=conn.js.map