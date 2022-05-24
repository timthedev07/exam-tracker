import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";
import { withAuth } from "../../../lib/middleware/authGuard";
import { withMethodGuard } from "../../../lib/middleware/methodGuard";
import { getUserTrackers } from "../../../mongodb/functions/getUserTrackers";

const handler: NextApiHandler = async (req, res) => {
  const session = (await getSession({ req }))!;

  const userId = session.userId;

  const items = await getUserTrackers(userId);

  res.send(items);
  res.end();
};

export default withMethodGuard(withAuth(handler), "GET");
