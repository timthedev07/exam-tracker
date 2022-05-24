import { connectDB, collections } from "../index"

export const getUserTrackers = async (userId: string) => {
  if (!collections.trackers) throw 503;

  await connectDB();

  return await collections.trackers.find({
    userId,
  }).toArray();
}