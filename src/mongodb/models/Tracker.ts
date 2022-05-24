import { ObjectId } from "mongodb";

export class Tracker {
  constructor(
    public userId: string,
    public examName: string,
    public examDate: string,
    public pinned: string,
    public userEmail?: string,
    public id?: ObjectId
  ) {}
}