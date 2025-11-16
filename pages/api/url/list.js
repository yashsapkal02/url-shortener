import { verifyTokenFromRequest } from "../../../lib/auth";
import dbConnect from "../../../lib/mongodb";
import Url from "../../../models/Url";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  await dbConnect();

  // Get logged-in user via JWT
  const user = verifyTokenFromRequest(req);
  if (!user) return res.status(401).json({ error: "Unauthorized" });

  // Filter by user ID
  const urls = await Url.find({ user: user.userId }).sort({ createdAt: -1 });

  return res.status(200).json({ urls });
}
