import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";
import { withAuth } from "../../../lib/middleware/authGuard";
import { withMethodGuard } from "../../../lib/middleware/methodGuard";

const handler: NextApiHandler = async (req, res) => {
  const session = (await getSession({ req }))!;

  const userId = session.userId;
};

export default withMethodGuard(withAuth(handler), "GET");