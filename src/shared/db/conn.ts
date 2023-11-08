import { MongoClient, Db } from "mongodb"

const connectio = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/'

const cli = new MongoClient(connectio)
await cli.connect()

export let db: Db = cli.db('tp-dsw')