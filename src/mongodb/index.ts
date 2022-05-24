import * as mongoDB from "mongodb";
import { Tracker } from "./models/Tracker";
export const collections: { trackers?: mongoDB.Collection<Tracker> } =
  {};

export const connectDB = async () => {
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.DB_CONN_STRING
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const trackersCollection: mongoDB.Collection = db.collection(
    process.env.DB_COLLECTION_NAME
  );

  collections.trackers = trackersCollection as any;

  console.log(
    `Access to collection "${trackersCollection.collectionName}" granted.`
  );
};